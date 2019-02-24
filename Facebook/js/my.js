var database = [
    {
        username: "Vasyl",
        password: '111'
    },
    {
        username: "Petro",
        password: '123'
    },
    {
        username: "Volodya",
        password: '321'
    },
    {
        username: "Lybchik",
        password: '222'
    }
];

var newsfeed = [
    {
        username: "Vasyl",
        timeline: "Hi 1!"
    },
    {
        username: "Petro",
        timeline: "Hi 2!"
    },
    {
        username: "Volodya",
        timeline: "Hi 3!"
    },
    {
        username: "Lybchik",
        timeline: "Hi 4!"
    }
]

function isUserValid(username, password) {
    for (var i=0; i < database.length; i++) {
        if (database[i].username === username &&
            database[i].password === password) {
                return true;
            }
    }
    return false;
}

function signIn(username, password) {
    if (isUserValid(username, password)) {
        console.log(newsfeed);
    } else {
        alert("Sorry, wrong username and password");
    }
}

var userNamePrompt = prompt("What\'s your username?");
var passwordPrompt = prompt("What\'s your password?");

signIn(userNamePrompt, passwordPrompt);
