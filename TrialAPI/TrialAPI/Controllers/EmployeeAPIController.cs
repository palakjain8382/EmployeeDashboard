using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Net.Http.Headers;
using TrialAPI.Data;
using TrialAPI.Models;
using static System.Net.Mime.MediaTypeNames;

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
        //[HttpPost("NewData")]
        //public async Task<ActionResult<Employee>> CreateEmployeeDetails(Employee employee)
        //{
        //    _db.Employees.Add(employee);
        //    await _db.SaveChangesAsync();

        //    return CreatedAtAction(nameof(GetEmployeeDetails), new { id = employee.ID }, employee);
        //}

        [HttpPost("NewData")]
        public async Task<ActionResult> CreateEmployeeDetails([FromBody] Employee employeeRequest)
        {
            //if (employee == null || Request.Form.Files.Count == 0)
            //{
            //    return BadRequest();
            //}

            //// Save profile picture
            //var file = Request.Form.Files[0];
            //employee.FileName = file.FileName;
            //employee.ContentType = file.ContentType;
            //using (var ms = new MemoryStream())
            //{
            //    await file.CopyToAsync(ms);
            //    employee.Content = ms.ToArray();
            //    employee.Size = ms.Length;
            //}
            //employee.UploadDate = DateTime.UtcNow;

            await _db.Employees.AddAsync(employeeRequest);
            await _db.SaveChangesAsync();

            return Ok(employeeRequest);
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

        //[HttpPut("{id}")]
        //public async Task<IActionResult> Upload(int id, Employee employee)
        //{
        //    try
        //    {
        //        if (id != employee.ID)
        //            return BadRequest("Employee ID mismatch");

        //        _db.Entry(employee).State = EntityState.Modified;

        //        var formCollection = await Request.ReadFormAsync();
        //        var file = formCollection.Files.First();
        //        if (file.Length > 0)
        //        {
        //            var memoryStream = new MemoryStream();
        //            await file.CopyToAsync(memoryStream);
        //            employee.Content = memoryStream.ToArray();

        //            try
        //            {
        //                await _db.SaveChangesAsync();
        //            }
        //            catch (DbUpdateConcurrencyException)
        //            {
        //                if (!EmployeeExists(id))
        //                    return NotFound();

        //                else throw;
        //            }
        //            return Ok(employee);
        //        }
        //        else
        //        {
        //            return BadRequest();
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        return StatusCode(500, $"Internal server error: {ex}");
        //    }
        //}

        [HttpPost("Img"), DisableRequestSizeLimit]
        public async Task<IActionResult> UploadAsync()
        {
            try
            {
                var formCollection = await Request.ReadFormAsync();
                var file = formCollection.Files.First();
                var folderName = Path.Combine("Resources", "Images");
                var pathToSave = Path.Combine(Directory.GetCurrentDirectory(), folderName);
                if (file.Length > 0)
                {
                    var fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                    var fullPath = Path.Combine(pathToSave, fileName);
                    var dbPath = Path.Combine(folderName, fileName);
                    using (var stream = new FileStream(fullPath, FileMode.Create))
                    {
                        file.CopyTo(stream);
                    }
                    return Ok(new { dbPath });
                }
                else
                {
                    return BadRequest();
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex}");
            }
        }

    }
}
