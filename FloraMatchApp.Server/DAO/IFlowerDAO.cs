using FloraMatchApp.Server.Models;

namespace FloraMatchApp.Server.Dao;

public interface IFlowerDao
{
    Task<IEnumerable<Flower>> MatchFlowersAsync(FlowerFilter filter);
}