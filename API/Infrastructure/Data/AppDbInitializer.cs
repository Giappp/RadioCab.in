using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Data
{
    public class AppDbInitializer
    {
        private readonly ModelBuilder _modelBuilder;
        public AppDbInitializer(ModelBuilder builder)
        {
            _modelBuilder = builder;
        }
        public void Seed()
        {
            _modelBuilder.Entity<Plan>().HasData(
                    new Plan { PlanId=-1,PlanName = "Monthly" },
                    new Plan { PlanId=-2,PlanName = "Quarterly" }
                );
            _modelBuilder.Entity<Membership>().HasData(
                    new Membership { MemberShipId=-1,MembershipName = "Free", MembershipDescription = "Free for everyone" },
                    new Membership { MemberShipId=-2,MembershipName = "Premium", MembershipDescription = "For Subscriber only" }
                );
        }
    }
}
