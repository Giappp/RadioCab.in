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
    public class Company : IdentityUser
    {
        [Required]
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int CompanyId { get; set; }
        public string CompanyName { get; set; }
        public string ContactPerson {  get; set; }
        public string Designation {  get; set; }
        public string FaxNumber { get; set; }
        public string Description { get; set; }
    }
}
