using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Company.Commands.CheckIdentityCompany
{
    public class CheckIdentityCompanyRequest : IRequest<bool>
    {
        public required string IdentityId { get; init; }
    }
}
