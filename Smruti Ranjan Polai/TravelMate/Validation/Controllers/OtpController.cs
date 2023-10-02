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
    public class OtpController : ControllerBase
        {
        private readonly OtpContext _context;

        public OtpController(OtpContext context)
            {
            _context = context;
            }

        private int GenerateRandomOtp()
            {
            // Generate a 6-digit random OTP
            var random = new Random();
            return random.Next(100000, 999999);
            }

        private void SendOtpByEmail(string email, int otp)
            {
            try
                {
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

                // Create and send the email message
                var mailMessage = new MailMessage
                    {
                    From = new MailAddress(smtpUsername),
                    Subject = "OTP Verification",
                    Body = $"Your OTP is: {otp}",
                    };

                mailMessage.To.Add(email);

                smtpClient.Send(mailMessage);
                }
            catch (Exception ex)
                {
                throw new Exception($"Failed to send OTP email: {ex.Message}");
                }
            }

        [HttpPost("generate")]
        public IActionResult GenerateOtp(string email)
            {
            try
                {
                // Generate a random OTP (e.g., a 6-digit number)
                var otp = GenerateRandomOtp();

                // Store the OTP in the database with an expiration time (e.g., 5 minutes)
                var otpEntry = new OtpEntry
                    {
                    Email = email,
                    Otp = otp,
                    ExpirationTime = DateTime.UtcNow.AddMinutes(5),
                    };

                _context.OtpEntries.Add(otpEntry);
                _context.SaveChanges();

                // Send the OTP to the user's email
                SendOtpByEmail(email, otp);

                return Ok(new { message = "OTP sent successfully." });
                }
            catch (Exception ex)
                {
                return StatusCode(500, new { error = $"Internal server error: {ex.Message}" });
                }
            }

        [HttpPost("validate")]
        public IActionResult ValidateOtp([FromBody] ValidateOtpRequest request)
            {
            try
                {
                // Retrieve the OTP entry from the database based on email
                var otpEntry = _context.OtpEntries
                    .Where(e => e.Email == request.Email)
                    .OrderByDescending(e => e.Id)
                    .FirstOrDefault();

                if (otpEntry == null)
                    {
                    return BadRequest(new { message = "No valid OTP found for this email.", isValid = false });
                    }

                // Check if the OTP is expired
                if (otpEntry.ExpirationTime <= DateTime.UtcNow)
                    {
                    return BadRequest(new { message = "OTP has expired.", isValid = false });
                    }

                // Check if the provided OTP matches the stored OTP
                if (otpEntry.Otp != request.Otp)
                    {
                    return BadRequest(new { message = "Invalid OTP.", isValid = false });
                    }

                // OTP is valid, you can proceed with password update or other actions here

                return StatusCode(200, new { message = "OTP is validated.", isValid = true });
                }
            catch (Exception ex)
                {
                return StatusCode(500, new { error = $"Internal server error: {ex.Message}", isValid = false });
                }
            }

        public class ValidateOtpRequest
            {
            public string Email { get; set; } = string.Empty;
            public int Otp { get; set; }
            }
        }
    }
