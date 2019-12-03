using System;
using Microsoft.AspNetCore.Mvc;
using DotNet_Lab_3.Models;
using DotNet_Lab_3.Helpers;

namespace DotNet_Lab_3.Controllers
{
    [Route("first-task")]
    public class FirstTaskController : Controller
    {
        [HttpPost("gcd")]
        public IActionResult gcd([FromBody]TwoNumbersObject data)
        {
            if (ModelState.IsValid)
            {
                Int32 result = Helper.gcd(data.firstNumber, data.secondNumber);

                ResultObject resultObject = new ResultObject(result);

                return Ok(resultObject);
            }

            return BadRequest(ModelState);
        }
    }
}
