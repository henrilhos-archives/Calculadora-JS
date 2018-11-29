const buttons = [
  {
    name: 'Somar',
    icon: 'fas fa-plus',
    id: 'addition'
  }, {
    name: 'Diminuir',
    icon: 'fas fa-minus',
    id: 'subtraction'
  }, {
    name: 'Multiplicar',
    icon: 'fas fa-times',
    id: 'multiplication'
  }, {
    name: 'Dividir',
    icon: 'fas fa-divide',
    id: 'division'
  }, {
    name: 'Exponenciar',
    icon: 'fas fa-superscript',
    id: 'exponentiation'
  }
]

const buttonComponent = (buttons) => {
  return buttons.map((button) => {
    return (
      `
      <button onclick="calculate(${button.id})" id="${button.id}"
        class="btn col btn-outline-primary mx-2"
        data-toggle="tooltip" data-placement="top" title="${button.name}"
      ><i class="${button.icon}"></i></button>
      `
    )
  }).join('')
}

const buttonElement = document.querySelector('[button-list]')

buttonElement.innerHTML = buttonComponent(buttons)