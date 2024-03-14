using Application.Common.Interfaces;
using BCrypt.Net;
using Infrastructure.Identity;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Service
{
    public class IdentityService : IIdentityService
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly IUserClaimsPrincipalFactory<ApplicationUser> _userClaimsPrincipalFactory;
        private readonly IAuthorizationService _authorizationService;
        public IdentityService(UserManager<ApplicationUser> userManager, IUserClaimsPrincipalFactory<ApplicationUser> userClaimsPrincipalFactory, IAuthorizationService authorizationService)
        {
            _userManager = userManager;
            _userClaimsPrincipalFactory = userClaimsPrincipalFactory;
            _authorizationService = authorizationService;
        }
        public async Task<bool> AuthorizeAsync(string userId, string policyName)
        {
            ApplicationUser? user = await _userManager.Users.SingleOrDefaultAsync(u => u.Id == userId);
            if (user == null)
            {
                return false;
            }

            ClaimsPrincipal principal = await _userClaimsPrincipalFactory.CreateAsync(user);
            AuthorizationResult result = await _authorizationService.AuthorizeAsync(principal, policyName);
            return result.Succeeded;
        }

        public async Task<bool?> ChangePasswordAsync(string userId, string currentPassword, string newPassword)
        {
            ApplicationUser? user = await GetUserByIdAsync(userId);
            IdentityResult result = await _userManager.ResetPasswordAsync(user, currentPassword, newPassword);
            return result.Succeeded;
        }

        public async Task<bool> CheckPasswordAsync(string userId, string password)
        {
            ApplicationUser? user = await GetUserByIdAsync(userId);
            if(user != null)
            {
                return await _userManager.CheckPasswordAsync(user, password);
            }
            return false;
        }

        public async Task<ApplicationUser?> GetUserByEmailAsync(string email)
        {
            ApplicationUser? user = await _userManager.FindByEmailAsync(email);
            if(user is null)
            {
                return null;
            }
            return user;
        }

        public async Task<ApplicationUser?> GetUserByIdAsync(string userId)
        {
            return await _userManager.FindByIdAsync(userId);
        }

        public async Task<string?> GetUserEmailAsync(string userId)
        {
            ApplicationUser? user = await _userManager.FindByIdAsync(userId);
            return user?.Email;
        }

        public async Task<string?> GetUserIdAsync(string email)
        {
            ApplicationUser? user = await _userManager.FindByEmailAsync($"{email}");
            return user?.Id;
        }

        public Task<IList<string>> GetUserRolesAsync(string userId)
        {
            throw new NotImplementedException();
        }

        public async Task<bool> IsInRoleAsync(string userId, string role)
        {
            ApplicationUser? user = await _userManager.Users.SingleOrDefaultAsync(u => u.Id == userId);
            return user != null && await _userManager.IsInRoleAsync(user, role);
        }
        public async Task<string?> CreateUserAsync(string userName, string email, string password, string phone, string role)
        {
            ApplicationUser user = new ApplicationUser{
                UserName = userName,
                Email = email,
                PhoneNumber = phone,
            };
            IdentityResult result = await _userManager.CreateAsync(user,password);
            if (result.Succeeded)
            {
                var roles = await _userManager.AddToRoleAsync(user, role);
            }
            else
            {
                await Console.Out.WriteLineAsync(result.ToString());
            }
            return result.Succeeded ? user.Id : null;
        }
        
    }
}
