using Microsoft.AspNetCore.Mvc;
using Validation.Models;

namespace Validation.Controllers
    {
    [Route("api/[controller]")]
    [ApiController]

    public class HotelDataController : ControllerBase
        {
        private readonly IHotelData component;
        public HotelDataController(IHotelData component)
            {
            this.component = component;
            }

        [HttpGet]
        public async Task<ActionResult<List<Hotels>>> GetAllHotels() => await component.GetAllHotels();


        [HttpGet("{id}")]
        public async Task<ActionResult<Hotels>> GetHotel(int id) => await component.GetHotel(id);

        [HttpPost]
        public async Task<ActionResult<Hotels>> AddHotel(Hotels hotel)
            {
            await component.AddHotel(hotel);
            return CreatedAtAction(nameof(GetHotel), new { id = hotel.HotelId }, hotel);
            }

        [HttpPut("{id}")]
        public async Task<ActionResult<Hotels>> UpdateHotel(int id, Hotels hotel)
            {
            return await component.UpdateHotel(id, hotel);
            }

        [HttpDelete("{id}")]
        public async Task<ActionResult<string>> DeleteHotel(int id)
            {
            await component.DeleteHotel(id);
            return await new Task<string>(() => "EMPLOYEE DELETED SUCCESSFULLY");
            }
        }
    }