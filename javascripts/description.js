const imageUrls = [
  '/images/hero.png',
  '/images/hero2.png',
  '/images/hero3.png',
  '/images/hero4.png',
  '/images/hero5.png'
]

const images = imageUrls.map(url => {
  const img = new Image()
  img.src = url
  return img
});

let index = 1;

setInterval (()=>{
  document.querySelector('.description').style.backgroundImage = `url(${images[index].src})`;
  index = index >= images.length-1 ? 0 : index + 1;
}, 5000)