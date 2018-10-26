// HIDE ARTICLE TITLES

var articleBar = document.querySelectorAll('.article-box');
articleBar.forEach(function (e) {
    var textBar = document.querySelectorAll('.article-box-bar');

    // TRANSITION EASE
    /*e.addEventListener('mouseenter', function (element) {
        var bar = e.querySelector('.article-box-bar');
        bar.classList.add('hide');
    })

    e.addEventListener('mouseleave', function (element) {
        var bar = e.querySelector('.article-box-bar');
        bar.classList.remove('hide');
    })*/

    // SLIDE DOWN
    e.addEventListener('mouseenter', function (element) {
        var bar = e.querySelector('.article-box-bar');
        bar.style.bottom = '-100%';
    });

    e.addEventListener('mouseleave', function (element) {
        var bar = e.querySelector('.article-box-bar');
        bar.style.bottom = '20px';
    })

});

// SLIDER

var prev = document.querySelector('.banner-prev');
var next = document.querySelector('.banner-next');


// DROPDOWN MENU

var dropdown = document.querySelectorAll('.drop_down_list');

dropdown.forEach(function (e) {
   e.addEventListener('click', function (element) {
       var listpanel = e.querySelector('.list_panel');
       var titleElement = document.querySelectorAll('.list-title li');

       listpanel.style.visibility = 'visible';
       element.stopPropagation();

       window.addEventListener("click", function (element) {  // zamyka listę dropdown po kliknięciu poza nią
           listpanel.style.visibility = 'hidden';
       });

       titleElement.forEach(function (e) {
           e.addEventListener('click',function (element) {
               value = e.innerHTML;
               var title = document.querySelector('.title');
               title.innerText = value;
           })
       });

   })
});


// POBIERANIE WARTOŚCI - NAZWA FOTELA, KOLOR, MATERIAŁ



var patternElement = document.querySelectorAll('.list-pattern li');

patternElement.forEach(function (e) {
    e.addEventListener('click',function (element) {

        value = e.innerHTML;
        var pattern = document.querySelector('.pattern');
        pattern.innerText = value;
    })
});

var colorElement = document.querySelectorAll('.list-color li');
colorElement.forEach(function (e) {
    e.addEventListener('click',function (element) {
        value = e.innerHTML;
        var color = document.querySelector('.color');
        color.innerText = value;
    })
});


