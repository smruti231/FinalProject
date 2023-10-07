using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Validation.Models;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Validation.Services;

namespace Validation
    {
        public class Program
        {
            public static void Main(string[] args) 
            {
            const string policy = "myPolicy";
            var builder = WebApplication.CreateBuilder(args);
            
            builder.Configuration.AddJsonFile("appsettings.json", optional: false, reloadOnChange: true);

            var connectionString = builder.Configuration.GetConnectionString("conString");
            builder.Services.AddDbContext<DataContext>(options =>
            {
                options.UseSqlServer(connectionString);
            });

            builder.Services.AddDbContext<OtpContext>(options =>
            {
                options.UseSqlServer(connectionString);
            });

            // JWT Configuration
            var jwtSettings = builder.Configuration.GetSection("Jwt");
            var secretKey = jwtSettings["SecretKey"];
            var issuer = jwtSettings["Issuer"];
            var audience = jwtSettings["Audience"];
            var key = Encoding.ASCII.GetBytes(secretKey);

            builder.Services.AddAuthentication(options =>
            {
                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            })
            .AddJwtBearer(options =>
            {
                options.RequireHttpsMetadata = false; 
                options.SaveToken = true;
                options.TokenValidationParameters = new TokenValidationParameters
                    {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(key),
                    ValidateIssuer = false,
                    ValidateAudience = false
                    };
            });

            builder.Services.AddScoped<IAuthService, AuthService>(); 
            builder.Services.AddTransient<IUserBlogData,BlogData>();
            builder.Services.AddTransient<IHotelData, HotelData>();



            builder.Services.AddCors((options) =>
            {
                options.AddPolicy(policy, options =>
                {
                    options.AllowAnyHeader();
                    options.AllowAnyOrigin();
                    options.AllowAnyMethod();
                });
            });

            builder.Services.AddControllers();
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();
            var app = builder.Build();
            if (app.Environment.IsDevelopment())
                {
                app.UseSwagger();
                app.UseSwaggerUI();
                }

            app.UseAuthorization();
            app.MapControllers();
            app.UseCors(policy);

            app.Run();

            }
        }
    }
