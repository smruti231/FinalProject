using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations.Schema;

namespace Validation.Models
    {
    [Table("OtpEntry")]
    public class OtpEntry
        {
            public int Id { get; set; }
        public string Email { get; set; } = string.Empty;
        public int Otp { get; set; }
        public DateTime ExpirationTime { get; set; }
        }

    public class OtpContext : DbContext
        {
        public OtpContext(DbContextOptions<OtpContext> options) : base(options) { }
        public DbSet<OtpEntry>OtpEntries{ get; set; }

        }
    }
