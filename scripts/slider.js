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

sliderList.map(slider => {
    let divImage = `<div class="carousel-item active">
                        <img src="${slider.image}" class="d-block" alt="..." />
                    </div>`

    imageSlider.insertAdjacentHTML('beforeend', divImage)
})