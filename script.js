function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.scr = 'Imagens/dia.png'
        document.body.style.background = '#fee070'

    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE
        img.scr = 'Imagens/tarde.png'
        document.body.style.background = '#dd5b03'
    } else {
        //BOA NOITE
        img.scr = 'Imagens/noite.png'
        document.body.style.background = '#0f2c4e'
    }
}

