using Application.Common.Models;
using Application.DTOs.Driver;
using Domain.Entities;
using Domain.Interfaces;
using Infrastructure.Common;
using Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Repositories
{
    public class CompanyRepository : GenericRepository<Company, int>, ICompanyRepository
    {
        public CompanyRepository(AppDbContext context, ILogger<CompanyRepository> logger) : base(context, logger)
        {
        }

        public async Task<bool> CheckIdentityCompany(string IdentityId)
        {
            var company = await _context.Companys.Where(c => c.IdentityId == IdentityId).FirstOrDefaultAsync();
            if(company == null)
            {
                return false;
            }
            return true;
        }

        public async Task<bool> CreateCompany(Company company)
        {
            return await Add(company);
        }
        public async Task<IEnumerable<Driver?>?> GetDriversFromCompany(int companyId)
        {
            return await _context.DriverContracts.Where(dc => dc.CompanyId == companyId)
                .Select(dc => dc.Driver).ToListAsync();
        }

        public async Task<IEnumerable<CompanyService>> GetServicesFromCompany(int companyId)
        {
            return await _context.CompanyServices.Where(c => c.CompanyId == companyId)
                .ToListAsync();
        }

        public async Task<IEnumerable<CompanySubscription>?> GetSubscriptionsFromCompany(int companyId)
        {
            return await _context.CompanySubscriptions.Where(cs => cs.CompanyId == companyId).ToListAsync();   
        }
    }
}
