using Application.Company.Queries.GetAllCompany;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DriverController : ControllerBase
    {
        private readonly IMediator _mediator;
        public DriverController(IMediator mediator)
        {
            _mediator = mediator;
        }
        [HttpGet("GetAllDriver")]
        [AllowAnonymous]
        public async Task<IActionResult> GetAllDrivers()
        {
            var request = new GetAllCompanyQuery();
            return Ok(await _mediator.Send(request));
        }
    }
}
