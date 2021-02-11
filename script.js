const currentUsers = [
    {
        username: "hristijan",
        password: "logmein12",
        isAdmin: "yes"
    },
    {
        username: "darko",
        password: "javascript",
        isAdmin: "yes"
    },
    {
        username: "natasha",
        password: "advanced",
        isAdmin: "no"
    },
    {
        username: "spase",
        password: "qwerty123",
        isAdmin: "no"
    }
]

document.getElementById("loginBtn").addEventListener('click', function(){
    let userName = document.getElementById("username").value
    let password = document.getElementById("password").value
    
    for(i = 0; i < currentUsers.length; i++) {
        if(username == currentUsers[i].userName && password == currentUsers[i].password) {
            console.log(`${userName} is logged in`)
        }
    };
})