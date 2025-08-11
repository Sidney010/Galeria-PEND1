'use strict'
function criarImagem(frutas){
    const galeria = document.getElementById('galeria')
    const container = document.createElement('div')
    const img = document.createElement('img')
    const nome = document.createElement('p')

    img.src = frutas.url
    img.alt = frutas.nome
    nome.textContent = frutas.nome
    nome.classList.add('nome')

    container.appendChild(img)
    container.appendChild(nome)
    galeria.appendChild(container)
}



function carregarImagens() {
    const frutas = [
  {
    nome: 'Açai',
    url: "./Img/Acai.jpg",
  },
  {
    nome: 'Acerola',
    url: "./Img/Acerola.webp",
  },
  {
    nome: 'Amora',
    url: "./Img/Amora.webp",
  },
  {
    nome: 'Carambola',
    url: "./Img/Carambola.webp",
  },
  {
    nome: 'Cereja',
    url: "./Img/Cereja.webp",
  },
  {
    nome: 'Kiwi',
    url: "./Img/Kiwi.webp",
  },
  {
    nome: 'Maçã',
    url: "./Img/Maca.webp",
  },
  {
    nome: 'Mamão Papaia',
    url: "./Img/Mamao-Papaia.webp",
  },
  {
    nome: 'Manga',
    url: "./Img/Manga.jpg",
  },
  {
    nome: 'Melancia',
    url: "./Img/Melancia.jpeg",
  },
  {
    nome: 'Morango',
    url: "./Img/Morango.webp",
  }
]

    frutas.forEach(criarImagem)
}
carregarImagens()