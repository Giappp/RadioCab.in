using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities
{
    public class Cab
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int CabId { get; set; }
        [Required]
        [StringLength(maximumLength:10)]
        public required string LisencePlate { get; set; }
        [Required]
        public int ManufactureYear { get; set; }
        public int DriverId { get; set; }
        [ForeignKey(nameof(DriverId))]
        public Driver ?Driver { get; set; }
    }
}
