using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities
{
    public class DriverSubscription
    {
        public int DriverId { get; set; }
        public int SubscriptionId { get; set; }
        public Driver Driver { get; set; } = null;
        public Subscription Subscription { get; set; } = null;
    }
}
