using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
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
        public int PaymentId { get; set; }
        [ForeignKey(nameof(PaymentId))]
        public Payment Payment { get; set; }
    }
}
