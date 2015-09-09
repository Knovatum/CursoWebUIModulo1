function getThreeDigitsName () {
	var num, result;
	num = prompt("Type any number of 3 digits between 0 and 999.");
	result = translateNumber(num);
	document.getElementById("threeNumberResult").innerHTML = result;
}
// Write an expression that checks if given integer is odd or even.
function checkOddity (num) {
	var result;
	if (num%2===0){
		result = "This is an even number.";
	} else {
		result = "This is an odd number.";
	}
	return result;
}

// Write a boolean expression that checks for given integer if it can be
// divided (without remainder) by 7 and 5 in the same time.
function divideBySevenAndFive (num) {
	var result;
	result = devideByDistinctNumbers(num, 7, 5);
	if (result) {
		return "The number is devisible by 7 and 5.";
	} else {
		return "The number is NOT devisible by 7 and 5.";
	}
}

// Aux function for previous function (divideBySevenAndFive)
function devideByDistinctNumbers (numIn, devisor1, devisor2) {
	var result;
	result = (parseInt(numIn/devisor1)*devisor1===numIn) && (parseInt(numIn/devisor2)*devisor2===numIn);
	return result;
}

// Write an expression that calculates rectangle’s area by given width and height.
function getRectangleArea (width, height) {
	return width*height;
}

// Write an expression that checks for given integer if its third digit (right-
// to-left) is 7. E. g. 1732 → true.
function thirdDigitIsSeven (num) {
	var stringNum, result;
	stringNum = num.toString().trim();
	if (stringNum<3) {
		return false;
	}
	result = stringNum.split("")[stringNum.length-3];
	return result === "7";
}

// Write an expression that checks if given positive integer number n (n ≤ 
// 100) is prime. E.g. 37 is prime.
function isPrime (num) {
	var result, iterator;
	if (num <= 1 || num > 100) {
		return false;
	}
	result = true;
	iterator = 2;
	while (iterator<num) {
		var division = num/iterator;
		if (division===parseInt(division)) {
			result = false;
			break;
		}
		iterator++;
	}
	return result;
}

// Write an if statement that examines two integer variables and 
// exchanges their values if the first one is greater than the second one.
function exchageIntValues(num1, num2) {
	var temp, result;
	if (num1>num2) {
		temp = num1;
		num1 = num2;
		num2 = temp;
	}
}

// Write a script that shows the sign (+ or -) of the product of three real 
// numbers without calculating it. Use a sequence of if statements.
function getProductSign(num1, num2, num3) {
	var result;
	if ((num1>=0&&num2>=0&&num2>=0)||
		(num1<0&&num2<0&&num2>=0)||
		(num1<0&&num2>=0&&num2<0)||
		(num1>=0&&num2<0&&num2<0)){
		result="+";
	} else {
		result="-";
	}
	return result;
}

// Write a script that finds the biggest of three integers using nested if 
// statements.
function getBiggestInt(num1, num2, num3) {
	var result;
	if (num1>num2&&num1>num3) {
		result=num1;
	} else {
		if (num2>num1&&num2>num3) {
			result=num2;
		} else {
			if (num3>num1&&num3>num2) {
				result=num3;
			}
		}
	}
	return result;
}

// Sort 3 real values in descending order using nested if statements.
function orderByDesc(num1, num2, num3) {
	var result=[];
	if (num1>num2&&num1>num3) {
		result[0]=num1;
		if (num2>num3) {
			result[1]=num2;
			result[2]=num3;
		} else {
			result[1]=num3;
			result[2]=num2;
		}
	} else if (num2>num1&&num2>num3) {
		result[0]=num2;
		if (num1>num3) {
			result[1]=num1;
			result[2]=num3;
		} else {
			result[1]=num3;
			result[2]=num1;
		}
	} else if (num3>num1&&num3>num2) {
		result[0]=num3;
		if (num1>num2) {
			result[1]=num1;
			result[2]=num2;
		} else {
			result[1]=num2;
			result[2]=num1;
		}
	}
	return result;
}

