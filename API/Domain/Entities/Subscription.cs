using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities
{
    public class Subscription
    {
        [Key]
        [Required]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int SubscriptionId { get; set; }
        [Required]
        public int PlanId { get; set; }
        [Required]
        public int PaymentId { get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        [ForeignKey(nameof(PaymentId))]
        public Payment Payment { get; set; }
        
        [ForeignKey(nameof(PlanId))]
        public Plan Plan { get; set; }
        public ICollection<CompanySubscription> CompanySubscriptions { get; set; }
        public ICollection<DriverSubscription> DriverSubscriptions { get; set; }
    }
}
