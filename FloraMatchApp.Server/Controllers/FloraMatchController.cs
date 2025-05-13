using Microsoft.AspNetCore.Mvc;
using FloraMatchApp.Server.Models;
using FloraMatchApp.Server.Services;
using System;

namespace FloraMatchApp.Server.Controllers;

[ApiController]
[Route("api/[controller]")]
public class FloraMatchController : ControllerBase
{
    private readonly IFlowerService _flowerService;
    private readonly ILogger<FloraMatchController> _logger;

    public FloraMatchController(IFlowerService flowerService, ILogger<FloraMatchController> logger)
    {
        _flowerService = flowerService;
        _logger = logger;
    }

    [HttpPost("match")]
    public async Task<IActionResult> MatchFlowers([FromBody] FlowerFilter filter)
    {
        if (filter == null)
        {
            _logger.LogWarning("Received a null flower filter.");
            return BadRequest("Invalid filter data.");
        }

        _logger.LogInformation("Received filter: {@Filter}", filter);

        try
        {
            var matchedFlowers = await _flowerService.GetMatchedFlowersAsync(filter);
            _logger.LogInformation("Found {Count} matching flowers.", matchedFlowers.Count());
            return Ok(matchedFlowers);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "An error occurred while matching flowers.");
            return StatusCode(500, "An error occurred while processing your request.");
        }
    }
}

