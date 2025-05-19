fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(user =>{
    const container = document.querySelector("#container")
    const users = user.slice(0)

    const userTn = users.map(items =>{
        return `
        <div class="userTn">
        
          <img src="https://placehold.co/600x400" alt=${items.title}/>
          <h2>Nome do Usuário</h2>
          <p><b>Username:</B>${items.name}</p>
          <p><b>Email:</b>${items.email}</p>
          <p><b>Telefone:</b>${items.phone}</p>
          <p><b>Website:</b>${items.website}</p>
           <p><b>Empresa:</b>${items.company.name}</p>
            <p><b>Endereço:</b>${items.address.street},${items.address.suite},${items.address.city},${items.address.zipcode} </p>


        
        </div>`
    })
    container.innerHTML = userTn.join("")
})