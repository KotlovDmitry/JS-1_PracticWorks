function mathOperation(arg1, arg2, operation){
    switch(operation){
        case 'сложение':
            console.log(arg1 + arg2);
            break;
        case 'вычитание':
            console.log(arg1 - arg2);
            break;
        case 'деление':
            console.log(arg1 / arg2);
            break;
        case 'умножение':
            console.log(arg1 * arg2);;
            break;
       }
}
let arg1 = +prompt("arg1 = ?"), arg2 = +prompt("arg2 = ?"); operation = prompt("operation - ?")
mathOperation(arg1, arg2, operation);