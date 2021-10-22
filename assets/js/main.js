/* ============ JS Modal =============== */
const buyBtns = document.querySelectorAll('.js-buy-ticket')
const modal = document.querySelector('.js-modal')
const modalContainer = document.querySelector('.js-modal-container')
const modalClose = document.querySelector('.js-modal-close')

//Ham hien thi modal mua ve (them class open vao modal)
function showBuyTickets() {
    modal.classList.add('open')
}

//Ham an modal mua ve (go bo class open cua madal)
function hideBuyTickets() {
    modal.classList.remove('open')
}
        
//Lap qua tung the button va nghe hanh vi click
for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showBuyTickets)
}

//Nghe hanh vi click vao button close
modalClose.addEventListener('click', hideBuyTickets)

modal.addEventListener('click', hideBuyTickets)

modalContainer.addEventListener('click', function (event) {
    event.stopPropagation()
})


/*============ Mobile Menu ===============*/

var header = document.getElementById('header');
var mobileMenu = document.getElementById('mobile-menu');
var headerHeight = header.clientHeight;

//Dong/ mo mobile menu
mobileMenu.onclick = function() {
    var isClosed = header.clientHeight === headerHeight;
    if (isClosed) {
        header.style.height = 'auto';
    } else {
        header.style.height = null;
    }
}

// Tu dong dong khi cho menu
var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];

    menuItem.onclick = function() {
        header.style.height = null;
    }

    // menuItem.onclick = function(event) {
    //     var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
    //     if (!isParentMenu) {
    //         event.preventDefault();
    //     } else {
    //         header.style.height = null;
    //     }
    // }
}