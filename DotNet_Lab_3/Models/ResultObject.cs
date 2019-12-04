using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DotNet_Lab_3.Models
{
    public class ResultObject
    {
        public Int32 resultNumber { get; set; }

        public TimeSpan spentTime { get; set; }

        public ResultObject(Int32 resultNumber, TimeSpan spentTime)
        {
            this.resultNumber = resultNumber;
            this.spentTime = spentTime;
        }
    }
}
