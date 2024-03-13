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
        public string CompanyName { get; set; }
        [Required]
        public string ContactPerson {  get; set; }
        [Required]
        public string Designation {  get; set; }
        public string FaxNumber { get; set; }
        public string Description { get; set; }
        public int MembershipId { get; set; }
        [Required]
        [ForeignKey(nameof(MembershipId))]
        public Membership Membership { get; set; }
        [Required]
        public ICollection<CompanySubscription> CompanySubscriptions { get; set; }
    }
}
