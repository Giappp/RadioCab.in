using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Common.Interfaces
{
    public interface IGenericRepository<T, TKey> where T: class
    {
        Task<IEnumerable<T>> GetAll();
        Task<bool> Add(T entity);
        Task<T?> GetById(TKey id);
        Task<bool> Update(T entity);
        Task<bool> Delete(T id);
        void Dispose();
    }
}
