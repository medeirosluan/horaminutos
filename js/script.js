const frm = document.querySelector('form')
const resp = document.querySelector('h3')


frm.addEventListener('submit',(e) =>{
    const entrada  = Number(frm.entrada.value)
    const selecao = frm.minutos.checked

    let duracao
    if (selecao) {
         duracao = entrada / 60
        resp.innerText = `${duracao} Horas`
    } else {
        duracao = entrada * 60
        resp.innerText = `${duracao} Minutos`
    }


    frm.addEventListener('reset',() =>{
        resp.innerText = ''
    })



    e.preventDefault()
})

