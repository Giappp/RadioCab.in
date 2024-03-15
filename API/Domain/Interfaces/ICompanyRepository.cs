using Application.Common.Interfaces;
using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Interfaces
{
    public interface ICompanyRepository : IGenericRepository<Company, int>
    {
        Task<IEnumerable<Driver>> GetDriversFromCompany(int companyId);
        Task<IEnumerable<CompanySubscription>> GetSubscriptionsFromCompany(int companyId);
    }
}
