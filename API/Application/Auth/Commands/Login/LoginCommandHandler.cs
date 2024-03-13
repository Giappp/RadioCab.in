using Application.Common.Interfaces;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Auth.Commands.Login
{
    internal class LoginCommandHandler : IRequestHandler<LoginCommandRequest,LoginCommandRespone>
    {
        private readonly ITokenGenerator _tokenGenerator;
        private readonly IIdentityService _identityService;

        public LoginCommandHandler(ITokenGenerator tokenGenerator, IIdentityService identityService)
        {
            _tokenGenerator = tokenGenerator;
            _identityService = identityService;
        }

        public async Task<LoginCommandRespone> Handle(LoginCommandRequest request, CancellationToken cancellationToken)
        {
            var userId = await _identityService.GetUserIdAsync(request.Email);
            if(userId == null)
            {
                return null;
            }
            if (!await _identityService.SignInUserAsync(request.Email, request.Password))
            {
                return null;
            }
            string token = _tokenGenerator.GenerateJWTToken(userId) ?? string.Empty;
            return new LoginCommandRespone { Token = token, UserId = userId };
        }
    }
}
