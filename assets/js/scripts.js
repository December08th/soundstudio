function handle_menu_on_scroll(){
    let lastKnownScrollPosition = 0;
    let ticking = false;
    const the_header = document.getElementById('header');
    const the_nav_ul = the_header.querySelector('#nav-items');
    const the_nav_items = the_nav_ul.querySelectorAll('a');
    const the_logo = document.getElementById('logo-svg');
    const the_logo_text = the_logo.querySelectorAll('.fil4');

    function doSomething(scrollPos) {
        if(scrollPos > 0) {
            the_header.classList.add('bg-white');
            the_nav_items.forEach(el => {
                el.classList.remove('text-white');
                el.classList.add('text-black');
            });
            the_logo_text.forEach(el => {
                el.style.fill = "black";
            });
        } else {
            the_header.classList.remove('bg-white');
            the_nav_items.forEach(el => {
                el.classList.remove('text-black');
                el.classList.add('text-white');
            });
            the_logo_text.forEach(el => {
                el.style.fill = "white";
            });
        }
    }

    document.addEventListener("scroll", (event) => {
    lastKnownScrollPosition = window.scrollY;

    if (!ticking) {
        window.requestAnimationFrame(() => {
        doSomething(lastKnownScrollPosition);
        ticking = false;
        });

        ticking = true;
    }
    });

}

handle_menu_on_scroll();