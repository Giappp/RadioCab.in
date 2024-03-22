using Application.DTOs.Driver;
using Domain.Interfaces;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Driver.Queries
{
    public class GetAllDriverQueryHandle : IRequestHandler<GetAllDriverQuery, IEnumerable<DriverDTO>>
    {
        private readonly IDriverRepository _driverRepository;
        public GetAllDriverQueryHandle(IDriverRepository driverRepository)
        {
            _driverRepository = driverRepository ?? throw new ArgumentNullException(nameof(driverRepository));
        }

        async Task<IEnumerable<DriverDTO>> IRequestHandler<GetAllDriverQuery, IEnumerable<DriverDTO>>.Handle(GetAllDriverQuery request, CancellationToken cancellationToken)
        {
            var drivers = await _driverRepository.GetAll();

            if (drivers == null || !drivers.Any()) {
                return Enumerable.Empty<DriverDTO>(); // Return an empty enumerable if no drivers found
            }

            var driverDTOs = new List<DriverDTO>();
            
            foreach(var driver in drivers)
                {
                  var d = new DriverDTO()
                    {
                        DriverName = driver.DriverName,
                        Description = driver.Description,
                        City = driver.City,
                        ContactPerson = driver.ContactPerson,
                        Experience = driver.Experience,
                        Phone = driver.PhoneNumber
                    };
                    driverDTOs.Add(d);
                }
            return driverDTOs;
        }
    }
}
