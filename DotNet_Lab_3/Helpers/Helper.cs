using System;
using System.Collections.Generic;
using System.Diagnostics;
using DotNet_Lab_3.Models;

namespace DotNet_Lab_3.Helpers
{
    public class Helper
    {
        public static ResultObject gcd(Int32 firstNumber, Int32 secondNumber)
        {
            Stopwatch timer = new Stopwatch();

            timer.Start();

            while (secondNumber != 0)
            {
                Int32 tempNumber = secondNumber;

                secondNumber = firstNumber % secondNumber;

                firstNumber = tempNumber;
            }

            timer.Stop();

            return new ResultObject(firstNumber, timer.Elapsed);
        }

        public static ResultObject gcd(List<Int32> numberList)
        {
            Stopwatch timer = new Stopwatch();

            timer.Start();

            if (numberList.Count < 2)
            {
                return new ResultObject(-1, TimeSpan.Zero);
            }

            Int32 listLength = numberList.Count;
            Int32 resultNumber = gcd(numberList[0], numberList[1]).resultNumber;

            for (int i = 2; i < listLength; i++)
            {
                resultNumber = gcd(resultNumber, numberList[i]).resultNumber;
            }

            timer.Stop();

            return new ResultObject(resultNumber, timer.Elapsed);
        }

        public static ResultObject gcdBinary(Int32 firstNumber, Int32 secondNumber)
        {
            Stopwatch timer = new Stopwatch();

            timer.Start();

            if (firstNumber == secondNumber)
            {
                timer.Stop();

                return new ResultObject(firstNumber, timer.Elapsed);
            }

            if (firstNumber == 0)
            {
                timer.Stop();

                return new ResultObject(secondNumber, timer.Elapsed);
            }

            if (secondNumber == 0)
            {
                timer.Stop();

                return new ResultObject(firstNumber, timer.Elapsed);
            }

            Int32 shift = 0;

            while (((firstNumber | secondNumber) & 1) == 0)
            {
                shift++;

                firstNumber >>= 1;
                secondNumber >>= 1;
            }

            while ((firstNumber & 1) == 0) firstNumber >>= 1;

            do
            {
                while ((secondNumber & 1) == 0) secondNumber >>= 1;

                if (firstNumber > secondNumber)
                {
                    Int32 tempNumber = secondNumber;
                    secondNumber = firstNumber;
                    firstNumber = tempNumber;
                }

                secondNumber -= firstNumber;
            } while (secondNumber != 0);

            timer.Stop();

            return new ResultObject(firstNumber << shift, timer.Elapsed);
        }
    }
}
