const navSlide = () => {
    const ps5 = document.querySelector('.ps5');
    const nav = document.querySelector('.nv');
    const navLinks = document.querySelectorAll('.nv li');
    ps5.addEventListener('click',()=>{
        nav.classList.toggle('nav-active')
    });
    navLinks.forEach((link, index) => {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.1}s` ;
        console.log(index / 7);
    });
}

navSlide();