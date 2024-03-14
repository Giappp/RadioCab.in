using Application.Auth.Commands.Login;
using Application.Auth.Commands.Register.UserRegister;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IMediator _mediator;
        public AuthController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody]LoginCommandRequest request)
        {
            return Ok(await _mediator.Send(request));
        }
        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] UserRegisterCommandRequest request)
        {
            return Ok(await _mediator.Send(request));
        }
    }
}
