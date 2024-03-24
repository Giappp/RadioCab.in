using Application.DTOs.Company;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Company.Queries.GetServicesFromCompany
{
    public class GetServiceFromCompanyQuery : IRequest<IEnumerable<CompanyServiceDTO>>
    {
        public int CompanyId { get; set; }
    }
}
