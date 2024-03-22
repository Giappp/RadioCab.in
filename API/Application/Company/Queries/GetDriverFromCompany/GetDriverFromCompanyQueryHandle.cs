using Application.Common.Models;
using Application.Company.Querries.GetDriverFromCompany;
using Application.DTOs.Driver;
using Domain.Entities;
using Domain.Interfaces;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Company.Queries.GetDriverFromCompany
{
    internal class GetDriverFromCompanyQueryHandler : IRequestHandler<GetDriverFromCompanyQuery, IEnumerable<DriverFromCompanyDTO>>
    {
        private readonly ICompanyRepository _companyRepository;

        public GetDriverFromCompanyQueryHandler(ICompanyRepository companyRepository)
        {
            _companyRepository = companyRepository ?? throw new ArgumentNullException(nameof(companyRepository));
        }

        public async Task<IEnumerable<DriverFromCompanyDTO>> Handle(GetDriverFromCompanyQuery request, CancellationToken cancellationToken)
        {
            var drivers = await _companyRepository.GetDriversFromCompany(request.CompanyId);

            if (drivers == null || !drivers.Any())
                return Enumerable.Empty<DriverFromCompanyDTO>(); // Return an empty enumerable if no drivers found

            var driverDTOs = new List<DriverFromCompanyDTO>();

            foreach (var driver in drivers)
            {
                var activeContract = driver.DriverContracts.FirstOrDefault(dc =>
                    dc.CompanyId == request.CompanyId && dc.EndDate > DateTime.UtcNow);

                var inactiveContract = driver.DriverContracts.FirstOrDefault(dc =>
                    dc.CompanyId == request.CompanyId && dc.EndDate < DateTime.UtcNow);

                var dto = new DriverFromCompanyDTO
                {
                    City = driver.City,
                    DriverName = driver.DriverName,
                    Experience = driver.Experience,
                    StartDate = activeContract?.StartDate ?? DateTime.MinValue, // Use null coalescing operator to handle null case
                    EndDate = inactiveContract?.EndDate ?? DateTime.MinValue // Use null coalescing operator to handle null case
                };

                driverDTOs.Add(dto);
            }
            return driverDTOs;
        }
    }
}
