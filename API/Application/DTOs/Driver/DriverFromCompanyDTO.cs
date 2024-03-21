using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.DTOs.Driver
{
    public class DriverFromCompanyDTO
    {
        public string DriverName {  get; set; }
        public string City {  get; set; }
        public int Experience {  get; set; }

    }
}
