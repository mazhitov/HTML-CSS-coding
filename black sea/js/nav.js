function navToggle() {
    let navBtn = document.getElementById('navBtn');
    let mainNav = document.getElementById('mainNav');
    let heightNav = mainNav.firstElementChild.offsetHeight;
    
    navBtn.onclick = function () {
      if (mainNav.classList.contains('nav-hidden')) {
        mainNav.classList.remove('nav-hidden');
        mainNav.style.height = heightNav + 'px';
      } else {
        mainNav.classList.add('nav-hidden');
        mainNav.style.height = 0;
      }
    }
  }
 
  navToggle();