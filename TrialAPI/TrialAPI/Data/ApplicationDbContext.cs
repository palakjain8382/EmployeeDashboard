using Microsoft.EntityFrameworkCore;
using TrialAPI.Models;
using static System.Net.Mime.MediaTypeNames;

namespace TrialAPI.Data
{
    public class ApplicationDbContext: DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }

        public DbSet<Employee> Employees { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Employee>().ToTable("GemEmployeeTable");
          //.Property(e => e.Content)
          //.HasColumnType("varbinary(max)")
          //.IsRequired();
        }
    }
}
