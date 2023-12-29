function saveHouse() {
    //valores colocados em variáveis:
    let area = document.querySelector("input[name='area']").value
    let number = document.querySelector("input[name='number']").value
    let neighborhood = document.querySelector("input[name='neighborhood']").value
    let city = document.querySelector("input[name='city']").value
    //criando o <li> e adicionando um texto com .innerText
    let newListValue = document.createElement("li")
    newListValue.innerText = area + "m², na " + number + "( " + neighborhood + " - " + city + ")"

    let removeButton = document.createElement("button")
    removeButton.type = "button"
    removeButton.innerText = "Remover"
    removeButton.setAttribute("onclick", "removeHouse(this)")
    //cria se no HTML isso: <button type="button" onclick="removeHouse(this)"> Remover </button>
    //adicionando o botao dentro do <li>:
    //adiciono um filho a newListValue com o nome removeButton:
    newListValue.appendChild(removeButton)
    //só que esses elementos nao estao na minha arvore do DOM.
    //e para poder acrescentar, chamaremos um elemento que sabemos que esta no DOM (house-list) e add newListValue
    document.getElementById("house-list").appendChild(newListValue)
}

function removeHouse(button) {
    let litoRemove = button.parentNode
    document.getElementById("house-list").removeChild(litoRemove) // removo o elemento li de dentro de house-list

}