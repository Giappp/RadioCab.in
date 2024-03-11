using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities
{
    public class Rental
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int RentalId { get; set; }
        public int UserId { get; set; }
        public int DriverId { get; set; }
        public string Status { get; set; }
        public double PickUpLocation { get; set; }
        public double Destination { get; set; }
        public DateTime StartAt { get; set; }
        public DateTime EndAt { get; set; }
        public float Price {  get; set; }
        [ForeignKey(nameof(UserId))]
        public User User { get; set; }
        [ForeignKey(nameof(DriverId))]
        public Driver Driver { get; set; }
    }
}
