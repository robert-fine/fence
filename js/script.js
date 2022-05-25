
const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');
const galleryItems = document.querySelectorAll('.gallery-item');


btn.addEventListener('click', () => {
  btn.classList.toggle('open')
  nav.classList.toggle('flex')
  nav.classList.toggle('hidden')
})

galleryItems.forEach(item => {
  item.addEventListener('click', () => {
    removeMainTag()
    item.classList.add('gallery-item-main')
  })
})

function removeMainTag() {
  galleryItems.forEach(item => {
    item.classList.remove('gallery-item-main')
  })
}