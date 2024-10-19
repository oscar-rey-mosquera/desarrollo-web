const $ = (selector) => document.querySelector(selector)
const $$ = (selector) => document.querySelectorAll(selector)


const resetText = (text) => { 
    text = text.replaceAll('x', '*')

    text = text.replaceAll('÷', '/')

    text = text.replaceAll('%', '/100')
    return text
}


$$('.calculable').forEach((calculable) => {
    calculable.addEventListener('click', (e) => {
         const input = $('.input')
         
    const value = e.target.getAttribute('value')
         
         const text = input.value + value

         input.value = text

    })
})


$('.btn-clean').addEventListener('click', () => {
    const input = $('.input')

    let text = input.value

    if(text.length > 0) text = text.slice(0, -1)

    input.value = text
})


$('.clear').addEventListener('click', () => {
    const input = $('.input')

    input.value = ''

})


$('.btn-equal').addEventListener('click', () => {
    const input = $('.input')

    if(input.value === '') return

    const text = resetText(input.value)

    try {
        
        input.value = eval(text)
    } catch (error) {
        input.value = 'Error'
    }
  
 })
