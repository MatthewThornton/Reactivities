using Application.Activities;
using Application.Core;
using MediatR;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<Persistence.DataContext>(opt => {
    opt.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection"));
});
builder.Services.AddCors(opt => {
    opt.AddPolicy("CorsPolicy", policy => {
        policy.AllowAnyMethod().AllowAnyHeader().WithOrigins("http://localhost:3000");
    });
});

builder.Services.AddMediatR(typeof(List.Handler));
builder.Services.AddAutoMapper(typeof(MappingProfiles).Assembly);

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("CorsPolicy");

app.UseAuthorization();
 
app.MapControllers();

using var scrope = app.Services.CreateScope();
var services = scrope.ServiceProvider;

try
{
    var context = services.GetRequiredService<Persistence.DataContext>();
    await context.Database.MigrateAsync();
    await Persistence.Seed.SeedData(context);
}
catch (Exception ex)
{
    var logger = services.GetRequiredService<ILogger<Program>>();
    logger.LogError(ex, "An error occurred while migrating the database.");
    throw;
}

app.Run();
