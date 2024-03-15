using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities
{
    public abstract class RegisteredUnit
    {
        public required string Email {  get; set; }
        public required string Address { get; set; }
        public required string PhoneNumber {  get; set; }
    }
}
