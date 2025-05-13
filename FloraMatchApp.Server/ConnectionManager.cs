using Microsoft.Extensions.Configuration;
using Microsoft.Data.SqlClient;

namespace FloraMatchApp.Server.Database;

public class ConnectionManager
{
    private readonly string _connectionString;
    private readonly ILogger<ConnectionManager> _logger;

    public ConnectionManager(IConfiguration configuration, ILogger<ConnectionManager> logger)
    {
        _logger = logger;
        _connectionString = configuration.GetConnectionString("DefaultConnection");

        if (string.IsNullOrWhiteSpace(_connectionString))
        {
            _logger.LogError("❌ Connection string 'DefaultConnection' not found.");
            throw new Exception("Connection string 'DefaultConnection' not found.");
        }

        _logger.LogInformation("✅ Connection string loaded from IConfiguration.");
    }

    public SqlConnection? GetConnection()
    {
        try
        {
            var connection = new SqlConnection(_connectionString);
            connection.Open();
            _logger.LogInformation("✅ SQL connection opened successfully.");
            return connection;
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "❌ Error opening SQL connection.");
            return null;
        }
    }
}

