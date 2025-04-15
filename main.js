'use strict'

const todaTela = document.getElementById('tela')

async function listarContatos(){
    const url =  'http://localhost:8080/v1/whatsapp/contatos/11987876567'

    //Fetch conversa com o back - faz requisições
    const response = await fetch(url)
    const data = await response.json()
    return data
}

function criarContato(link){
    //Barra lateral
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

    const botao = document.getElementById('botao')

    

    contato.appendChild(divImg)
    contato.appendChild(divNome)
    contato.appendChild(botao)

    todaTela.appendChild(contato)
}

async function mostrarConversas(){
    const url =  'http://localhost:8080/v1/whatsapp/coversas/11987876567'

    //Fetch conversa com o back - faz requisições
    const response = await fetch(url)
    const data = await response.json()
    return data
}

function criarMenssagens(link){
     
    const divConversa = document.createElement('div')
    divConversa.classList = 'conversa'

    const conversa = document.createElement('p')
    conversa.textContent = link.conversa

    divConversa.appendChild(conversa)
}

async function preencher(){
    const contatos = await listarContatos()
    const tela = document.getElementById('tela')
    tela.replaceChildren('')

    contatos.forEach (criarContato)
}

preencher()

async function preencherMensagens(){
    const conversas = await mostrarConversas()
    const tela = document.getElementById('tela')
    tela.replaceChildren('')

    conversas.forEach(criarMenssagens)
}

document.getElementById('botao').addEventListener('click', preencherMensagens)