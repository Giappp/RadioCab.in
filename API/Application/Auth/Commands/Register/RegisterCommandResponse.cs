using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Auth.Commands.Register
{
    public class RegisterCommandResponse
    {
        public required string Token {  get; set; }
        public required string UserId { get; set; }
    }
}
