using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Common.Interfaces
{
    public interface IIdentityService
    {
        Task<string?> GetUserEmailAsync(string userId);
        Task<string?> GetUserIdAsync(string email);
        Task<ApplicationUser?> GetUserByIdAsync(string userId);
        Task<ApplicationUser?> GetUserByEmailAsync(string email);
        Task<bool> IsInRoleAsync(string userId, string role);
        Task<IAsyncResult> AuthorizeAsync(string userId, string policyName);
        Task<bool> SignInUserAsync(string email, string password);
    }
}
