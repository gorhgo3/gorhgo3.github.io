window.addEventListener('load', ShowBackground)

function ShowBackground() {
  const background = document.querySelector('.main-impression')
  background.style.backgroundColor = `rgb(255, 255, 255, 0.4)`
}

function typeWriter(el) {
  // el.textContent = "hello world"
  const text = el.textContent
  el.textContent = null
  let iteration = 0
  setTimeout(() => {
    const test = setInterval(() => {
      // look at the value of iteration upon each interval
      if (iteration == text.length - 1) {
        // if this value is the same as the textcontent then cancel the interval
        clearInterval(test)
      }
      // add to the current letters variable and assign currentletters to the text content
      // currentLetters += text[iteration - 1]
      iteration += 1
      el.textContent += text[iteration - 1]
    }, 75)
  }, 1000)
}

const title = document.querySelector('.main-text h1 span')
typeWriter(title)

function profileDetails() {
  const murrayWelcome = document.getElementById('hidden-impression')
  // document.querySelector('.main-impression').style.justifyContent =
  //   'space-evenly'
  murrayWelcome.style.display = 'block'

  // we should simply add extra information in the html section here and so then the details will be shown upon click.

  // murrayWelcome.style.transitionDuration = '5s'
  // murrayWelcome.style.position = 'absolute'
  // murrayWelcome.style.top = '40px'

  console.log('profile details')
}
document
  .querySelector('.main-impression')
  .addEventListener('click', profileDetails)
