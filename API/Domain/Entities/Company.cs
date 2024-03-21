using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Reflection.Metadata;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities
{
    public class Company : RegisteredUnit
    {
        [Key]
        [Required]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int CompanyId { get; set; }
        [Required]
        public required string CompanyName { get; set; }
        [Required]
        public required string ContactPerson {  get; set; }
        [Required]
        public required string Designation {  get; set; }
        public required string FaxNumber { get; set; }
        public string? Description { get; set; }
        public int MembershipId { get; set; }
        [ForeignKey(nameof(MembershipId))]
        public Membership ?Membership { get; set; }
        public IEnumerable<CompanySubscription> ?CompanySubscriptions { get; set; }
        public IEnumerable<DriverContract> ?DriverContracts { get; set; }
    }
}
