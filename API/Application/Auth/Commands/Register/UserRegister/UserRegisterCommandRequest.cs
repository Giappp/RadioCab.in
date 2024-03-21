using Application.Common.Models;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Auth.Commands.Register.UserRegister
{
    public class UserRegisterCommandRequest : IRequest<ServiceResult<RegisterCommandResponse>>
    {
        public required string UserName { get; init; }
        public required string Email { get; init; }
        public required string Password { get; init; }
        public required string ConfirmPassword { get; init; }
        public required string Address { get; init; }
        public required string Phone { get; init; }
        public required string Role { get; init; }
    }
}
