using Application.DTOs.Company;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Company.Queries.GetAllCompany
{
    public class GetAllCompanyQuery : IRequest<IEnumerable<CompanyDTO>>
    {
    }
}
