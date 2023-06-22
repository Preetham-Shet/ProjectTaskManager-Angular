using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations.Schema;

namespace MVCProjectTaskManager.Models
{
    public class Project
    {

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int ProjectID { get; set; }

        public string ProjectName { get; set; }
        [DisplayFormat(DataFormatString = "d/M/yyyy")]

        public DateTime DateOfStart { get; set; }

        public int? TeamSize { get; set; }

        public bool Active { get; set; }

        public string Status { get; set; }

        public int ClientLocationID { get; set; }

        [ForeignKey("ClientLocationID")]
        public virtual ClientLocation ClientLocation { get; set; }
    }

    //public class ProjectTaskManagerDbContext : DbContext
    //{
    //    public DbSet<Project> Projects { get; set; }

    //    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    //    {
    //        base.OnConfiguring(optionsBuilder);
    //        optionsBuilder.UseSqlServer("data source=DESKTOP-181QMS3\\SQLEXPRESS; integrated security=yes; initial catalog=ProjectTaskManager");
    //    }
    //}
}
