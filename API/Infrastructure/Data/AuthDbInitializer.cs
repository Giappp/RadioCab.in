using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Data
{
    public class AuthDbInitializer
    {
        private readonly ModelBuilder _modelBuilder;
        public AuthDbInitializer(ModelBuilder builder)
        {
            _modelBuilder = builder;
        }
        public void Seed()
        {
            _modelBuilder.Entity<IdentityRole>().HasData(
                    new IdentityRole { Name="User",NormalizedName="USER"},
                    new IdentityRole { Name="Company",NormalizedName="COMPANY"},
                    new IdentityRole { Name="Driver",NormalizedName="DRIVER"}
             );
        }
    }
}
