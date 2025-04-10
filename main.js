'use strict'

async function listarContatos(){
    const url =  'http://localhost:8080/v1/whatsapp/contatos/11987876567'

    //Fetch conversa com o back - faz requisições
    const response = await fetch(url)
    const data = await response.json()
    return data
}

function criarContato(link){
    const todaTela = document.getElementById('tela')
    todaTela.classList = 'todaTela'
    
    const contato = document.createElement('div')
    contato.classList = 'contato'
    
    const divNome = document.createElement('div')
    const nomeContato = document.createElement('h1')
    
    const divImg = document.createElement('div')
    const imgPerfil = document.createElement('img')
    
    imgPerfil.src = './imgs/perfil.png'

    divImg.appendChild(imgPerfil)
    divImg.classList = 'divImg'

    nomeContato.textContent = link.contato
    
    divNome.appendChild(nomeContato)
    divNome.classList = 'divNome'
    

    contato.appendChild(divImg)
    contato.appendChild(divNome)

    todaTela.appendChild(contato)
}

async function preencher(){
    const fotos = await listarContatos()
    const tela = document.getElementById('tela')
    tela.replaceChildren('')

    fotos.forEach (criarContato)
}

preencher()