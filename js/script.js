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

