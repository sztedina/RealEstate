fetch("./data.json")
    .then(response => response.json())
    .then(data => {
            const track = document.getElementById("carousel_track")
            const dotsNav = document.getElementById("carousel__nav")
            data.forEach((house) => {
                const slideEL = 
                    `
                <li class="carousel__slide">
                            <img class="carousel__image" src="${house.src}" alt="${house.alt}">
                </li>
                `
                const dotsEl = 
                `
                <button class="carousel__indicator"></button>
                `
                track.innerHTML += slideEL
                Array.from(track.children)[0].classList.add("current-slide")
                
                dotsNav.innerHTML += dotsEl
                Array.from(dotsNav.children)[0].classList.add("current-slide")
              })
              
              const slides = Array.from(track.children)
              const nextButton = document.querySelector('.carousel__button--right')
              const prevButton = document.querySelector('.carousel__button--left')
              const dots = Array.from(dotsNav.children)
              const slideWidth = slides[0].getBoundingClientRect().width 
              
              //Arranging slides next to each other
              const setSlidePosition = (slide, index) => slide.style.left = slideWidth * index + 'px'
              slides.forEach(setSlidePosition)
              
              const moveToSLide = (track, currentSlide, targetSlide) => {
                  track.style.transform = 'translateX(-' + targetSlide.style.left + ')'
                  currentSlide.classList.remove('current-slide')
                  targetSlide.classList.add('current-slide')
              }
              
              const updateDots = (currentDot, targetDot) => {
                    targetDot.classList.add('current-slide')
                    currentDot.classList.remove('current-slide')
              }
              
              const addHideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
                  if (targetIndex === 0) {
                      prevButton.classList.add('is-hidden')
                      nextButton.classList.remove('is-hidden')
                  } else if (targetIndex === slides.length -1) {
                      prevButton.classList.remove('is-hidden')
                      nextButton.classList.add('is-hidden')
                  } else {
                      prevButton.classList.remove('is-hidden')
                      nextButton.classList.remove('is-hidden')
                  }
              }
              
              //Clicking left, moves slides to the left
              
              prevButton.addEventListener("click", () => {
                  
                  const currentSlide = track.querySelector('.current-slide')
                  const prevSlide = currentSlide.previousElementSibling
                  const currentDot = dotsNav.querySelector('.current-slide')
                  const prevDot = currentDot.previousElementSibling
                  const prevIndex = slides.findIndex(slide => slide === prevSlide)
                  moveToSLide(track, currentSlide, prevSlide)
                  updateDots(currentDot, prevDot)
                  addHideShowArrows(slides, prevButton, nextButton, prevIndex)
              })
              
              //Clicking right, moves slides to the right
              
              nextButton.addEventListener("click", () => {
                  const currentSlide = track.querySelector('.current-slide')
                  const nextSlide = currentSlide.nextElementSibling
                  const currentDot = dotsNav.querySelector('.current-slide')
                  const nextDot = currentDot.nextElementSibling
                  const nextIndex = slides.findIndex(slide => slide === nextSlide)
                  moveToSLide(track, currentSlide, nextSlide)
                  updateDots(currentDot, nextDot)
                  addHideShowArrows(slides, prevButton, nextButton, nextIndex)
              })
              
              //Clicking the nav indicator, moves slides
              
              dotsNav.addEventListener('click', e => {
                  const targetDot = e.target.closest('button')
              
                  if (!targetDot) return
              
                  const currentSlide = track.querySelector('.current-slide')
                  const currentDot = dotsNav.querySelector('.current-slide')
                  const targetIndex = dots.findIndex(dot => dot === targetDot)
                  const targetSlide = slides[targetIndex]
                  moveToSLide(track, currentSlide, targetSlide)
                  updateDots(currentDot, targetDot)
                  addHideShowArrows(slides, prevButton, nextButton, targetIndex)
              })
    })






