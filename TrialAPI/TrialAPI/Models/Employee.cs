using System.ComponentModel.DataAnnotations;

namespace TrialAPI.Models
{
    public class Employee
    {
        [Key]
        public int ID { get; set; }

        public string EmployeeID { get; set; }

        public string Name { get; set; }

        public string Designation { get; set; }

        //public string Department { get; set; }

        public Int64 Phone { get; set; }

        public string Email { get; set; }

        //public string project { get; set; }

        public DateTime JoiningDate { get; set; }

        public string Location { get; set; }

        //public int Scores { get; set; }

        //public int AvailableLeaves { get; set; }

        public DateTime InTime{get; set;}

        public DateTime OutTime { get; set; }
    }
}
