// //forEach, filter, map, every, some, reduce
// let numbers = [10, 20, -10, 2, -5];
// let users = [
//     {
//         name: 'Denis',
//         age: 29,
//         gender: 'male',
//         balance: 100
//     },
//     {
//         name: 'Olga',
//         age: 21,
//         gender: 'female',
//         balance: 200
//     },
//     {
//         name: 'Ivan',
//         age: 22,
//         gender: 'male',
//         balance: 300
//     },
// ]

// //Filter
// let res = numbers.filter((item, i, arr) => {
//     return item >= 0;
// });

// res = users.filter(user => {
//     return user.gender === 'male';
// });

// res = users.filter(user => user.gender === 'male'
// );

// // console.log(res);

// //Map
// let mapRes = users.map(user => {
//     return user.name;
// });

// mapRes = users.map(user => {
//     user.age = user.age + ' years old';
//     return user;
// });

// // console.log(mapRes);

// //Reduce
// let total = users.reduce((sum, user) => {
//     // console.log(sum, user.balance);
//     return sum += user.balance;
// }, 0);

// total = users.reduce((sum, user) => sum += user.balance, 0);

// const pipeFunctions = (...fns) => fns.reduce((f, g) => (...args) => g(f(...args))); 

//Promises
// let post;
// let comments;
// let id = 1;

// ajax.send({
//     method: 'GET',
//     url: `https://jsonplaceholder.typicode.com/posts/${id}`,
//     success: function (res) {
//         post = JSON.parse(res);

//         ajax.send({
//             method: 'GET',
//             url: `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
//             success: function (res) {
//                 comments = JSON.parse(res);
//             }
//         })
//     },
//     error: function (err) {
//         console.log(err);
//     }
// });

// const promise1 = new Promise(function(resolve, reject) {
//     setTimeout(function () {
//         resolve('First step');
//     }, 2000);
// });

// const promise2 = new Promise(function(resolve, reject) {
//     setTimeout(function () {
//         resolve('Second step');
//     }, 2000);
// });

// const promise3 = new Promise(function(resolve, reject) {
//     setTimeout(function () {
//         resolve('Third step');
//     }, 2000);
// });

// promise1
//     .then(data => {
//         console.log(data);
//         return 'some new info'
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.log(err);
//     });

// promise1
//     .then(promise2)
//     .then(promise3)
//     .catch(err => {
//         console.log(err);
//     });

// function promise1() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             console.log('First step');
//             resolve('First step');
//         }, 2000);
//     })
// }

// function promise2(data) {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             console.log(data, 'Second step');
//             reject('Error on Second step');
//         }, 2000);
//     })
// }

// function promise3(data) {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             console.log(data, 'Third step');
//             resolve('Third step');
//         }, 2000);
//     })
// }

// promise1()
//     .then(promise2)
//     .then(promise3)
//     .catch(err => {
//         console.log(err);
//     });

// let post;
// let comments;

// function getPostById(id) {
//     return  new Promise(function (resolve, reject) {
//         ajax.send({
//             method: 'GET',
//             url: `https://jsonplaceholder.typicode.com/posts/${id}`,
//             success: resolve,
//             error: reject
//         })
//     })
// }

// function getCommentsById(id) {
//     return  new Promise(function (resolve, reject) {
//         ajax.send({
//             method: 'GET',
//             url: `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
//             success: resolve,
//             error: reject
//         })
//     })
// }

// function generateTemplate(comments) {
//     comments.forEach(comment => {
        
//     });
// }

// getPostById(1)
//     .then(res => {
//         post = JSON.parse(res);
//         return post.id
//     })
//     .then(getCommentsById)
//     .then(res => {
//         comments = JSON.parse(res);
//         return comments;
//     })
//     .then(generateTemplate)
//     .catch(err => {
//         console.log(err);
//     })

    // Fetch
    fetch(`https://jsonplaceholder.typicode.com/posts/1/comments`, {
        method: 'GET'
    })
        .then(res => {
            console.log(res.status);
            console.log(res.headers.get('Content-type'));
            return res.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(err => {
            console.log(err);
        })


const server = new JsonPlaceHolder();

server.getPosts(1)
    .then(data => data.id)
    .then(server.getCommentsById)
    .then(comments => console.log(comments));