using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Auth.Commands.Login
{
    public class LoginCommandRespone
    {
        public required string Token { get; init; }
        public required string UserName { get; init; }
    }
}
