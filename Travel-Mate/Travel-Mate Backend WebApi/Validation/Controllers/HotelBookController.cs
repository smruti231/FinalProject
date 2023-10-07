using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.ComponentModel;
using System.Linq;
using System.Net;
using System.Net.Mail;
using Validation.Models;

namespace Validation.Controllers
    {
    [Microsoft.AspNetCore.Components.Route("api/[controller]")]
    [ApiController]
    public class HotelBookController : ControllerBase
        {
        private readonly DataContext _context;

        public HotelBookController(DataContext context)
            {
            _context = context;
            }

        [HttpGet("{lId}")]

        public IActionResult GetAllHotels(int lId)
            {
            try
                {
                var hotels = _context.Hotels.ToList().FindAll((e) => e.LocId == lId);
                if (hotels == null || !hotels.Any())
                    {
                    return NotFound("No hotels found");
                    }
                return Ok(hotels);
                }
            catch (Exception ex)
                {
                return StatusCode(500, new { error = $"Internal server error: {ex.Message}" });
                }
            }

        [HttpPost("{hId}/{uEmail}")]
        public IActionResult SendHotelMail(int hId, string uEmail)
            {
            try
                {
                // Retrieve the hotel's email based on HotelId;
                var hotel = _context.Hotels.FirstOrDefault(h => h.HotelId == hId);
                var user = _context.Users.FirstOrDefault(u => u.Email == uEmail);
                if (hotel == null)
                    {
                    return BadRequest(new { message = "Hotel not found." });
                    }
                if (user == null)
                    {
                    return BadRequest(new { message = "User not found." });
                    }

                var smtpServer = "smtp-relay.brevo.com";
                var smtpPort = 587;
                var smtpUsername = "travelmateyourultimatetravelco@gmail.com";
                var smtpPassword = "01pPAh2M93Od84aF";

                var smtpClient = new SmtpClient(smtpServer)
                    {
                    Port = smtpPort,
                    Credentials = new NetworkCredential(smtpUsername, smtpPassword),
                    EnableSsl = true,
                    };

                var mailMessage = new MailMessage
                    {
                    From = new MailAddress(smtpUsername),
                    Subject = "New Booking Request",
                    Body = $"You have received a new booking request from our registered user. The details of the user are:\n\nName: {user.Name}\nEmail: {uEmail}\nMobile No: {user.PhoneNo}",
                    };

                mailMessage.To.Add(hotel.HotelEmail);
                smtpClient.Send(mailMessage);
                return Ok(new { message = "Hotel booing request mail sent successfully." });
                //return Ok(new { message = "Email sent successfully." });
                }
            catch (Exception ex)
                {
                return StatusCode(500, new { error = $"Internal server error: {ex.Message}" });
                }
            }

        [HttpPost("{uEmail}")]
        public IActionResult SendUserMail(string uEmail)
            {
            try
                {
                // Retrieve the user's email based on UserId
                var user = _context.Users.FirstOrDefault(u => u.Email == uEmail);
                if (user == null)
                    {
                    return BadRequest(new { message = "User not found." });
                    }


                var smtpServer = "smtp-relay.brevo.com";
                var smtpPort = 587;
                var smtpUsername = "travelmateyourultimatetravelco@gmail.com";
                var smtpPassword = "01pPAh2M93Od84aF";

                var smtpClient = new SmtpClient(smtpServer)
                    {
                    Port = smtpPort,
                    Credentials = new NetworkCredential(smtpUsername, smtpPassword),
                    EnableSsl = true,
                    };

                var mailMessage = new MailMessage
                    {
                    From = new MailAddress(smtpUsername),
                    Subject = "Booking Confirmation",
                    Body = $"Thank you for booking with us, {user.Name}. The hotel will contact you soon.",
                    };

                mailMessage.To.Add(user.Email);
                smtpClient.Send(mailMessage);

                return Ok(new { message = "User Confirmation Email sent successfully." });
                }
            catch (Exception ex)
                {
                return StatusCode(500, new { error = $"Internal server error: {ex.Message}" });
                }
            }
        }
    }
