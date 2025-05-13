using FloraMatchApp.Server.Dao;
using FloraMatchApp.Server.Database;
using FloraMatchApp.Server.Models;
using Microsoft.AspNetCore.Http.Extensions;
using Microsoft.Data.SqlClient;
using FloraMatch.Server.QueryBuilders;

namespace FloraMatchApp.Server.Dao;
public class FlowerDao : IFlowerDao
{
    private readonly ConnectionManager _connectionManager;

    public FlowerDao(ConnectionManager connectionManager)
    {
        _connectionManager = connectionManager;
    }

    public async Task<IEnumerable<Flower>> MatchFlowersAsync(FlowerFilter filter)
    {
        FlowerQueryBuilder queryBuilder = new FlowerQueryBuilder();
        queryBuilder.BuildFromFilter(filter);

        string query = queryBuilder.Query;
        IReadOnlyDictionary<string, object> parameters = queryBuilder.Parameters;

        List<Flower> flowers = new List<Flower>();
        using (SqlConnection? connection = _connectionManager.GetConnection())
        {
            if (connection == null)
            {
                throw new Exception("❌ Database connection is null.");
            }

            using (SqlCommand command = new SqlCommand(query, connection))
            {
                // Increase timeout to handle cold starts on Azure SQL Serverless (Free tier),
                // where default 30s may be too short
                command.CommandTimeout = 60;
                foreach (var pair in parameters)
                {
                    command.Parameters.AddWithValue(pair.Key, pair.Value);
                }

                using (SqlDataReader reader = await command.ExecuteReaderAsync())
                {
                    while (await reader.ReadAsync())
                    {
                        flowers.Add(MapReaderToFlower(reader));
                    }
                }
            }
        }
        return flowers;
    }

    private Flower MapReaderToFlower(SqlDataReader reader)
    {
        return new Flower
        {
            Id = reader.GetInt32(reader.GetOrdinal("id")),
            Name = reader.GetString(reader.GetOrdinal("flower_name")),
            BloomingSeason = reader.GetString(reader.GetOrdinal("bloom_season")),
            CatSafe = reader.GetBoolean(reader.GetOrdinal("cat_safe")),
            DogSafe = reader.GetBoolean(reader.GetOrdinal("dog_safe")),
            Environment = reader.GetString(reader.GetOrdinal("environment")),
            CareDifficulty = reader.GetString(reader.GetOrdinal("care_difficulty")),
            ImageUrl = reader.GetString(reader.GetOrdinal("image_url"))
        };
    }
}

