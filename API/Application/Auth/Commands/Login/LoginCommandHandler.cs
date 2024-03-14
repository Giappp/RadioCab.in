using Application.Common.Interfaces;
using Application.Common.Models;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Auth.Commands.Login
{
    public class LoginCommandHandler : IRequestHandler<LoginCommandRequest,ServiceResult<LoginCommandRespone>>
    {
        private readonly ITokenGenerator _tokenGenerator;
        private readonly IIdentityService _identityService;

        public LoginCommandHandler(ITokenGenerator tokenGenerator, IIdentityService identityService)
        {
            _tokenGenerator = tokenGenerator;
            _identityService = identityService;
        }

        public async Task<ServiceResult<LoginCommandRespone>> Handle(LoginCommandRequest request, CancellationToken cancellationToken)
        {
            var userId = await _identityService.GetUserIdAsync(request.Email);
            if(userId == null)
            {
                return ServiceResult.Failed<LoginCommandRespone>(ServiceError.WrongUserNameOrPassword);
            }
            if (!await _identityService.CheckPasswordAsync(userId, request.Password))
            {
                return ServiceResult.Failed<LoginCommandRespone>(ServiceError.WrongUserNameOrPassword);
            }
            string token = _tokenGenerator.CreateJwtSecurityToken(userId) ?? string.Empty;
            return ServiceResult.Success(new LoginCommandRespone { Token = token, UserId = userId });
        }
    }
}
