

// =========  HIDE ARTICLE TITLES =========== //

var articleBar = document.querySelectorAll('.article-box');
articleBar.forEach(function (e) {
    var textBar = document.querySelectorAll('.article-box-bar');

    // OPACITY EASE VARIANT
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



// =========  KALKULATOR =========== //

// =========  DROPDOWN =========== //
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

var planPrice = {
    Basic: 48.99,
    Perfect: 39.99,
    Expert: 34.99,
};

var subscriptionPrice = {
    single: 0,
    sixMonths: 10.00,
    twelveMonths : 33.00,
};

var deliveryPrice = {
    Regular: 0,
    Express: 9.99,
};

// POBIERANIE i przekazywanie WARTOŚCI - NAZWA, KOLOR, MATERIAŁ

var planElement = document.querySelectorAll('.list-plan li');
var plan = document.querySelector('.plan');
var planValue = document.querySelector('.plan.value');
var subscriptionElement = document.querySelectorAll('.list-subscription li');
var subscription = document.querySelector('.subscription');
var subscriptionValue = document.querySelector('.subscription.value');
var delivery = document.querySelector('.delivery');
var deliveryElement = document.querySelectorAll('.list-delivery li');
var deliveryValue = document.querySelector('.delivery.value');

/// =========  PLAN =========== //
planElement.forEach(function (e) {
    e.addEventListener('click', function (element) {
        var value = e.innerHTML;
        var span = document.querySelector('.list-plan > span');
        plan.innerText = value;
        span.innerText = value;

        switch (value) {
            case 'Basic':
                planValue.innerText = planPrice.Basic;
                break;
            case 'Perfect':
                planValue.innerText = planPrice.Perfect;
                break;
            case 'Expert':
                planValue.innerText = planPrice.Expert;
                break;
        }
        updateSum();
    });
});

// =========  SUBSCRIPTION =========== //
subscriptionElement.forEach(function (e) {
    e.addEventListener('click', function (element) {
        var span = document.querySelector('.list-subscription > span');
        var value = e.innerHTML;
        subscription.innerText = value;
        span.innerText = value;

        switch (value) {
            case 'Single purchase':
                subscriptionValue.innerText = subscriptionPrice.single;
                break;
            case '6 months':
                subscriptionValue.innerText = subscriptionPrice.sixMonths;
                break;
            case '12 months':
                subscriptionValue.innerText = subscriptionPrice.twelveMonths;
                break;
        }
        updateSum();
    });
});

// =========  DELIVERY =========== //
deliveryElement.forEach(function (e) {
    e.addEventListener('click', function (element) {
        var span = document.querySelector('.list-delivery > span');
        var value = e.innerHTML;
        delivery.innerText = value;
        span.innerText = value;

        switch (value) {
            case 'Regular':
                deliveryValue.innerText = deliveryPrice.Regular;
                break;
            case 'Express':
                deliveryValue.innerText = deliveryPrice.Express;
                break;
        }
        updateSum();
    })
});

// =========  GIFT WRAP =========== //
var gift = document.getElementById('gift');
var giftValue = document.querySelector('.gift.value');
var giftPrice = 10;

gift.addEventListener('click', function (e) {
    var span = document.querySelector('span.gift');

    if (gift.checked === true){
        giftValue.innerHTML = giftPrice;
        span.innerText = 'Gift wrapping';
    } else {
        giftValue.innerHTML = '';
        span.innerText = '';
    }
    updateSum()
});

// =========  SUM =========== //

function updateSum() {
    var planSum = document.querySelector('.plan.value').innerText || 0;
    var deliverySum = document.querySelector('.delivery.value').innerText || 0;
    var subscriptionSum = document.querySelector('.subscription.value').innerText || 0;
    var sumDisplay = document.querySelector('.sum strong');
    sumDisplay.innerText =(Number(planSum)+ Number(deliverySum) + Number(subscriptionSum)).toFixed(2);
}




