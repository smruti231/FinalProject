using Microsoft.AspNetCore.Mvc;
using Validation.Models;

namespace Validation.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LocationController : Controller
    {
        private readonly DataContext _context;
        public LocationController(DataContext context)
        {
            _context = context;
        }

        [HttpGet("getLocations")]

        public IActionResult GetAllLocations()
        {
            try
            {
                var locs = _context.Locations.ToList();
                if (locs == null || !locs.Any())
                {
                    return NotFound("No hotels found");
                }
                return Ok(locs);
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { error = $"Internal server error: {ex.Message}" });
            }
        }

        [HttpGet("{lId}")]

        public IActionResult GetLocation(int lId)
        {
            try
            {
                var loc = _context.Locations.ToList().Find((e) => e.LocId == lId);
                if (loc == null)
                {
                    return NotFound("No Locations found");
                }
                return Ok(loc);
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { error = $"Internal server error: {ex.Message}" });
            }
        }
    }
}
