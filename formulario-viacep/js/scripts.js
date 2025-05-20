const cepInput = document.querySelector("#cep")

cepInput.addEventListener("blur", () => {

    /*
    sobre a regex /\D/g
    /.../ - Delimita a expressão regular
    
    \D - É o inverso de \d, ou seja, "qualquer caracter que não seja digito"(0 a 10)
    g - É a flag global, que faz substuição ocorre em todos as ocorrências do texto.
    
    
    exemplo:
    se o usários digita 88.000-000
    A função fará '88.000-000'.replace(/\D/g,'')//
    Resultado:'8800000'
    */


    const cep = cepInput.value.replace(/\D/g, '')
    if (cep.length === 8) {
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => response.json())
            .then(data => {
                if (!data.erro) {
                    document.querySelector("#logradouro").value = data.logradouro

                    document.querySelector("#complemento").value = data.complemento

                    document.querySelector("#bairro").value = data.bairro

                    document.querySelector("#cidade").value = data.localidade

                    document.querySelector("#estado").value = data.uf
                } else {
                    console.log("Cep não encotrado!")
                }
            })
    } else {
        alert("CEP Inválido!")
    }

})