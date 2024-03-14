using Application.Common.Interfaces;
using Application.Common.Models;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Auth.Commands.Register.UserRegister
{
    public class UserRegisterCommandHandler : IRequestHandler<UserRegisterCommandRequest, ServiceResult<RegisterCommandResponse>>
    {
        private readonly IIdentityService _identityService;
        private readonly ITokenGenerator _tokenGenerator;
        public UserRegisterCommandHandler(IIdentityService identityService, ITokenGenerator tokenGenerator)
        {
            _identityService = identityService;
            _tokenGenerator = tokenGenerator;
        }

        public async Task<ServiceResult<RegisterCommandResponse>> Handle(UserRegisterCommandRequest request, CancellationToken cancellationToken)
        {
            var userId = await _identityService.GetUserIdAsync(request.Email);
            if(userId != null)
            {
                return ServiceResult.Failed<RegisterCommandResponse>(ServiceError.EmailAlreadyExists);
            }
            var resultId = await _identityService.CreateUserAsync(request.UserName, request.Email, request.Password, request.Phone, request.Role);
            if(resultId == null)
            {
                return ServiceResult.Failed<RegisterCommandResponse>(ServiceError.UserFailedToCreate);
            }
            string token = _tokenGenerator.CreateJwtSecurityToken(resultId) ?? string.Empty;
            return ServiceResult.Success(new RegisterCommandResponse { Token = token, UserId = resultId });
        }
    }
}
