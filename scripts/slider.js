var sliderList = [{
        image: './imgs/carousel.png'
    },
    {
        image: '/imgs/carousel.png'
    },
    {
        image: '/imgs/carousel.png'
    }
]

const imageSlider = document.querySelector('.carousel-inner')

sliderList.map((slider, i) => {
    let divImage = `<div key="${i}" class="carousel-item active">
                        <img src="${slider.image}" class="d-block" alt="..." />
                    </div>`

    imageSlider.insertAdjacentHTML('beforeend', divImage)
})