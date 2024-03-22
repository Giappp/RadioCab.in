using Domain.Entities;
using Domain.Interfaces;
using Infrastructure.Common;
using Infrastructure.Data;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Repositories
{
    public class DriverRepository : GenericRepository<Driver, int>,IDriverRepository
    {
        public DriverRepository(AppDbContext context, ILogger<DriverRepository> logger) : base(context, logger)
        {
        }
    }
}
