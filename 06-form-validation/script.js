const isValidEmail = (email) => {
    const regex =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return regex.test(String(email).toLowerCase())
}

const isValidCPF = (cpf) => {
    const regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/
    return regex.test(String(cpf).toLowerCase())
}

const form = document.querySelector('form')
const inputName = document.querySelector('input[name="name"]')
const inputEmail = document.querySelector('input[name="email"]')
const message = document.querySelector('.message')

let isValidForm = false

const resetInput = (elem) => {
    elem.classList.remove('invalid')
    elem.nextElementSibling.classList.add('hidden')
}

const validateInput = () => {
    isValidForm = true
    if (!inputName.value) {
        inputName.classList.add('invalid')
        inputName.nextElementSibling.classList.remove('hidden')
        isValidForm = false
    }

    if (!isValidEmail(inputEmail.value)) {
        inputEmail.classList.add('invalid')
        inputEmail.nextElementSibling.classList.remove('hidden')
        isValidForm = false
    }

}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    validateInput()

    if (isValidForm) {
        // Post to backend
        form.remove()
        message.classList.remove('hidden')
        console.log('Validou e enviou')
    }
})

inputName.addEventListener('input', () => {
    resetInput(inputName)
})

inputEmail.addEventListener('input', () => {
    resetInput(inputEmail)
})