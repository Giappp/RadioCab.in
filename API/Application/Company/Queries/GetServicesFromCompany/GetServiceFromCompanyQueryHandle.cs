using Application.DTOs.Company;
using Domain.Interfaces;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Company.Queries.GetServicesFromCompany
{
    internal class GetServiceFromCompanyQueryHandle : IRequestHandler<GetServiceFromCompanyQuery, IEnumerable<CompanyServiceDTO>>
    {
        private readonly ICompanyRepository _companyRepository;
        public GetServiceFromCompanyQueryHandle(ICompanyRepository companyRepository)
        {
            _companyRepository = companyRepository;
        }

        async Task<IEnumerable<CompanyServiceDTO>> IRequestHandler<GetServiceFromCompanyQuery, IEnumerable<CompanyServiceDTO>>.Handle(GetServiceFromCompanyQuery request, CancellationToken cancellationToken)
        {
            var companyServices = await _companyRepository.GetServicesFromCompany(request.CompanyId);
            var dtos = new List<CompanyServiceDTO>();
            if(companyServices.Any())
            {
                foreach(var companyService in companyServices)
                {
                    var dto = new CompanyServiceDTO
                    {
                        ServiceTitle = companyService.ServiceTitle,
                        ServiceDescription = companyService.ServiceDescription,
                        ServiceUrl = companyService.ServiceUrl,
                    };
                    dtos.Add(dto);
                }
            }
            return dtos;
        }
    }
}
