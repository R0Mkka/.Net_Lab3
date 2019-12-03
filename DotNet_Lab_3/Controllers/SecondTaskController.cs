using System;
using Microsoft.AspNetCore.Mvc;
using DotNet_Lab_3.Models;
using DotNet_Lab_3.Helpers;

namespace DotNet_Lab_3.Controllers
{
    [Route("second-task")]
    public class SecondTaskController : Controller
    {
        [HttpPost("number-list-gcd")]
        public IActionResult numberListGcd([FromBody]NumberListObject data)
        {
            if (ModelState.IsValid)
            {
                Int32 result = Helper.gcd(data.numberList);

                ResultObject resultObject = new ResultObject(result);

                return Ok(resultObject);
            }

            return BadRequest(ModelState);
        }
    }
}
