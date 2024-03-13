using Application.Common.Interfaces;
using Infrastructure.Identity;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Service
{
    public class IdentityService : IIdentityService
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly RoleManager<IdentityRole> _roleManager;
        public IdentityService(UserManager<ApplicationUser> userManager, SignInManager<ApplicationUser> signInManager, RoleManager<IdentityRole> roleManager)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _roleManager = roleManager;
        }
        public Task<IAsyncResult> AuthorizeAsync(string userId, string policyName)
        {
            throw new NotImplementedException();
        }

        public async Task<string?> GetUserByEmailAsync(string email)
        {
            ApplicationUser? user = await _userManager.FindByEmailAsync(email);
            if(user is null)
            {
                return null;
            }
            return user;
        }

        public Task<string?> GetUserByIdAsync(string userId)
        {
            throw new NotImplementedException();
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

        public async Task<bool> IsInRoleAsync(string userId, string role)
        {
            ApplicationUser? user = await _userManager.FindByIdAsync(userId);
            IList<string> userRoles = await _userManager.GetRolesAsync(user);
            return userRoles == role ? true : false;
        }

        public async Task<bool> SignInUserAsync(string email, string password)
        {
            var result = await _signInManager.PasswordSignInAsync(email, password,true,false);
            return result.Succeeded;
        }
    }
}
