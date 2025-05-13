using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FloraMatchApp.Server.Dao;
using FloraMatchApp.Server.Models;

namespace FloraMatchApp.Server.Services;

public class FlowerService : IFlowerService
{
    private const int MAX_RESULT = 9;
    private readonly IFlowerDao _flowerDao;

    public FlowerService(IFlowerDao flowerDao)
    {
        _flowerDao = flowerDao;
    }

    public async Task<IEnumerable<Flower>> GetMatchedFlowersAsync(FlowerFilter filter)
    {
        var matchedFlowers = await _flowerDao.MatchFlowersAsync(filter) ?? new List<Flower>();

        // Order by care difficulty first, then by blooming season
        var orderedFlowers = matchedFlowers
            .OrderBy(f => f.CareDifficulty)
            .ThenBy(f => f.BloomingSeason)
            .ToList();

        // If more than MAX_RESULT, pick a random subset of MAX_RESULT
        if (orderedFlowers.Count > MAX_RESULT)
        {
            orderedFlowers = orderedFlowers
                .OrderBy(_ => Random.Shared.Next())
                .Take(MAX_RESULT)
                .ToList();
        }

        return orderedFlowers;
    }
}
