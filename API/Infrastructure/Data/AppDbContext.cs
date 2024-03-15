using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext() : base() { }
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }    
        public DbSet<Cab> Cabs { get; private set; }
        public DbSet<CarModel> Cars { get; private set; }
        public DbSet<Company> Companys { get; private set; }
        public DbSet<Driver> Drivers { get; private set; }
        public DbSet<FeedBack> FeedBacks { get; private set; }
        public DbSet<Membership> Memberships { get; private set; }
        public DbSet<Plan> Plans { get; private set; }
        public DbSet<Payment> Payment { get; private set; }
        public DbSet<Rental> Rentals { get; private set; }
        public DbSet<Subscription> Subscriptions { get; private set; }
        public DbSet<User> Users { get; private set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<CompanySubscription>()
             .HasKey(cs => new { cs.CompanyId, cs.SubscriptionId });

            modelBuilder.Entity<DriverSubscription>()
                .HasKey(ds => new { ds.DriverId, ds.SubscriptionId });

            base.OnModelCreating(modelBuilder);
            new AppDbInitializer(modelBuilder).Seed();
        }
    }
}
