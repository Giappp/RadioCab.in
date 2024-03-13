using Application.DTOs;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Auth.Commands.Login
{
    public class LoginCommandRequest : IRequest<LoginCommandRespone>
    {
        public required string Email { get; init; }
        public required string Password { get; init; }
    }
}
