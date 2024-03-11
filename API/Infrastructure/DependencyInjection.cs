﻿using Infrastructure.Data;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure;

public static class DependencyInjection
{
    public static IServiceCollection AddInfrastructure(this IServiceCollection services, IConfiguration configuration)
    {
        services.AddSingleton<AuthDbContextFactory>();
        services.AddSingleton<AppDbContext>();

        // Configure AuthDbContext using AuthDbContextFactory
        services.AddDbContext<AuthDbContext>((provider, options) =>
        {
            var factory = provider.GetRequiredService<AuthDbContextFactory>();
            options.UseSqlServer(configuration.GetConnectionString("AuthConnection"),
                b => b.MigrationsAssembly(typeof(AuthDbContext).Assembly.FullName));
        }, ServiceLifetime.Transient);

        // Configure AppDbContext using AppDbcontextFactory
        services.AddDbContext<AppDbContext>((provider, options) =>
        {
            var factory = provider.GetService<AuthDbContextFactory>();
            options.UseSqlServer(configuration.GetConnectionString("DefaultConnection"),
                b => b.MigrationsAssembly(typeof(AppDbContext).Assembly.FullName));
        });

        services.AddAuthentication(options =>
        {
            options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
            options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
        })
            .AddJwtBearer(options =>
            {
                options.SaveToken = true;
                options.RequireHttpsMetadata = false;
                options.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuer = true,
                    ValidateAudience = true,
                    ValidAudience = configuration["JWT:ValidAudience"],
                    ValidIssuer = configuration["JWT:ValidIssuer"],
                    IssuerSigningKey =
                        new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["JWT:Secret"]!))
                };
            });

        services.AddDefaultIdentity<IdentityUser>(options =>
               options.SignIn.RequireConfirmedAccount = false)
                   .AddRoles<IdentityRole>()
                   .AddEntityFrameworkStores<AuthDbContext>();

        return services;
    }
}