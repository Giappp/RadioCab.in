using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Data
{
    public class AuthDbContextFactory : IDesignTimeDbContextFactory<AuthDbContext>
    {
        public AuthDbContext CreateDbContext(string[] args)
        {
            var startupProjectPath = Path.Combine(Directory.GetCurrentDirectory(), "..", "WebAPI"); // Adjust the path based on your project structure

            var configuration = new ConfigurationBuilder()
                .SetBasePath(startupProjectPath)
                .AddJsonFile("appsettings.json")
                .Build();

            var builder = new DbContextOptionsBuilder<IdentityDbContext>();
            var connectionString = configuration.GetConnectionString("AuthConnection");

            builder.UseSqlServer(connectionString);

            return new AuthDbContext(builder.Options);
        }
    }
}
