using Application.Common.Models;
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
    public class CompanyRepository : GenericRepository<Company,int>
    {
        public CompanyRepository(AppDbContext context, ILogger logger) : base(context, logger)
        {
        }


        public async Task<bool> CreateCompany(Company company)
        {
            return await Add(company);
        }
        public async Task<IEnumerable<Driver>> GetDriversFromCompany(int companyId)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<CompanySubscription>> GetSubscriptionsFromCompany()
        {
            throw new NotImplementedException();
        }
    }
}
