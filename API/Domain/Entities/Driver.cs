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
        public required string DriverName { get; set; }
        [Required]
        public required string ContactPerson { get; set; }
        [Required]
        public required string City { get; set; }
        [Required]
        public required int Experience { get; set; }
        public string ?Description { get; set; }
        public int MembershipId { get; set; }
        [ForeignKey(nameof(MembershipId))]
        public Membership ?Membership { get; set; }
        public ICollection<DriverSubscription> ?DriverSubscriptions { get; set; }
        public ICollection<Cab> ?Cabs { get; set; }
        public ICollection<DriverContract> ?DriverContracts { get; set; }
        [NotMapped]
        public bool? IsActive { get; set; }
    }
}
