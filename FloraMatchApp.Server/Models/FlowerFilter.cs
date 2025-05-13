
namespace FloraMatchApp.Server.Models;
public class FlowerFilter
{
    public string? BloomingSeason { get; set; }
    public string? CareDifficulty { get; set; }
    public string? PetFriendly { get; set; }
    public string? Environment { get; set; }

    public override string? ToString()
    {
        return $"{GetType}: Blooming Season: {BloomingSeason}, Care Difficulty: {CareDifficulty}, Pet Friendly: {PetFriendly}, Environment: {Environment}";
    }
}
