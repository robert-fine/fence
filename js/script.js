
const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');
const galleryItems = document.querySelectorAll('.gallery-item');
const toTopBtn = document.getElementById('toTopBtn');


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

toTopBtn.addEventListener('click', ()=> {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
});

window.addEventListener('scroll', ()=> {
  if (window.pageYOffset > 200) {
    // toTopBtn.classList.add('opacity-1')
    toTopBtn.classList.remove('opacity-0')
  } else if (window.pageYOffset < 125) {
    toTopBtn.classList.add('opacity-0')
  }

  console.log(window.pageYOffset)
})