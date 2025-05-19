fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(users => {
    users.map(user => console.log(user.name))
})
