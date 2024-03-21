using Application.Common.Models;
using Application.Company.Querries.GetDriverFromCompany;
using Application.DTOs.Driver;
using Domain.Entities;
using Domain.Interfaces;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Company.Queries.GetDriverFromCompany
{
    internal class GetDriverFromCompanyQueryHandle : IRequestHandler<GetDriverFromCompanyQuery, IEnumerable<DriverFromCompanyDTO>>
    {
        private readonly ICompanyRepository _companyRepository;
        public GetDriverFromCompanyQueryHandle(ICompanyRepository companyRepository)
        {
            _companyRepository = companyRepository;
        }
        public async Task<IEnumerable<DriverFromCompanyDTO>> Handle(GetDriverFromCompanyQuery request, CancellationToken cancellationToken)
        {
            var driver = await _companyRepository.GetDriversFromCompany(request.CompanyId);
            var dtos = new List<DriverFromCompanyDTO>();
            if (driver != null)
            {
                foreach(Driver d in driver)
                {
                    var dto = new DriverFromCompanyDTO()
                    {
                        City = d.City,
                        DriverName = d.DriverName,
                        Experience = d.Experience,
                    };
                    dtos.Add(dto);
                }
                return dtos;
            }
            else
            {
                return null;
            }
        }
    }
}
