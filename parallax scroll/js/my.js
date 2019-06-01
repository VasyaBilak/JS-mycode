// 'use strict';
// const obj = {
//     name: 'ddd',
//     age: 28,
//     country: 'UK',
// }

// function removeProp(obj, prop) {
//     for (let key in obj) {
//         if (obj[key] === prop) {
//             console.log('yes')
//             break;
//         } else {
//             console.log('no')
//             break;
//         }
//       }
// }

// removeProp(obj, 'ddd');

function parralax(element, distance, speed) {
    const item = document.querySelector(element);
    item.style.transform = `translateY(${distance * speed}px)`;  
}

window.addEventListener('scroll', function() {
    parralax('header', window.scrollY, 1);
    parralax('.small-rose', window.scrollY, 0.4);
    parralax('.big-rose', window.scrollY, 0.2);
});

