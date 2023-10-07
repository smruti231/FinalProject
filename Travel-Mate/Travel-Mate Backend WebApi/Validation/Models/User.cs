using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Validation.Models
    {
    [Table("User")]
    public class User
        {
        public int Id { get; set; }

        [Required]
        public string Name { get; set; } = string.Empty;

        [Key]
        [Required]
        [EmailAddress]
        public string Email { get; set; } = string.Empty;

        [Required]
        [Phone]
        public string PhoneNo { get; set; } = string.Empty;

        [Required]
        public string Password { get; set; } = string.Empty;

        [Required]
        [Compare("Password")]
        public string ConfirmPassword { get; set; } = string.Empty;
        }
    [Table("Locations")]
    public class Locations
        {
        [Key]
        public int LocId { get; set; }
        public string LocName { get; set; } = string.Empty;
        }

    [Table("Hotels")]
    public class Hotels
        {
        [Key]
        public int HotelId { get; set; }
        public string HotelName { get; set; } = string.Empty;

        [ForeignKey("LocId")]
        public int LocId { get; set; }

        [EmailAddress]
        public string HotelEmail { get; set;} = string.Empty;

        public string HotelImg { get; set;} = string.Empty;
        public string HotelDesc {  get; set;} = string.Empty;
        public string HotelPrice { get; set; } = string.Empty;
        public string HotelRoomDesc {  get; set;} = string.Empty;
        public string HotelRating {  get; set; } = string.Empty;
        }

    [Table("Blogs")]
    public class Blogs
        {
        [Key]
        public int BlogId { get; set; }
        public string BlogTitle { get; set; } = string.Empty;
        public string UserName { get; set; } = string.Empty;
        public string Content { get; set; } = string.Empty;

        [ForeignKey("LocId")]
        public int LocId { get; set; }
        }

    public class DataContext : DbContext
        {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }
        public DbSet<User> Users { get; set; }
        public DbSet<Hotels> Hotels { get; set; }
        public DbSet<Locations> Locations { get; set; }
        public DbSet<Blogs> Blogs { get; set; }
    }
    }





//EntityFrameworkCore\Add-migration mg1 -context Validation.Models.DataContext