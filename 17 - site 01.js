
function carregar() {
    var msg = window.document.querySelector('div#msg')
    var img = window.document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 5 && hora < 12) {
        img.src = 'manha.png'
        document.body.style.background = '#c8a18c'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'tarde.png'
        document.body.style.background = '#d7a671'
    } else {
        img.src = 'noite.png'
        document.body.style.background = '#475b83'
    }
    
}

