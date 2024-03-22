using Application.DTOs.Driver;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Driver.Queries
{
    public class GetAllDriverQuery : IRequest<IEnumerable<DriverDTO>>
    {
    }
}
