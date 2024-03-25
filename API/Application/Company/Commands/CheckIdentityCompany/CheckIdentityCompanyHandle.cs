using Domain.Interfaces;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Company.Commands.CheckIdentityCompany
{
    public class CheckIdentityCompanyHandle : IRequestHandler<CheckIdentityCompanyRequest, bool>
    {
        private readonly ICompanyRepository _companyRepository;
        public CheckIdentityCompanyHandle(ICompanyRepository companyRepository)
        {
            _companyRepository = companyRepository;
        }
        public async Task<bool> Handle(CheckIdentityCompanyRequest request, CancellationToken cancellationToken)
        {
            return await _companyRepository.CheckIdentityCompany(request.IdentityId);
        }
    }
}
