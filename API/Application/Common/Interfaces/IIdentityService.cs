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
        Task<string?> GetUserNameAsync(string userId);
        Task<bool> IsInRoleAsync(string userId, string role);
        Task<bool> AuthorizeAsync(string userId, string policyName);
        Task<bool> CheckPasswordAsync(string userId, string password);
        Task<bool?> ChangePasswordAsync(string userId, string currentPassword,string newPassword);
        Task<IList<string>> GetUserRolesAsync(string userId);
        Task<string?> CreateUserAsync(string userName, string email, string password, string phone, string role);
        Task<string?> CreateUserAsync(string userName, string email, string password, string role);
    }
}
