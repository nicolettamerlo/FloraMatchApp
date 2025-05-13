namespace FloraMatchApp.Server.Models;
public class Flower
{
    public int Id { get; set; }
    public string? Name { get; set; }
    public string? BloomingSeason { get; set; }
    public string? CareDifficulty { get; set; }
    public string? Environment { get; set; }
    public string? ImageUrl { get; set; }
    public bool? CatSafe { get; set; }
    public bool? DogSafe { get; set; }

    public override string? ToString()
    {
        return $"{GetType()}: Name: {Name}, Blooming Season: {BloomingSeason}, Care Difficulty: {CareDifficulty}, Environment: {Environment}, Cat Safe: {CatSafe} Dog Safe: {DogSafe}";
    }
}
