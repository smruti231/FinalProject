using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Net;
using System.Net.Mail;
using Validation.Models;

namespace Validation.Controllers
    {
    [Route("api/[controller]")]
    [ApiController]
    public class HotelBookController : ControllerBase
        {
        private readonly DataContext _context;

        public HotelBookController(DataContext context)
            {
            _context = context;
            }

        [HttpPost("send-hotel-mail")]
        public IActionResult SendHotelMail([FromBody] SendHotelMailRequest mailRequest)
            {
            try
                {
                // Retrieve the hotel's email based on HotelId
                var hotel = _context.Hotels.FirstOrDefault(h => h.HotelId == mailRequest.HotelId);
                if (hotel == null)
                    {
                    return BadRequest(new { message = "Hotel not found." });
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
                    Body = $"You have received a new booking request from {mailRequest.UserName}.",
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

        [HttpPost("send-user-mail")]
        public IActionResult SendUserMail([FromBody] SendUserMailRequest mailRequest)
            {
            try
                {
                // Retrieve the user's email based on UserId
                var user = _context.Users.FirstOrDefault(u => u.Id == mailRequest.Id);
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
        public class SendHotelMailRequest
            {
             public int HotelId { get; set; }
            public string UserName { get; set; } = string.Empty;
            }

        public class SendUserMailRequest
            {
            public string Email { get; set; } = string.Empty;
            public int Id {  get; set; }
            }

        }
    }
