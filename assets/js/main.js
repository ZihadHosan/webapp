


window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  if (window.scrollY >= 200) {
      header.classList.add('sticky-scroll');
  } else {
      header.classList.remove('sticky-scroll');
  }
});




const button = document.querySelector('.b2t-btn');

const displayButton = () => {
  window.addEventListener('scroll', () => {
    console.log(window.scrollY);
  
    if (window.scrollY > 100) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  });
};

const scrollToTop = () => {
  button.addEventListener("click", () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    }); 
    console.log(event);
  });
};

displayButton();
scrollToTop();