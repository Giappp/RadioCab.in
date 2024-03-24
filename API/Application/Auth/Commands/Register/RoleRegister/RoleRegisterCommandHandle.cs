using Application.Common.Interfaces;
using Application.Common.Models;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Auth.Commands.Register.CompanyRegister
{
    public class RoleRegisterCommandHandle : IRequestHandler<RoleRegisterCommandRequest, ServiceResult<RegisterCommandResponse>>
    {
        private readonly IIdentityService _identityService;
        private readonly ITokenGenerator _tokenGenerator;
        public RoleRegisterCommandHandle(IIdentityService identityService, ITokenGenerator tokenGenerator)
        {
            _identityService = identityService;
            _tokenGenerator = tokenGenerator;
        }

        public async Task<ServiceResult<RegisterCommandResponse>> Handle(RoleRegisterCommandRequest request, CancellationToken cancellationToken)
        {
            var userId = await _identityService.GetUserIdAsync(request.Email);
            if (userId != null)
            {
                return ServiceResult.Failed<RegisterCommandResponse>(ServiceError.EmailAlreadyExists);
            }
            var resultId = await _identityService.CreateUserAsync(request.DisplayName, request.Email, request.Password, request.Role);
            if (resultId == null)
            {
                return ServiceResult.Failed<RegisterCommandResponse>(ServiceError.UserFailedToCreate);
            }
            string token = _tokenGenerator.CreateJwtSecurityToken(resultId) ?? string.Empty;
            string? userName = await _identityService.GetUserNameAsync(userId);
            IList<string> userRole = await _identityService.GetUserRolesAsync(userId);
            return ServiceResult.Success(new RegisterCommandResponse { Token = token, UserId = resultId, DisplayName =  userName,UserRole = userRole});
        }
    }
}
