using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DotNet_Lab_3.Models
{
    public class ResultObject
    {
        public Int32 resultNumber { get; set; }

        public ResultObject(Int32 resultNumber)
        {
            this.resultNumber = resultNumber;
        }
    }
}
