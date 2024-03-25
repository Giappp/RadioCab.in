using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Auth.Commands.Register
{
    public class RegisterCommandResponse
    {
        public required string Token { get; init; }
        public required string UserId { get; init; }
        public required string DisplayName {  get; init; }
        public required IList<string> UserRole { get; init; }
    }
}
