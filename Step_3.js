function getRandomNuber(min, max) {
    return Math.random() * (max - min) + min;
};
let a_3 = parseInt(getRandomNuber(-100, 100)), b_3 = parseInt(getRandomNuber(-100, 100));
console.log(a_3, b_3);

if (a_3 >= 0 && b_3 >= 0){
    console.log('a-b=', a_3-b_3, 'b-a=', b_3-a_3);
} else if ((a_3>=0 && b_3<0) || (a_3<0 && b_3>=0)){
    console.log(a_3 + b_3);
} else {
    console.log(a_3 * b_3);
};