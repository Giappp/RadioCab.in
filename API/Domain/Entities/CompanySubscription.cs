using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities
{
    public class CompanySubscription
    {
       [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
       public int Id { get; set; }
       public int CompanyId { get; set; }
       [Required]
       public int PlanId { get; set; }

       [ForeignKey(nameof(PlanId))]
       public Plan? Plan { get; set; }
       public DateTime? StartDate { get; set; } = DateTime.UtcNow;
       public DateTime? EndDate { get; set; }
        public Company ?Company { get; set; }
       public int PaymentId { get; set; }
       [ForeignKey(nameof(PaymentId))]
       public Payment ?Payment { get; set; }
    }
}
