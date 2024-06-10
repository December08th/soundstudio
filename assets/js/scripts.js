function handle_menu_on_scroll(){
    let lastKnownScrollPosition = 0;
    let ticking = false;
    const the_header = document.getElementById('header');
    const the_nav_ul = the_header.querySelector('#nav-items');
    const the_nav_items = the_nav_ul.querySelectorAll('a');
    const the_logo = document.getElementById('logo-svg');
    const the_logo_text = the_logo.querySelectorAll('.fil4');

    function handle_scroll(scrollPos) {
        if(scrollPos > 0) {
            the_header.classList.add('bg-white', 'shadow-lg', 'shadow-darkgray');
            the_nav_items.forEach(el => {
                el.classList.remove('lg:text-white', 'before:bg-white');
                el.classList.add('text-copy', 'before:bg-copy');
            });
            the_logo_text.forEach(el => {
                el.style.fill = "black";
            });
        } else {
            the_header.classList.remove('bg-white', 'shadow-lg', 'shadow-darkgray');
            if(the_header.classList.contains('header--home')) {
                the_nav_items.forEach(el => {
                    el.classList.remove('text-copy', 'before:bg-copy');
                    el.classList.add('lg:text-white', 'before:bg-white');
                });
                the_logo_text.forEach(el => {
                    el.style.fill = "white";
                });
            }
        }
    }

    document.addEventListener("scroll", (event) => {
    lastKnownScrollPosition = window.scrollY;

    if (!ticking) {
        window.requestAnimationFrame(() => {
            handle_scroll(lastKnownScrollPosition);
            ticking = false;
        });

        ticking = true;
    }
    });

}

function handle_mobile_menu() {
    const menu_btn = document.getElementById('menu-btn');
    const the_nav = document.getElementById('nav');
    menu_btn.addEventListener('click', () => {
        the_nav.slideToggle();
        menu_btn.classList.toggle('active');
    });
}

handle_menu_on_scroll();
handle_mobile_menu();

