const underflowLimit = -10_00_000;
const overflowLimit = 10_00_000;
let response = {}

function checkInvalid(num1, num2) {
    if(num1.toString() === 'NaN' || num2.toString() === 'NaN') {
        response = {
            status: 'error',
            message: 'Invalid data types'
        }
        return true;
    }
}

function checkUnderflow(num1, num2, result) {
    if (num1 < underflowLimit || num2 < underflowLimit || result < underflowLimit) {
        response = {
            status: 'error',
            message: 'Underflow'
        }
        return true;
    }
}

function checkOverflow(num1, num2, result) {
    if (num1 > overflowLimit || num2 > overflowLimit || result > overflowLimit) {
        response = {
            status: 'error',
            message: 'Overflow'
        }
        return true;
    }
}

function add(num1, num2) {
    if(checkInvalid(num1, num2)) return response;
    const sum = num1 + num2;
    if(checkUnderflow(num1, num2, sum)) return response;
    if(checkOverflow(num1, num2, sum)) return response;
    return {
        status: 'success',
        message: 'the sum of given two numbers',
        sum: sum
    }
}

function sub(num1, num2) {
    if(checkInvalid(num1, num2)) return response;
    const difference = num1 - num2;
    if(checkUnderflow(num1, num2, difference)) return response;
    if(checkOverflow(num1, num2, difference)) return response;
    return {
        status: 'success',
        message: 'the difference of given two numbers',
        difference: difference
    }
}

function multipy(num1, num2) {
    if(checkInvalid(num1, num2)) return response;
    const result = (num1 * num2).toFixed(2);
    if(checkUnderflow(num1, num2, result)) return response;
    if(checkOverflow(num1, num2, result)) return response;
    return {
        status: 'success',
        message: 'The product of given two numbers',
        result: result
    }
}

function divide(num1, num2) {
    if(checkInvalid(num1, num2)) return response;
    if (num2 === 0) {
        return {
            status: 'error',
            message: 'Cannot divide by zero'
        }
    }
    const result = (num1 / num2).toFixed(2);
    if(checkUnderflow(num1, num2, result)) return response;
    if(checkOverflow(num1, num2, result)) return response;
    return {
        status: 'success',
        message: 'The division of given two numbers',
        result: result
    }
}

module.exports = {
    add,
    sub,
    multipy,
    divide
}