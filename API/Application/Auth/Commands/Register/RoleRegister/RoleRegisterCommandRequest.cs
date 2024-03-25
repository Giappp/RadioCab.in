using Application.Common.Models;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Auth.Commands.Register.CompanyRegister
{
    public class RoleRegisterCommandRequest : IRequest<ServiceResult<RegisterCommandResponse>>
    {
        public string DisplayName { get; set; }
        public string Email {  get; set; }
        public string Password { get; set; }
        public string ConfirmPassword { get; set; }
        public string Role {  get; set; }
    }
}
