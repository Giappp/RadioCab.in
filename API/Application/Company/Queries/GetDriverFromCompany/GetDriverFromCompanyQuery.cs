using Application.Common.Models;
using Application.DTOs.Driver;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Company.Querries.GetDriverFromCompany
{
    public class GetDriverFromCompanyQuery : IRequest<IEnumerable<DriverFromCompanyDTO>>
    {
        public int CompanyId { get; set; }
    }
}
