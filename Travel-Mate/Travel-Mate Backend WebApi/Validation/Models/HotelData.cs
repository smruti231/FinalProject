using Microsoft.AspNetCore.Mvc;
using System.Data.Entity;
using System.Threading.Tasks;

namespace Validation.Models
    {
    public interface IHotelData
        {
        Task<List<Hotels>> GetAllHotels();
        Task<Hotels> GetHotel(int id);
        Task DeleteHotel(int id);
        Task<Hotels> UpdateHotel(int id, Hotels updateHotel);
        Task<Hotels> AddHotel(Hotels hotel);
        }

    public class HotelData : IHotelData
        {
        private readonly DataContext dbContext;
        public HotelData(DataContext context)
            {
            dbContext = context;
            }
        public async Task<List<Hotels>> GetAllHotels()
            {
            return await dbContext.Hotels.ToListAsync();
            }

        public async Task<Hotels> AddHotel(Hotels hotel)
            {
            dbContext.Hotels.Add(hotel);
            await dbContext.SaveChangesAsync();
            return hotel;
            }

        public async Task DeleteHotel(int id)
            {
            var hotel = dbContext.Hotels.Find(id);
            if (hotel != null)
                {
                dbContext.Hotels.Remove(hotel);
                }
            await dbContext.SaveChangesAsync();
            }


        public async Task<Hotels> GetHotel(int id)
            {
            return await dbContext.Hotels.FindAsync(id) ?? throw new Exception("HOTEL NOT FOUND");
            }

        public async Task<Hotels> UpdateHotel(int id, Hotels updateHotel)
            {
            var hotel = await dbContext.Hotels.FindAsync(id);
            if (hotel == null)
                {
                throw new Exception("HOTEL NOT FOUND TO UPDATE");
                }
            else
                {
                hotel.HotelName = updateHotel.HotelName;
                hotel.HotelId = updateHotel.HotelId;
                hotel.HotelEmail = updateHotel.HotelEmail;
                hotel.HotelImg = updateHotel.HotelImg;
                hotel.HotelDesc = updateHotel.HotelDesc;
                hotel.HotelPrice = updateHotel.HotelPrice;
                hotel.HotelRoomDesc = updateHotel.HotelRoomDesc;
                hotel.HotelRating = updateHotel.HotelRating;
                await dbContext.SaveChangesAsync();
                return await new Task<Hotels>(() => hotel);
                }
            }
        }
    }
