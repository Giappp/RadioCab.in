using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities
{
    public class Payment
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int PaymentId { get; set; }
        public required string PaymentType { get; set; }
        public DateTime? CreatedDate { get; set; }
        public bool IsApproved { get; set; }
        public int PaymentStatus { get; set; }
        public float? PaymentAmount { get; set; }
    }
}
