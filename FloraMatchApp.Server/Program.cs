using FloraMatch.Server.QueryBuilders;
using FloraMatchApp.Server.Dao;
using FloraMatchApp.Server.Database;
using FloraMatchApp.Server.Services;

namespace FloraMatchApp.Server
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container
            builder.Services.AddControllers();  
            builder.Services.AddSingleton<ConnectionManager>();  
            builder.Services.AddScoped<IFlowerService, FlowerService>();  
            builder.Services.AddScoped<FlowerQueryBuilder>();  
            builder.Services.AddScoped<IFlowerDao, FlowerDao>();  

            var app = builder.Build();

            app.UseDefaultFiles();  
            app.MapStaticAssets();  

            // Enable HTTPS redirection
            app.UseHttpsRedirection();  

            // Enable authorization
            app.UseAuthorization();  

            // Map API controllers
            app.MapControllers();  

            // Map the SPA fallback to the main page (useful for SPAs like React, Angular, etc.)
            app.MapFallbackToFile("/index.html"); 

            app.Run();  
        }
    }
}
