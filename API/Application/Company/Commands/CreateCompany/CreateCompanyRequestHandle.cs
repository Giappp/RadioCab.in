using Domain.Entities;
using Domain.Interfaces;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Company.Commands.CreateCompany
{
    public class CreateCompanyRequestHandle : IRequestHandler<CreateCompanyRequest, bool>
    {
        private readonly ICompanyRepository _companyRepository;
        public CreateCompanyRequestHandle(ICompanyRepository companyRepository)
        {
            _companyRepository = companyRepository;
        }

        public Task<bool> Handle(CreateCompanyRequest request, CancellationToken cancellationToken)
        {
            /*
            var company = new Domain.Entities.Company()
            {
                CompanyName = request.CompanyName,
                ContactPerson = request.Representative,
                Designation = request.Designation,
                Email = request.Email,
                FaxNumber = request.Fax,
                PhoneNumber = request.Phone,
                Address = request.Address,
                
            }
            */
            throw new NotImplementedException();
        }
    }
}
