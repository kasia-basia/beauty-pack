// HIDE ARTICLE TITLES

var articleBar = document.querySelectorAll('.article-box');
articleBar.forEach(function (e) {
    var textBar = document.querySelectorAll('.article-box-bar');

    // OPACITY EASE
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
/*

var prev = document.querySelector('.banner-prev');
var next = document.querySelector('.banner-next');
var list = document.querySelectorAll('.banner-list li img');
var index = 0;

next.addEventListener('click', function (e) {

    list[index].classList.remove('active');

    index++;
    if (index > list.length - 1) {
        index = 0;
    }

    list[index].classList.add('active');
});

prev.addEventListener('click', function (e) {

    list[index].classList.remove('active');
    index--;

    if (index < 0) {
        index = list.length - 1;
    }

    list[index].classList.add('active');
});
*/


//KALKULATOR

// DROPDOWN
var dropdown = document.querySelectorAll('.drop_down_list');

dropdown.forEach(function (e) {
    e.addEventListener('click', function (element) {
        var listpanel = e.querySelector('.list_panel');

        if (listpanel.style.visibility === 'visible') {
            listpanel.style.visibility = 'hidden';
        } else {
            listpanel.style.visibility = 'visible';
        }

        element.stopPropagation();
        window.addEventListener("click", function (e) {  // zamyka listę dropdown po kliknięciu poza nią
            listpanel.style.visibility = 'hidden';
        });

    })
});

var chairPrice = {
    Margarita: 249,
    Clair: 299,
    Selena: 499,
};

var patternPrice = {
    Tkanina: 0,
    Skora: 120,
};
// POBIERANIE i przekazywanie WARTOŚCI - NAZWA, KOLOR, MATERIAŁ

var titleElement = document.querySelectorAll('.list-title li');
var title = document.querySelector('.title');
var titleValue = document.querySelector('.title.value');
var colorElement = document.querySelectorAll('.list-color li');
var color = document.querySelector('.color');
var pattern = document.querySelector('.pattern');
var patternElement = document.querySelectorAll('.list-pattern li');
var patternValue = document.querySelector('.pattern.value');

// NAZWA
titleElement.forEach(function (e) {
    e.addEventListener('click', function (element) {
        var value = e.innerHTML;
        var span = document.querySelector('.list-title > span');
        title.innerText = value;
        span.innerText = value;

        switch (value) {
            case 'Margarita':
                titleValue.innerText = chairPrice.Margarita;
                break;
            case 'Clair':
                titleValue.innerText = chairPrice.Clair;
                break;
            case 'Selena':
                titleValue.innerText = chairPrice.Selena;
                break;
        }
        updateSum();
    });
});

// KOLOR
colorElement.forEach(function (e) {
    e.addEventListener('click', function (element) {
        var span = document.querySelector('.list-color > span');
        var value = e.innerHTML;
        color.innerText = value;
        span.innerText = value;
        updateSum();

    });
});

// MATERIAŁ
patternElement.forEach(function (e) {
    e.addEventListener('click', function (element) {
        var span = document.querySelector('.list-pattern > span');
        var value = e.innerHTML;
        pattern.innerText = value;
        span.innerText = value;

        switch (value) {
            case 'Tkanina':
                patternValue.innerText = patternPrice.Tkanina;
                break;
            case 'Skóra':
                patternValue.innerText = patternPrice.Skora;
                break;
        }
        updateSum();
    })
});

// TRANSPORT CHECKBOX
var transport = document.getElementById('transport');
var transportValue = document.querySelector('.transport.value');
var transportPrice = 40;

transport.addEventListener('click', function (e) {
    var span = document.querySelector('span.transport');

    if (transport.checked === true){
        transportValue.innerHTML = transportPrice;
        span.innerText = 'Transport';
    } else {
        transportValue.innerHTML = '';
        span.innerText = '';
    }
    updateSum()
});

// SUMA

function updateSum() {
    var titleSum = document.querySelector('.title.value').innerText || 0;
    var patternSum = document.querySelector('.pattern.value').innerText || 0;
    var transportSum = document.querySelector('.transport.value').innerText || 0
    var sumDisplay = document.querySelector('.sum strong');
    console.log(sumDisplay);
    // var colorSum = document.querySelector('.color.value').innerText ;
    var sumValue = 0;
    sumValue = parseInt(titleSum) + parseInt(patternSum) + parseInt(transportSum);
    sumDisplay.innerText = sumValue;
}




