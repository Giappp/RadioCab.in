using Domain.Entities;
using Domain.Interfaces;
using Infrastructure.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Repositories
{
    public class CompanyRepository : ICompanyRepository
    {
        private readonly AppDbContext _appDbContext;
        public CompanyRepository(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        public Task<bool> CreateCompany(Company company)
        {
            _appDbContext.Companys.Add(company);
        }

        public Task<Company> FindCompany(Func<Company, bool> predicate)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<Company>> GetAll()
        {
            throw new NotImplementedException();
        }

        public Task<Company> GetById(int id)
        {
            throw new NotImplementedException();
        }

        public Task<Company> GetByName(string name)
        {
            throw new NotImplementedException();
        }
    }
}
