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
    public class Driver : RegisteredUnit
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int DriverId { get; set; }
        [Required]
        public string DriverName { get; set; }
        [Required]
        public string ContactPerson { get; set; }
        [Required]
        public string City { get; set; }
        [Required]
        public int Experience { get; set; }
        public string Description { get; set; }
        public int MembershipId { get; set; }
        [Required]
        [ForeignKey(nameof(MembershipId))]
        public Membership Membership { get; set; }
        [Required]
        public ICollection<DriverSubscription> DriverSubscriptions { get; set; }
        [NotMapped]
        public bool? IsActive { get; set; }
    }
}
