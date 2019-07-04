// 'use strict';

// let A = [20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5];

// function findOdd(num) {

//     let odds = A.forEach(element => {
//         if (element  % 2 !== 0 || element === num) {
//             console.log('hhh')
//         } else {
//             console.log('xxx')
//         }
//     });
//     return 0;
//   }

//   findOdd(5)

// is number
// function isNumber(obj) {
//     return obj !== undefined && typeof(obj) === 'number' && !isNaN(obj);
//   }

//  find only numbers tm
// let arr = [20,1,-1,2,-2,3,3,5,'',true, '444'];

// const result = arr.filter(function isNumber(obj) {
//                    return obj !== undefined && typeof(obj) === 'number' && !isNaN(obj);
//                });
// console.log(result);

// range
// const range = (start, stop, step) => Array.from({ length: (stop - start) / step }, (_, i) => start + (i * step));
// range(0, 5, 1);

const abuse = ['hi', 'blin', 'goose'];

document.querySelector('button').onclick = () => {
    let text = document.querySelector('textarea').value;

    for (let i = 0; i < abuse.length; i++) {
        while (text.indexOf(abuse[i]) != -1) {
            text = text.replace(abuse[i], star(abuse[i].length));
        }
    }
    document.querySelector('#out').innerHTML += '<div class="commet">' + text + '</div>';
}

function star(n) {
    let out = '';
    for (let i = 0; i < n; i++) {
        out += '*';
    }
    return out;
}