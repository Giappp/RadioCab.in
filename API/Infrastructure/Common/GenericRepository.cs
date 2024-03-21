using Application.Common.Interfaces;
using Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Common
{
    public class GenericRepository<T, TKey> : IGenericRepository<T, TKey> where T : class
    {
        protected readonly AppDbContext _context;
        protected readonly ILogger _logger;
        public GenericRepository(AppDbContext context, ILogger logger)
        {
            _context = context;
            _logger = logger;
        }
        public async Task<IEnumerable<T>?> GetAll()
        {
            return await _context.Set<T>().ToListAsync();
        }

        public async Task<bool> Add(T entity)
        {
            try
            {
                await _context.Set<T>().AddAsync(entity);
            }
            catch(Exception ex)
            {
                _logger.LogError(ex,"Failed to add " +  entity.GetType());
            }
            return await _context.SaveChangesAsync() > 0;
        }

        public async Task<T?> GetById(TKey id)
        {
            try
            {
                return await _context.Set<T>().FindAsync(id);
            }
            catch(Exception ex)
            {
                _logger.LogError(ex,"Failed to get id " + GetType());
                return null;
            }
        }

        public async Task<bool> Update(T entity)
        {
            try
            {
                _context.Entry(entity).State = EntityState.Modified;
                return await _context.SaveChangesAsync() > 0;
            }
            catch(Exception e)
            {
                _logger.LogError(e, "Failed to update " + entity.GetType());
                return _context.DisposeAsync().IsCompleted;
            }
        }

        public async Task<bool> Delete(T entity)
        {
            try
            {
                _context.Set<T>().Remove(entity);
                return await _context.SaveChangesAsync() > 0;
            }
            catch(Exception ex)
            {
                _logger.LogError(ex, "Failed to delete " + entity.GetType());
                return _context.DisposeAsync().IsCompleted;
            }
        }
        public void Dispose()
        {
            _context.Dispose();
        }
    }
}
