using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.DTOs.Company
{
    public class CompanyDTO
    {
        public string CompanyName { get; set; }
        public string ContactPerson {  get; set; }
        public required string Designation { get; set; }
        public required string FaxNumber { get; set; }
        public string MemberShipName {  get; set; }
        public bool IsSubscriber { get; set; }
    }
}
