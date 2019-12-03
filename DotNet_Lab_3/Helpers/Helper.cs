using System;
using System.Collections.Generic;
using System.Linq;

namespace DotNet_Lab_3.Helpers
{
    public class Helper
    {
        public static Int32 gcd(Int32 firstNumber, Int32 secondNumber)
        {
            while (secondNumber != 0)
            {
                Int32 tempNumber = secondNumber;

                secondNumber = firstNumber % secondNumber;

                firstNumber = tempNumber;
            }

            return firstNumber;
        }

        public static Int32 gcd(List<Int32> numberList)
        {
            if (numberList.Count < 2)
            {
                return -1;
            }

            Int32 listLength = numberList.Count;
            Int32 resultNumber = gcd(numberList[0], numberList[1]);

            for (int i = 2; i < listLength; i++)
            {
                resultNumber = gcd(resultNumber, numberList[i]);
            }

            return resultNumber;
        }

        public static Int32 gcdBinary(Int32 firstNumber, Int32 secondNumber)
        {
            if (firstNumber == secondNumber) return firstNumber;
            if (firstNumber == 0) return secondNumber;
            if (secondNumber == 0) return firstNumber;

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

            return firstNumber << shift;
        }
    }
}
