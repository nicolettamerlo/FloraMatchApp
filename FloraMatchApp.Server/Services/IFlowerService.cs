using FloraMatchApp.Server.Models;

namespace FloraMatchApp.Server.Services
{
    public interface IFlowerService
    {
        Task<IEnumerable<Flower>> GetMatchedFlowersAsync(FlowerFilter filter);
    }
}
