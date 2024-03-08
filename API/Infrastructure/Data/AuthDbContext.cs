using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Reflection;

namespace Infrastructure.Data
{
    public class AuthDbContext : IdentityDbContext
    {
        public AuthDbContext(DbContextOptions<AuthDbContext> options) : base(options) { }
        public DbSet<IdentityUser> Users {  get; set; }
        public DbSet<IdentityRole> UserRoles {  get; set; }
        public DbSet<Company> Companies { get; set; }
        public DbSet<Driver> Drivers { get; set; }
    }
}
