
fetch("./data.json")
  .then(res => res.json())
  .then(data => {
   
    const cardsContainer = document.getElementById('cards-container');
    cardsContainer.style.display = 'grid'
    Object.entries(data).forEach(item => {
      const cardHTML = `
        <div class="card" data-category="${item[1].category}">
          <p class="buy">buy</p>
          <img src="${item[1].src}" alt="${item[1].alt}">
          <div class="house-data">
            <p class="numbers">${item[1].street}</p>
            <p class="city">${item[1].city}, ${item[1].country}</p>
            <p class="price">€${item[1].price}</p>
            <p class="amenities">${item[1].amenities}</p>
            <iframe src="${item[1].map}" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div class="data-icons">
            <div>
              <img class="card-icon" src="/images/card-icons/bed.svg">
              <p class="subtitle">Beds</p>
              <p class="numbers">${item[1].beds}</p>
            </div>
            <div>
              <img class="card-icon" src="/images/card-icons/bath.svg">
              <p class="subtitle">Baths</p>
              <p class="numbers">${item[1].baths}</p>
            </div>
            <div>
              <img class="card-icon" src="/images/card-icons/level.svg">
              <p class="subtitle">Levels</p>
              <p class="numbers">${item[1].levels}</p>
            </div>
            <div>
              <img class="card-icon" src="/images/card-icons/square.svg">
              <p class="subtitle">Sqm</p>
              <p class="numbers">${item[1].sqm}</p>
            </div>
          </div>
        </div>
      `;
      cardsContainer.innerHTML += cardHTML;
    });

    let indicator = document.querySelector('.indicator').children
    
        let main = Array.from(cardsContainer.children)

        for (let i = 0; i < indicator.length; i++) {
            indicator[i].onclick = function () {
           
                for (let x = 0; x < indicator.length; x++) {
                    indicator[x].classList.remove('active')
                }
                indicator[i].classList.add('active')
                const displayItems = indicator[i].getAttribute('data-filter')
                for (let z = 0; z < main.length; z++) {
                    main[z].style.transform = 'scale(0)'
                    setTimeout(() => {
                        main[z].style.display = 'none'
                    }, 500)

                    if ((main[z].getAttribute('data-category') == displayItems || displayItems == 'all')) {
                    
                        main[z].style.transform = 'scale(1)'
                        setTimeout(() => {
                            main[z].style.display = 'block'
                        }, 500)
                    }
                }
            }
        }
    

})

    
