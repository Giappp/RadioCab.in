using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Company.Commands.CreateCompany
{
    public class CreateCompanyRequest : IRequest<bool>
    {
        public required string CompanyName { get; set; }
        public required string Representative {  get; set; }
        public required string Designation {  get; set; }
        public required string Email {  get; set; }
        public required string Address {  get; set; }
        public string? Telephone {  get; set; }
        public string? Phone {  get; set; }
        public required string Fax { get; set; }
    }
}
