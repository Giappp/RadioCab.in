using Application.DTOs.Company;
using Domain.Entities;
using Domain.Interfaces;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Company.Queries.GetAllCompany
{
    public class GetAllCompanyQueryHandle : IRequestHandler<GetAllCompanyQuery,IEnumerable<CompanyDTO>>
    {
        private readonly ICompanyRepository _companyRepository;
        public GetAllCompanyQueryHandle(ICompanyRepository companyRepository)
        {
            _companyRepository = companyRepository;
        }
        async Task<IEnumerable<CompanyDTO>> IRequestHandler<GetAllCompanyQuery, IEnumerable<CompanyDTO>>.Handle(GetAllCompanyQuery request, CancellationToken cancellationToken)
        {
            var companies = await _companyRepository.GetAll();
            var companiesDTO = new List<CompanyDTO>();
            if(companies != null)
            {
                foreach (Domain.Entities.Company company in companies)
                {
                    var companyDTO = new CompanyDTO()
                    {
                        CompanyName = company.CompanyName,
                        ContactPerson = company.ContactPerson,
                        Designation = company.Designation,
                        FaxNumber = company.FaxNumber,
                        MemberShipName = company.Membership != null ? company.Membership.MembershipName : "Free",
                        IsSubscriber = company.CompanySubscriptions != null ? company.CompanySubscriptions.Any() : false,
                    };
                    companiesDTO.Add(companyDTO);
                }
            }
            return companiesDTO;
        }
    }
}
