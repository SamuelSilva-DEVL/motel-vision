var cortesias = [{
        image: '/imgs/img 1.png',
        title: 'Café da Manhã',
        subTitle: 'Servido todos os dias entre 6h e 10h, somente para o pernoite.'
    },
    {
        image: '/imgs/img 2.png',
        title: 'Especial para Aniversariantes',
        subTitle: 'A equipe do Vison Motel quer tornar o seu aniversário ainda mais especial!'
    },
    {
        image: '/imgs/img 3.png',
        title: 'Descontos',
        subTitle: 'Economize se hospedando com desconto no Motel Vison!'
    }
]

const cardCortesia = document.querySelector('.cardsCortesias')

cortesias.map(cortesia => {
    let card = `<div class="card cortesia" > 
                    <img src="${cortesia.image}" alt="image-slider" class="card-img-top"/>
                    <div class="card-body d-flex flex-column align-content-center justify-content-center">
                        <h5 class="card-title text-center">${cortesia.title}</h5>
                        <p class="card-text text-center">
                            ${cortesia.subTitle}
                        </p>
                    </div>
                </div>`
    cardCortesia.insertAdjacentHTML('beforeend', card)
})