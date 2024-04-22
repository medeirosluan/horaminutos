const frm = document.querySelector('form')
const resp = document.querySelector('h3')


frm.addEventListener('submit',(e) =>{
    const numero  = Number(frm.inEntrada.value)
    const numero1 = Number(frm.inEntrada1.value)
    const opcao = frm.inSoma.checked
    
    let resultado

    if (opcao) {
        resultado = numero + numero1
        resp.innerText = `A soma entre ${numero} e ${numero1} = ${resultado}`
    } 
    
    else{
        resultado = numero * numero1
        resp.innerText = `A Multiplicação entre ${numero} e ${numero1} = ${resultado}`
       
    }

    frm.addEventListener('reset',() =>{
        resp.innerText = ''
    })
    
    e.preventDefault()



})

