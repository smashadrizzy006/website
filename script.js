// Select the icon element
let icon = document.querySelector('.navbar-icon');

// Toggle the icon's visibility based on the scroll position
window.onscroll = () => {
    // Toggle the 'sticky' class on the header based on the scroll position
    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Toggle the 'visible' class on the icon based on the scroll position
    icon.classList.toggle('visible', window.scrollY < 100);
}