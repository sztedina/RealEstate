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
                <img class="card-icon" src="./images/card-icons/bed.svg">
                <p class="subtitle">Beds</p>
                <p class="numbers">${item[1].beds}</p>
              </div>
              <div>
                <img class="card-icon" src="./images/card-icons/bath.svg">
                <p class="subtitle">Baths</p>
                <p class="numbers">${item[1].baths}</p>
              </div>
              <div>
                <img class="card-icon" src="./images/card-icons/level.svg">
                <p class="subtitle">Levels</p>
                <p class="numbers">${item[1].levels}</p>
              </div>
              <div>
                <img class="card-icon" src="./images/card-icons/square.svg">
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
  