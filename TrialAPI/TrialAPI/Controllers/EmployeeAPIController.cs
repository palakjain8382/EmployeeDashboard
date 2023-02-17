using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TrialAPI.Data;
using TrialAPI.Models;

namespace TrialAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeAPIController : ControllerBase
    {
        private readonly ApplicationDbContext _db;

        public EmployeeAPIController(ApplicationDbContext db)
        {
            _db = db;
        }

        //READ
        [HttpGet("GetEmployeeDetails")]
        public async Task<ActionResult<IEnumerable<Employee>>> GetEmployeeDetails()
        {
            if (_db.Employees == null)
            {
                return NotFound();
            }
            return await _db.Employees.ToListAsync();
        }

        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            return "value";
        }

        //CREATE
        [HttpPost("NewData")]
        public async Task<ActionResult<Employee>> CreateEmployeeDetails(Employee employee)
        {
            _db.Employees.Add(employee);
            await _db.SaveChangesAsync();

            return CreatedAtAction(nameof(GetEmployeeDetails), new { id = employee.ID }, employee);
        }

        //UPDATE
        [HttpPut("{id}")]
        public async Task<ActionResult<Employee>> UpdateEmployeeDetails(int id, Employee employee)
        {
            if (id != employee.ID)
                return BadRequest("Employee ID mismatch");

            _db.Entry(employee).State = EntityState.Modified;

            try
            {
                await _db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EmployeeExists(id))
                    return NotFound();

                else throw;
            }
            return Ok(employee);
        }

        private bool EmployeeExists(int id)
        {
            return (_db.Employees?.Any(e => e.ID == id)).GetValueOrDefault();
        }

        //DELETE
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
