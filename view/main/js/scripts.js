
function burgerMenu(){
   let menu = document.querySelector(".burger_menu__container");
    // console.log(menu);
    let button = document.querySelector('.burger_menu__button');
    let links = document.querySelectorAll('.burger_menu__link');
    let overlay = document.querySelector('.burger_menu__overlay');
    let bodyList = document.getElementsByTagName('body');
    let body = bodyList[0];
    // console.log(overlay);
    button.onclick = function(e){
        toggleMenu();
    }

    links.forEach(function (item) {
        item.onclick = function(e){
            toggleMenu();
        }
    });

    overlay.onclick = function(e){
        toggleMenu();
    }

    function toggleMenu(){
        if(menu.classList.contains('burger_menu__active')){
            menu.classList.remove('burger_menu__active');
        }else{
            menu.classList.add('burger_menu__active');
        }
        if(menu.classList.contains("burger_menu__active")){
            body.style.overflow = 'hidden';
        }else{
            body.style.overflow = 'visible';
        }
    }

}

burgerMenu();