// Write script that asks for a digit and depending on the input shows the 
// name of that digit using a switch statement.
function getSingleDigitName(num) {
	var result;
	num=parseInt(num);
	switch(num) {
		case 0: result="zero";
		break;
		case 1: result="one";
		break;
		case 2: result="two";
		break;
		case 3: result="three";
		break;
		case 4: result="four";
		break;
		case 5: result="five";
		break;
		case 6: result="six";
		break;
		case 7: result="seven";
		break;
		case 8: result="eight";
		break;
		case 9: result="nine";
		break;
		default:
		result="Invalid number. Use a range between 0 and 9.";
	}
	return result;
}

function getTensDigitName(num) {
	var result;
	switch (num) {
		case 10: result="ten";
		break;
		case 11: result="eleven";
		break;
		case 12: result="twelve";
		break;
		case 13: result="thirteen";
		break;
		case 14: result="fourteen";
		break;
		case 15: result="fifteen";
		break;
		case 16: result="sixteen";
		break;
		case 17: result="seventeen";
		break;
		case 18: result="eighteen";
		break;
		case 19: result="nineteen";
		break;
		default:
		result="Invalid number";
	}
	return result;
}

function getTwoDigitName(num) {
	var result;
	if (num>9&&num<20) {
		result=getTensDigitName(num);
	} else {
		if (num>=20&&num<30) {
			result="twenty";
		} else if (num>=30&&num<40) {
			result="thirty";				
		} else if (num>=40&&num<50) {
			result="fourty";				
		} else if (num>=50&&num<60) {
			result="fifty";				
		} else if (num>=60&&num<70) {
			result="sixty";				
		} else if (num>=70&&num<80) {
			result="seventy";				
		} else if (num>=80&&num<90) {
			result="eighty";				
		} else if (num>=90&&num<100) {
			result="ninety";					
		}

		if (num!==20&&num!==30&&num!==40&&num!==50&&num!==60&&num!==70&&num!==80&&num!==90) {
			var sec=" "+getSingleDigitName(parseInt(num.toString().split("")[1]));
			result+=sec
		}
	}
	return result;
}

function getThreeDigitName(num) {
	var result;
	if (num>=100&&num<200) {
		result="one hundred";
	} else if (num>=200&&num<300) {
		result="two hundred";				
	} else if (num>=300&&num<400) {
		result="three hundred";				
	} else if (num>=400&&num<500) {
		result="four hundred";				
	} else if (num>=500&&num<600) {
		result="five hundred";				
	} else if (num>=600&&num<700) {
		result="six hundred";				
	} else if (num>=700&&num<800) {
		result="seven hundred";				
	} else if (num>=800&&num<900) {
		result="eight hundred";
	} else {
		result="nine hundred";
	}

	if (num!==100&&num!==200&&num!==300&&num!==400&&num!==500&&num!==600&&num!==700&&num!==800&&num!==900) {
		var temp=parseInt(num.toString().split("")[1]+num.toString().split("")[2]);
		var sec=" and "+getTwoDigitName(temp);
		result+=sec
	}
	return result;
}
// Write a script that finds the greatest of given 5 variables.
function getGreaterOfFive() {
	// not clearly defined.
}

/*
* Write a script that converts a number in the range [0...999] to a text 
* corresponding to its English pronunciation. Examples:
* 0 → "Zero"
* 273 → "Two hundred seventy three"
* 400 → "Four hundred"
* 501 → "Five hundred and one"
* 711 → "Seven hundred and eleven"
*/
function translateNumber(num) {

	if (!parseInt(num)) return "You must enter a number";
	num=parseInt(num);
	if (num<0||num>999) return "Invalid range. Number must be between 0 and 999.";
	var result, ln, lit;
	ln=num.toString().length;
	lit=num.toString().split("");
	if (ln===1) {
		result=getSingleDigitName(num);
	} else if (ln===2) {
		if (lit[0]==="0") {
			result=getSingleDigitName(lit[1]);
		} else {
			result=getTwoDigitName(num);
		}
	} else if (ln===3) {
		if (lit[0]==="0"&&lit[1]==="0") {
			result=getSingleDigitName(lit[1]);
		} else if (lit[0]==="0"&&lit[1]!=="0") {
			result=getTwoDigitName(num);
		} else {
			result=getThreeDigitName(num);						
		}
	} else {
		result="Something weird happened...";
	}
	return result;
}