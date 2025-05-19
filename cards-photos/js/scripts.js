fetch("https://jsonplaceholder.typicode.com/photos")
    .then(response => response.json())
    .then(album => {
        const container = document.querySelector("#container")
        const primeiros10 = album.slice(0,10) //pega os 10 priemeiros elemntos do arry

        const cards = primeiros10.map(item => {
            return `
        <div class="card">
        
          <img src="https://placehold.co/600x400" alt=${item.title}/>
          <h2>${item.title}</h2>
        
        </div>
       `
        })
        container.innerHTML = cards.join("")
    })


