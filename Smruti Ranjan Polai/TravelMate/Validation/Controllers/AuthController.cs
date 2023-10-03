using Microsoft.AspNetCore.Mvc;
using Validation.Models;
using System.Threading.Tasks;
using BCrypt.Net;
using Org.BouncyCastle.Crypto.Generators;
using Microsoft.EntityFrameworkCore;
using Validation.Services; // Ensure you have the correct namespace for your AuthService.
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;

namespace Validation.Controllers
    {
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
        {
        private readonly DataContext _context;
        private readonly IAuthService _authService;

        public AuthController(DataContext context, IAuthService authService)
            {
            _context = context;
            _authService = authService;
            }

        [HttpPost("register")]
        public async Task<IActionResult> Register(User userForRegisterDto)
            {
            // Check if the email is already registered
            if (await UserExists(userForRegisterDto.Email))
                {
                return BadRequest("Email is already registered.");
                }

            if (!ModelState.IsValid)
                {
                return BadRequest("ModelState");
                }

            // Hash the user's password
            var hashedPassword = BCrypt.Net.BCrypt.HashPassword(userForRegisterDto.Password);

            // Create a new user object
            var user = new User
                {
                Id = userForRegisterDto.Id,
                Name = userForRegisterDto.Name,
                Email = userForRegisterDto.Email,
                PhoneNo = userForRegisterDto.PhoneNo,
                Password = hashedPassword,
                ConfirmPassword = hashedPassword
                };

            // Add the user to the database
            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return StatusCode(201); // 201 Created
            }

        private async Task<bool> UserExists(string email)
            {
            return await _context.Users.AnyAsync(x => x.Email == email);
            }

        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginDto loginDto)
            {
            // Find the user by email
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == loginDto.Email);

            if (user == null)
                {
                return Unauthorized("Invalid email or password.");
                }

            // Check if the password is correct
            if (!BCrypt.Net.BCrypt.Verify(loginDto.Password, user.Password))
                {
                return Unauthorized("Invalid email or password.");
                }

            // If the email and password are correct, generate a JWT token
            var token = _authService.GenerateJwtToken(user.Email);

            // Return the token to the client
            return Ok(new { Token = token });
            }

        [HttpGet("getUsernameByEmail")]
        public async Task<IActionResult> GetUsernameByEmail(string email)
            {
            try
                {
                var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == email);

                if (user == null)
                    {
                    return NotFound("User not found");
                    }

                return Ok(new { Name = user.Name });
                }
            catch (Exception ex)
                {
                return StatusCode(500, $"Internal server error: {ex.Message}");
                }
            }

        [HttpPost("reset-password")]
        public IActionResult ResetPassword(ResetPasswordDto resetRequest)
            {
            try
                {
                // Verify that the email is associated with a valid user account
                var user = _context.Users.FirstOrDefault(u => u.Email == resetRequest.Email);

                if (user == null)
                    {
                    return BadRequest("Invalid email address.");
                    }

                // Hash the new password
                var hashedPassword = BCrypt.Net.BCrypt.HashPassword(resetRequest.NewPassword);

                // Update the user's password in the database
                user.Password = hashedPassword;
                _context.SaveChanges();

                return Ok(new {message= "Password reset successfully !!!" });
                //return StatusCode(200, "Password Reset Successfully now-->");

                }
            catch (Exception ex)
                {
                return StatusCode(500, $"Internal server error: {ex.Message}");
                }
            }
        }
    }
