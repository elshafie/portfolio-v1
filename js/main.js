window.addEventListener('load',() => {
//swiper js

const menuBtn = document.querySelector('#menu');
const closeBtn = document.querySelector('#close');

const navBar = document.querySelector('header .container nav ul')

menuBtn.addEventListener('click', () => {
  navBar.style.display='flex';
  menuBtn.style.display='none';
  closeBtn.style.display='inline-block';
})

closeBtn.addEventListener('click', () => {
  navBar.style.display='none';
  menuBtn.style.display='inline-block';
  closeBtn.style.display='none';
})


  window.addEventListener('mousedown', (e) => {
      if ( e.clientX > 240 && e.clientY > 75 && window.innerWidth <= 768){
        navBar.style.display='none';
        menuBtn.style.display='inline-block';
        closeBtn.style.display='none';
      }
  })

  window.addEventListener('resize',() => {
    if (window.innerWidth > 768){
      navBar.style.display='flex';
      menuBtn.style.display='none';
      closeBtn.style.display='none';
    }else{
      navBar.style.display='none';
      menuBtn.style.display='inline-block';
      closeBtn.style.display='none';
    }
  })

const navItems = document.querySelectorAll('li');

const changeActiveItem = () => {
  navItems.forEach(item => {
    const link = item.querySelector('a');
    link.classList.remove('active');
  })
}

navItems.forEach(item => {
  const link = item.querySelector('a');
  link.addEventListener('click', () => {
    changeActiveItem();
    link.classList.add('active');
  })
})


// read more btn

// const readMore = document.querySelector('.read-more');
// const readMoreContent = document.querySelector('.read-more-content');

// readMore.addEventListener('click', () => {
//   readMoreContent.classList.toggle('show-content');
//   if (readMoreContent.classList.contains('show-content')){
//     readMore.textContent = "Show Less";
//   }else{
//     readMore.textContent = "Show More";
//   }
// })


//show hide skills

const skillItems = document.querySelectorAll('section.skills .container .skill');

skillItems.forEach(skill => {
  skill.querySelector('.container .skill .head').addEventListener("click", () => {
    skill.querySelector('.container .skill .items').classList.toggle('show-items')
  })
})


// add box shadow on scroll

window.addEventListener('scroll', () => {
  document.querySelector('header').classList.toggle('show-shadow',window.scrollY > 0);

  if (window.scrollY > (landing-80)){
    document.querySelector('header').style.backgroundColor='var(--color-white)';
  }else{
    document.querySelector('header').style.backgroundColor='rgba(250 250 250 / 0.8)';
  }
})


const logo = document.getElementById('logo')

logo.addEventListener('click', () => {
  changeActiveItem();
  document.querySelector('nav ul li a:nth-of-type(1)').classList.add('active');
})

let landing = document.querySelector('.landing').clientHeight;

})


