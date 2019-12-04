using System;
using Microsoft.AspNetCore.Mvc;
using DotNet_Lab_3.Models;
using DotNet_Lab_3.Helpers;

namespace DotNet_Lab_3.Controllers
{
    [Route("third-task")]
    public class ThirdTaskController : Controller
    {
        [HttpPost("gcd-binary")]
        public IActionResult gcdBinary([FromBody]TwoNumbersObject data)
        {
            if (ModelState.IsValid)
            {
                ResultObject resultObject = Helper.gcdBinary(data.firstNumber, data.secondNumber);

                return Ok(resultObject);
            }

            return BadRequest(ModelState);
        }
    }
}
