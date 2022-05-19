
const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')
const quote = document.getElementById('quote-form')
const quoteBtns = document.querySelectorAll('.get-quote')
const quoteCloseBtn = document.getElementById('close-quote')


btn.addEventListener('click', () => {
  btn.classList.toggle('open')
  nav.classList.toggle('flex')
  nav.classList.toggle('hidden')
})

quoteBtns.forEach(btn => {
  btn.addEventListener('click', toggleQuoteForm)
})

quoteCloseBtn.addEventListener('click', toggleQuoteForm)

function toggleQuoteForm() {
  quote.classList.toggle('sr-only')
}