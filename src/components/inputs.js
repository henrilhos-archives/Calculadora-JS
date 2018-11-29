const inputs = [
  {
    name: 'Primeiro valor',
    id: 'valueA'
  }, {
    name: 'Segundo valor',
    id: 'valueB'
  }
]

const inputComponent = (inputs) => {
  return inputs.map((input) => {
    return (
      `
      <div class="input-group mb-3 col">
        <div class="input-group-prepend">
          <span class="input-group-text">${input.name}</span>
        </div>
        <input id="${input.id}" type="number" class="form-control">
      </div>
      `
    )
  }).join('')
}

const inputElement = document.querySelector('[input-list]')

inputElement.innerHTML = inputComponent(inputs)