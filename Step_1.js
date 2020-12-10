'use strict';

// Пояснения к строкам - в комментариях.
// Для удобства заменил алерты на выводы значений в консоль.

let a = 1, b = 1, c, d;
c = ++a; console.log(c);           // 2
// a=a+1=2, c=a=2, 
d = b++; console.log(d);           // 1
// d=b=1, b=b+1=2
c = (2+ ++a); console.log(c);      // 5
// a=a+1=3, c=2+a=5
d = (2+ b++); console.log(d);      // 4
// d=2+b=4, b=b+1=3
console.log(a);                    // 3
// Из строки 11
console.log(b);                    // 3
// Из строки 13