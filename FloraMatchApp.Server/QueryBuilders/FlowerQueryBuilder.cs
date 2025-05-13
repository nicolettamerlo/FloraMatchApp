using System.Text;
using Microsoft.Data.SqlClient;
using FloraMatchApp.Server.Models;

namespace FloraMatch.Server.QueryBuilders
{
    public class FlowerQueryBuilder
    {
        private readonly StringBuilder _query = new StringBuilder("SELECT * FROM Flowers WHERE 1=1");
        private readonly Dictionary<string, object> _parameters = new();

        public string Query => _query.ToString();
        public IReadOnlyDictionary<string, object> Parameters => _parameters;

        public void BuildFromFilter(FlowerFilter filter)
        {
            if (IsValid(filter.BloomingSeason))
            {
                _query.Append(" AND bloom_season = @BloomingSeason");
                _parameters["BloomingSeason"] = filter.BloomingSeason;
            }

            if (IsValid(filter.CareDifficulty))
            {
                _query.Append(" AND care_difficulty = @CareDifficulty");
                _parameters["CareDifficulty"] = filter.CareDifficulty;
            }

            if (IsValid(filter.PetFriendly))
            {

                if (filter.PetFriendly == "cat_safe" || filter.PetFriendly == "both_safe")
                {
                    _query.Append(" AND cat_safe = @CatSafe");
                    _parameters["CatSafe"] = 1;
                }

                if (filter.PetFriendly == "dog_safe" || filter.PetFriendly == "both_safe")
                {
                    _query.Append(" AND dog_safe = @DogSafe");
                    _parameters["DogSafe"] = 1;
                }
            }

            if (IsValid(filter.Environment))
            {
                _query.Append(" AND environment = @Environment");
                _parameters["Environment"] = filter.Environment;
            }
        }

        private bool IsValid(string? value)
        {
            return !string.IsNullOrWhiteSpace(value) && value != "indifferent";
        }
    }
}
