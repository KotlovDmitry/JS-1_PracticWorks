let val = +prompt('val = '), powerOfVal = +prompt('pow = ');
function power(val, powerOfVal) {
    if (powerOfVal == 1) {
        return val;
    } else {
        return val * power(val, powerOfVal - 1);
    }
};
power(val, powerOfVal);
console.log(power(val, powerOfVal));