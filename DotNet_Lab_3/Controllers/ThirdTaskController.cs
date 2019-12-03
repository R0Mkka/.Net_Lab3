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
        public IActionResult gcd([FromBody]TwoNumbersObject data)
        {
            if (ModelState.IsValid)
            {
                Int32 result = Helper.gcdBinary(data.firstNumber, data.secondNumber);

                ResultObject resultObject = new ResultObject(result);

                return Ok(resultObject);
            }

            return BadRequest(ModelState);
        }
    }
}
