using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace Validation.Services // Adjust the namespace as needed
    {
    public interface IAuthService
        {
        string GenerateJwtToken(string email);
        bool ValidateToken(string token);
        }

    public class AuthService : IAuthService
        {
        private readonly IConfiguration _configuration;

        public AuthService(IConfiguration configuration)
            {
            _configuration = configuration;
            }

        public string GenerateJwtToken(string email, string name)
            {
            throw new NotImplementedException();
            }
        public string GenerateJwtToken(string email)
            {
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:SecretKey"]));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var claims = new[]
            {
                new Claim(JwtRegisteredClaimNames.Sub, email),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
            };

            var token = new JwtSecurityToken(
                issuer: _configuration["Jwt:Issuer"],
                audience: _configuration["Jwt:Audience"],
                claims: claims,
                expires: DateTime.UtcNow.AddHours(1),
                signingCredentials: creds
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
            }


        public bool ValidateToken(string token)
            {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_configuration["Jwt:SecretKey"]);

            tokenHandler.ValidateToken(token, new TokenValidationParameters
                {
                ValidateIssuerSigningKey = true,
                IssuerSigningKey = new SymmetricSecurityKey(key),
                ValidateIssuer = false,
                ValidateAudience = false,
                ClockSkew = TimeSpan.Zero
                }, out SecurityToken validatedToken);

            return validatedToken != null;
            }
        }
    }
