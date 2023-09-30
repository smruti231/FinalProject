using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Validation.Models; // Adjust the namespace as needed
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Validation.Services;

var builder = WebApplication.CreateBuilder(args);

// Configuration
builder.Configuration.AddJsonFile("appsettings.json", optional: false, reloadOnChange: true);

var connectionString = builder.Configuration.GetConnectionString("conString");
builder.Services.AddDbContext<DataContext>(options =>
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
    options.RequireHttpsMetadata = false; // Set to true in production
    options.SaveToken = true;
    options.TokenValidationParameters = new TokenValidationParameters
        {
        ValidateIssuerSigningKey = true,
        IssuerSigningKey = new SymmetricSecurityKey(key),
        ValidateIssuer = false,
        ValidateAudience = false
        };
});

// Dependency Injection
builder.Services.AddScoped<IAuthService, AuthService>(); // Your authentication service

// CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("myPolicy", builder =>
    {
        builder.AllowAnyHeader();
        builder.AllowAnyOrigin();
        builder.AllowAnyMethod();
    });
});

// Controllers and Swagger
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

if (app.Environment.IsDevelopment())
    {
    app.UseSwagger();
    app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "YourNamespace v1"));
    }

app.UseAuthentication(); // Enable authentication middleware
app.UseAuthorization();

app.UseCors("myPolicy");

app.MapControllers();

app.Run();
