/* Rendering cards */
const cardsContainer = document.getElementById("cards-container")
const list = document.createDocumentFragment();
/* let cards = ""*/
let houses = {}


/* fetch("./data.json")
    .then(res => res.json())
    .then(data => {
        

        Object.entries(data).map(item => {
            let cardEl = document.createElement('div')
            cardEl.classList.add('card')

            let buyParagraph = document.createElement('p')
            buyParagraph.innerText = 'buy'
            buyParagraph.classList.add('buy')
            cardEl.appendChild(buyParagraph)

            let im = document.createElement('img')
            im.src = `${item[1].src}`
            im.alt = `${item[1].alt}`
            cardEl.appendChild(im)

            let houseDivEl = document.createElement('div')
            houseDivEl.classList.add('house-data')



            list.appendChild(cardEl)
    })

}) */

/* cardsContainer.appendChild(list) */


   /*  cardsContainer.innerHTML += `<div class="card">
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
                            <p class="subtitle">Sqft</p>
                            <p class="numbers">${item[1].sqm}</p>
                        </div>
                    </div>
                </div>` */

        /* cardsContainer.innerHTML += `<div class="card">
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
                            <p class="subtitle">Sqft</p>
                            <p class="numbers">${item[1].sqm}</p>
                        </div>
                    </div>
                </div>` */
    
/* fetch("./data.json")
    .then(res => res.json())
    .then(data => Object.entries(data).map(item => {
        cardsContainer.innerHTML += `<div class="card">
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
                            <p class="subtitle">Sqft</p>
                            <p class="numbers">${item[1].sqm}</p>
                        </div>
                    </div>
                </div>`
    })) 


  
    
/* Pagination */

/* const cardsPerPage = 10;  
const dataContainer = document.getElementById('cards-container'); 
const pagination = document.getElementById('pagination'); 
const prevButton = document.getElementById('prev'); 
const nextButton = document.getElementById('next'); 
const pageNumbers = document.getElementById('page-numbers'); 
const pageLinks = document.querySelectorAll('.page-link'); 

const cards = 
	Array.from(document.querySelectorAll('.card')); 
    console.log(cards.length)

// Calculate the total number of pages 
const totalPages = Math.ceil(cards.length / cardsPerPage); 
let currentPage = 1; 

// Function to display cards for a specific page 
function displayPage(page) { 
	const startIndex = (page - 1) * cardsPerPage; 
	const endIndex = startIndex + cardsPerPage; 
	cards.forEach((card, index) => { 
		if (index >= startIndex && index < endIndex) { 
			card.style.display = 'block'; 
		} else { 
			card.style.display = 'none'; 
		} 
	}); 
}  

// Function to update pagination buttons and page numbers 
function updatePagination() { 
	pageNumbers.textContent = 
		`Page ${currentPage} of ${totalPages}`; 
	prevButton.disabled = currentPage === 1; 
	nextButton.disabled = currentPage === totalPages; 
	pageLinks.forEach((link) => { 
		const page = parseInt(link.getAttribute('data-page')); 
		link.classList.toggle('active', page === currentPage); 
	}); 
} 

// Event listener for "Previous" button 
prevButton.addEventListener('click', () => { 
	if (currentPage > 1) { 
		currentPage--; 
		displayPage(currentPage); 
		updatePagination(); 
	} 
}); 

// Event listener for "Next" button 
nextButton.addEventListener('click', () => { 
	if (currentPage < totalPages) { 
		currentPage++; 
		displayPage(currentPage); 
		updatePagination(); 
	} 
}); 

// Event listener for page number buttons 
pageLinks.forEach((link) => { 
	link.addEventListener('click', (e) => { 
		e.preventDefault(); 
		const page = parseInt(link.getAttribute('data-page')); 
		if (page !== currentPage) { 
			currentPage = page; 
			displayPage(currentPage); 
			updatePagination(); 
		} 
	}); 
}); 

// Initial page load 
displayPage(currentPage); 
updatePagination(); */


    // Fetch the data from the JSON file
fetch("./data.json")
  .then(res => res.json())
  .then(data => {
    // Create the cards dynamically from the fetched data
    const cardsContainer = document.getElementById('cards-container');
    cardsContainer.style.display = 'grid'
    Object.entries(data).forEach(item => {
      const cardHTML = `
        <div class="card">
          <p class="buy">buy</p>
          <img loading="lazy" class="img-house" src="${item[1].src}" alt="${item[1].alt}">
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

    // Once data is loaded and cards are created, initialize pagination
    const cards = Array.from(document.querySelectorAll('.card'));
    const cardsPerPage = 10;
    const totalPages = Math.ceil(cards.length / cardsPerPage);
    let currentPage = 1;

    // Select the elements for pagination
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const pageNumbers = document.getElementById('page-numbers');
    const pagination = document.getElementById('pagination');

    // Function to display cards for a specific page
    function displayPage(page) {
      const startIndex = (page - 1) * cardsPerPage;
      const endIndex = startIndex + cardsPerPage;
      cards.forEach((card, index) => {
        if (index >= startIndex && index < endIndex) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    }

    // Function to update pagination buttons and page numbers
    function updatePagination() {
      pageNumbers.textContent = `Page ${currentPage} of ${totalPages}`;
      prevButton.disabled = currentPage === 1;
      nextButton.disabled = currentPage === totalPages;

      // Dynamically generate page links
      pagination.innerHTML = '';
      for (let i = 1; i <= totalPages; i++) {
        const pageLink = document.createElement('a');
        pageLink.href = '#';
        pageLink.textContent = i;
        pageLink.classList.add('page-link');
        pageLink.setAttribute('data-page', i);
        pageLink.addEventListener('click', (e) => {
          e.preventDefault();
          const page = parseInt(e.target.getAttribute('data-page'));
          if (page !== currentPage) {
            currentPage = page;
            displayPage(currentPage);
            updatePagination();
          }
        });
        pagination.appendChild(pageLink);
      }
    }

    

    // Initial page load
    displayPage(currentPage);
    updatePagination();
  });
