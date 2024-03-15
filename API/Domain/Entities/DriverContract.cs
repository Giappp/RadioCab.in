using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities
{
    public class DriverContract
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ContractId {  get; set; }
        public int CompanyId { get; set; }
        [ForeignKey(nameof(CompanyId))]
        public Company? Company {  get; set; }
        [ForeignKey(nameof(DriverId))]
        public int DriverId { get; set; }
        public Driver? Driver {  get; set; }
        public DateTime StartDate {  get; set; } = DateTime.Now;
        public DateTime EndDate { get; set; }

    }
}
