(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _slider = require("./js/slider");

var _hideArticleTitles = require("./js/hideArticleTitles");

var _kalkulator = require("./js/kalkulator");

document.addEventListener("DOMContentLoaded", function (event) {
    new _slider.Slider('.banner');
    new _hideArticleTitles.HideTitles();
    new _kalkulator.Calculate();
});

},{"./js/hideArticleTitles":2,"./js/kalkulator":3,"./js/slider":4}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HideTitles = function () {
    function HideTitles() {
        _classCallCheck(this, HideTitles);

        this.articleBar = document.querySelectorAll('.article-box');
        this.addEffect();
    }

    _createClass(HideTitles, [{
        key: 'addEffect',
        value: function addEffect() {
            this.articleBar.forEach(function (e) {
                var textBar = document.querySelectorAll('.article-box-bar');

                e.addEventListener('mouseenter', function (element) {
                    var bar = e.querySelector('.article-box-bar');
                    bar.style.bottom = '-100%';
                });

                e.addEventListener('mouseleave', function (element) {
                    var bar = e.querySelector('.article-box-bar');
                    bar.style.bottom = '20px';
                });
            });
        }
    }]);

    return HideTitles;
}();

exports.HideTitles = HideTitles;

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Calculate = function () {
    function Calculate() {
        _classCallCheck(this, Calculate);

        this.dropdown = document.querySelectorAll('.drop_down_list');
        this.toggleVisibility();
        this.planPrice = {
            Basic: 48.99,
            Perfect: 39.99,
            Expert: 34.99
        };
        this.subscriptionPrice = {
            single: 0,
            sixMonths: 10.00,
            twelveMonths: 33.00
        };
        this.deliveryPrice = {
            Regular: 0,
            Express: 9.99
        };
    }

    _createClass(Calculate, [{
        key: 'toggleVisibility',
        value: function toggleVisibility() {
            this.dropdown.forEach(function (e) {
                e.addEventListener('click', function (element) {
                    var listpanel = e.querySelector('.list_panel');

                    if (listpanel.style.visibility === 'visible') {
                        listpanel.style.visibility = 'hidden';
                    } else {
                        listpanel.style.visibility = 'visible';
                    }

                    element.stopPropagation();
                    window.addEventListener("click", function (e) {
                        // zamyka listę dropdown po kliknięciu poza nią
                        listpanel.style.visibility = 'hidden';
                    });
                });
            });
        }
    }]);

    return Calculate;
}();

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
    });
});

// =========  GIFT WRAP =========== //
var gift = document.getElementById('gift');
var giftValue = document.querySelector('.gift.value');
var giftPrice = 10;

gift.addEventListener('click', function (e) {
    var span = document.querySelector('span.gift');

    if (gift.checked === true) {
        giftValue.innerHTML = giftPrice;
        span.innerText = 'Gift wrapping';
    } else {
        giftValue.innerHTML = '';
        span.innerText = '';
    }
    updateSum();
});

// =========  SUM =========== //

function updateSum() {
    var planSum = document.querySelector('.plan.value').innerText || 0;
    var deliverySum = document.querySelector('.delivery.value').innerText || 0;
    var subscriptionSum = document.querySelector('.subscription.value').innerText || 0;
    var sumDisplay = document.querySelector('.sum strong');
    sumDisplay.innerText = (Number(planSum) + Number(deliverySum) + Number(subscriptionSum)).toFixed(2);
}

exports.Calculate = Calculate;

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Slider = function () {
    function Slider(selector) {
        var _this = this;

        var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5000;

        _classCallCheck(this, Slider);

        this.selector = selector;
        this.current = 0;
        this.slides = document.querySelectorAll('.banner-slide');
        this.banner = document.querySelector(this.selector);
        this.bindButtons();
        this.delay = delay;
        if (typeof delay === "number") {
            this.time = setTimeout(function () {
                return _this.nextSlide();
            }, this.delay);
        } else {
            this.delay = 5000;
        }
    }

    _createClass(Slider, [{
        key: 'setSlide',
        value: function setSlide(nr) {
            var _this2 = this;

            this.current = nr;
            this.slides.forEach(function (el) {
                return el.classList.remove('banner-slide-active');
            });
            this.slides[this.current].classList.add('banner-slide-active');

            clearTimeout(this.time);
            this.time = setTimeout(function () {
                return _this2.nextSlide();
            }, this.delay);
        }
    }, {
        key: 'prevSlide',
        value: function prevSlide() {
            this.current--;
            if (this.current < 0) {
                this.current = this.slides.length - 1;
            }
            this.setSlide(this.current);
        }
    }, {
        key: 'nextSlide',
        value: function nextSlide() {
            this.current++;
            if (this.current > this.slides.length - 1) {
                this.current = 0;
            }
            this.setSlide(this.current);
        }
    }, {
        key: 'bindButtons',
        value: function bindButtons() {
            var _this3 = this;

            this.btnPrev = this.banner.querySelector('.banner-prev');
            this.btnPrev.addEventListener('click', function () {
                return _this3.prevSlide();
            }); // albo tak
            this.btnNext = this.banner.querySelector('.banner-next');
            this.btnNext.addEventListener('click', this.nextSlide.bind(this)); //albo tak
        }
    }]);

    return Slider;
}();

exports.Slider = Slider;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAuanMiLCJqcy9oaWRlQXJ0aWNsZVRpdGxlcy5qcyIsImpzL2thbGt1bGF0b3IuanMiLCJqcy9zbGlkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBOztBQUNBOztBQUNBOztBQUVBLFNBQVMsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFVBQVMsS0FBVCxFQUFnQjtBQUMxRCxRQUFJLGNBQUosQ0FBVyxTQUFYO0FBQ0EsUUFBSSw2QkFBSjtBQUNBLFFBQUkscUJBQUo7QUFDRCxDQUpIOzs7Ozs7Ozs7Ozs7O0lDSk0sVTtBQUNGLDBCQUFhO0FBQUE7O0FBQ1QsYUFBSyxVQUFMLEdBQWtCLFNBQVMsZ0JBQVQsQ0FBMEIsY0FBMUIsQ0FBbEI7QUFDQSxhQUFLLFNBQUw7QUFDSDs7OztvQ0FFVTtBQUNQLGlCQUFLLFVBQUwsQ0FBZ0IsT0FBaEIsQ0FBd0IsVUFBVSxDQUFWLEVBQWE7QUFDakMsb0JBQUksVUFBVSxTQUFTLGdCQUFULENBQTBCLGtCQUExQixDQUFkOztBQUVBLGtCQUFFLGdCQUFGLENBQW1CLFlBQW5CLEVBQWlDLFVBQVUsT0FBVixFQUFtQjtBQUNoRCx3QkFBSSxNQUFNLEVBQUUsYUFBRixDQUFnQixrQkFBaEIsQ0FBVjtBQUNBLHdCQUFJLEtBQUosQ0FBVSxNQUFWLEdBQW1CLE9BQW5CO0FBQ0gsaUJBSEQ7O0FBS0Esa0JBQUUsZ0JBQUYsQ0FBbUIsWUFBbkIsRUFBaUMsVUFBVSxPQUFWLEVBQW1CO0FBQ2hELHdCQUFJLE1BQU0sRUFBRSxhQUFGLENBQWdCLGtCQUFoQixDQUFWO0FBQ0Esd0JBQUksS0FBSixDQUFVLE1BQVYsR0FBbUIsTUFBbkI7QUFDSCxpQkFIRDtBQUtILGFBYkQ7QUFjSDs7Ozs7O1FBS0ksVSxHQUFBLFU7Ozs7Ozs7Ozs7Ozs7SUMxQkgsUztBQUNGLHlCQUFjO0FBQUE7O0FBQ1YsYUFBSyxRQUFMLEdBQWdCLFNB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YixDQUE4QixPQUE5QixFQUF1QyxLQUFLLFNBQUwsQ0FBZSxJQUFmLENBQW9CLElBQXBCLENBQXZDLEVBSlUsQ0FJd0Q7QUFDckU7Ozs7OztRQUlJLE0sR0FBQSxNIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiaW1wb3J0IHtTbGlkZXJ9IGZyb20gJy4vanMvc2xpZGVyJ1xuaW1wb3J0IHtIaWRlVGl0bGVzfSBmcm9tIFwiLi9qcy9oaWRlQXJ0aWNsZVRpdGxlc1wiO1xuaW1wb3J0IHtDYWxjdWxhdGV9IGZyb20gXCIuL2pzL2thbGt1bGF0b3JcIjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBuZXcgU2xpZGVyKCcuYmFubmVyJyk7XG4gICAgbmV3IEhpZGVUaXRsZXMoKTtcbiAgICBuZXcgQ2FsY3VsYXRlKCk7XG4gIH0pOyIsImNsYXNzIEhpZGVUaXRsZXMge1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMuYXJ0aWNsZUJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hcnRpY2xlLWJveCcpO1xuICAgICAgICB0aGlzLmFkZEVmZmVjdCgpO1xuICAgIH1cblxuICAgIGFkZEVmZmVjdCgpe1xuICAgICAgICB0aGlzLmFydGljbGVCYXIuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIHRleHRCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYXJ0aWNsZS1ib3gtYmFyJyk7XG5cbiAgICAgICAgICAgIGUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgdmFyIGJhciA9IGUucXVlcnlTZWxlY3RvcignLmFydGljbGUtYm94LWJhcicpO1xuICAgICAgICAgICAgICAgIGJhci5zdHlsZS5ib3R0b20gPSAnLTEwMCUnO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgdmFyIGJhciA9IGUucXVlcnlTZWxlY3RvcignLmFydGljbGUtYm94LWJhcicpO1xuICAgICAgICAgICAgICAgIGJhci5zdHlsZS5ib3R0b20gPSAnMjBweCc7XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgIH0pO1xuICAgIH1cblxuXG59XG5cbmV4cG9ydCB7IEhpZGVUaXRsZXMgfSIsImNsYXNzIENhbGN1bGF0ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZHJvcGRvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZHJvcF9kb3duX2xpc3QnKTtcbiAgICAgICAgdGhpcy50b2dnbGVWaXNpYmlsaXR5KCk7XG4gICAgICAgIHRoaXMucGxhblByaWNlID0ge1xuICAgICAgICAgICAgQmFzaWM6IDQ4Ljk5LFxuICAgICAgICAgICAgUGVyZmVjdDogMzkuOTksXG4gICAgICAgICAgICBFeHBlcnQ6IDM0Ljk5LFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvblByaWNlID0ge1xuICAgICAgICAgICAgc2luZ2xlOiAwLFxuICAgICAgICAgICAgc2l4TW9udGhzOiAxMC4wMCxcbiAgICAgICAgICAgIHR3ZWx2ZU1vbnRocyA6IDMzLjAwLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmRlbGl2ZXJ5UHJpY2UgPSB7XG4gICAgICAgICAgICBSZWd1bGFyOiAwLFxuICAgICAgICAgICAgRXhwcmVzczogOS45OSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICB0b2dnbGVWaXNpYmlsaXR5KCl7XG4gICAgICAgIHRoaXMuZHJvcGRvd24uZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgdmFyIGxpc3RwYW5lbCA9IGUucXVlcnlTZWxlY3RvcignLmxpc3RfcGFuZWwnKTtcblxuICAgICAgICAgICAgICAgIGlmIChsaXN0cGFuZWwuc3R5bGUudmlzaWJpbGl0eSA9PT0gJ3Zpc2libGUnKSB7XG4gICAgICAgICAgICAgICAgICAgIGxpc3RwYW5lbC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdHBhbmVsLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7ICAvLyB6YW15a2EgbGlzdMSZIGRyb3Bkb3duIHBvIGtsaWtuacSZY2l1IHBvemEgbmnEhVxuICAgICAgICAgICAgICAgICAgICBsaXN0cGFuZWwuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICB9XG5cblxuXG59XG5cblxuXG5cblxuLy8gUE9CSUVSQU5JRSBpIHByemVrYXp5d2FuaWUgV0FSVE/FmkNJIC0gTkFaV0EsIEtPTE9SLCBNQVRFUklBxYFcblxudmFyIHBsYW5FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpc3QtcGxhbiBsaScpO1xudmFyIHBsYW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxhbicpO1xudmFyIHBsYW5WYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGFuLnZhbHVlJyk7XG52YXIgc3Vic2NyaXB0aW9uRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saXN0LXN1YnNjcmlwdGlvbiBsaScpO1xudmFyIHN1YnNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJzY3JpcHRpb24nKTtcbnZhciBzdWJzY3JpcHRpb25WYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJzY3JpcHRpb24udmFsdWUnKTtcbnZhciBkZWxpdmVyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZWxpdmVyeScpO1xudmFyIGRlbGl2ZXJ5RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saXN0LWRlbGl2ZXJ5IGxpJyk7XG52YXIgZGVsaXZlcnlWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZWxpdmVyeS52YWx1ZScpO1xuXG4vLy8gPT09PT09PT09ICBQTEFOID09PT09PT09PT09IC8vXG5wbGFuRWxlbWVudC5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IGUuaW5uZXJIVE1MO1xuICAgICAgICB2YXIgc3BhbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0LXBsYW4gPiBzcGFuJyk7XG4gICAgICAgIHBsYW4uaW5uZXJUZXh0ID0gdmFsdWU7XG4gICAgICAgIHNwYW4uaW5uZXJUZXh0ID0gdmFsdWU7XG5cbiAgICAgICAgc3dpdGNoICh2YWx1ZSkge1xuICAgICAgICAgICAgY2FzZSAnQmFzaWMnOlxuICAgICAgICAgICAgICAgIHBsYW5WYWx1ZS5pbm5lclRleHQgPSBwbGFuUHJpY2UuQmFzaWM7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdQZXJmZWN0JzpcbiAgICAgICAgICAgICAgICBwbGFuVmFsdWUuaW5uZXJUZXh0ID0gcGxhblByaWNlLlBlcmZlY3Q7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdFeHBlcnQnOlxuICAgICAgICAgICAgICAgIHBsYW5WYWx1ZS5pbm5lclRleHQgPSBwbGFuUHJpY2UuRXhwZXJ0O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHVwZGF0ZVN1bSgpO1xuICAgIH0pO1xufSk7XG5cbi8vID09PT09PT09PSAgU1VCU0NSSVBUSU9OID09PT09PT09PT09IC8vXG5zdWJzY3JpcHRpb25FbGVtZW50LmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICBlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgdmFyIHNwYW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdC1zdWJzY3JpcHRpb24gPiBzcGFuJyk7XG4gICAgICAgIHZhciB2YWx1ZSA9IGUuaW5uZXJIVE1MO1xuICAgICAgICBzdWJzY3JpcHRpb24uaW5uZXJUZXh0ID0gdmFsdWU7XG4gICAgICAgIHNwYW4uaW5uZXJUZXh0ID0gdmFsdWU7XG5cbiAgICAgICAgc3dpdGNoICh2YWx1ZSkge1xuICAgICAgICAgICAgY2FzZSAnU2luZ2xlIHB1cmNoYXNlJzpcbiAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb25WYWx1ZS5pbm5lclRleHQgPSBzdWJzY3JpcHRpb25QcmljZS5zaW5nbGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICc2IG1vbnRocyc6XG4gICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uVmFsdWUuaW5uZXJUZXh0ID0gc3Vic2NyaXB0aW9uUHJpY2Uuc2l4TW9udGhzO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnMTIgbW9udGhzJzpcbiAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb25WYWx1ZS5pbm5lclRleHQgPSBzdWJzY3JpcHRpb25QcmljZS50d2VsdmVNb250aHM7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgdXBkYXRlU3VtKCk7XG4gICAgfSk7XG59KTtcblxuLy8gPT09PT09PT09ICBERUxJVkVSWSA9PT09PT09PT09PSAvL1xuZGVsaXZlcnlFbGVtZW50LmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICBlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgdmFyIHNwYW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdC1kZWxpdmVyeSA+IHNwYW4nKTtcbiAgICAgICAgdmFyIHZhbHVlID0gZS5pbm5lckhUTUw7XG4gICAgICAgIGRlbGl2ZXJ5LmlubmVyVGV4dCA9IHZhbHVlO1xuICAgICAgICBzcGFuLmlubmVyVGV4dCA9IHZhbHVlO1xuXG4gICAgICAgIHN3aXRjaCAodmFsdWUpIHtcbiAgICAgICAgICAgIGNhc2UgJ1JlZ3VsYXInOlxuICAgICAgICAgICAgICAgIGRlbGl2ZXJ5VmFsdWUuaW5uZXJUZXh0ID0gZGVsaXZlcnlQcmljZS5SZWd1bGFyO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnRXhwcmVzcyc6XG4gICAgICAgICAgICAgICAgZGVsaXZlcnlWYWx1ZS5pbm5lclRleHQgPSBkZWxpdmVyeVByaWNlLkV4cHJlc3M7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgdXBkYXRlU3VtKCk7XG4gICAgfSlcbn0pO1xuXG4vLyA9PT09PT09PT0gIEdJRlQgV1JBUCA9PT09PT09PT09PSAvL1xudmFyIGdpZnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2lmdCcpO1xudmFyIGdpZnRWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5naWZ0LnZhbHVlJyk7XG52YXIgZ2lmdFByaWNlID0gMTA7XG5cbmdpZnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgIHZhciBzcGFuID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc3Bhbi5naWZ0Jyk7XG5cbiAgICBpZiAoZ2lmdC5jaGVja2VkID09PSB0cnVlKXtcbiAgICAgICAgZ2lmdFZhbHVlLmlubmVySFRNTCA9IGdpZnRQcmljZTtcbiAgICAgICAgc3Bhbi5pbm5lclRleHQgPSAnR2lmdCB3cmFwcGluZyc7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZ2lmdFZhbHVlLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBzcGFuLmlubmVyVGV4dCA9ICcnO1xuICAgIH1cbiAgICB1cGRhdGVTdW0oKVxufSk7XG5cbi8vID09PT09PT09PSAgU1VNID09PT09PT09PT09IC8vXG5cbmZ1bmN0aW9uIHVwZGF0ZVN1bSgpIHtcbiAgICB2YXIgcGxhblN1bSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGFuLnZhbHVlJykuaW5uZXJUZXh0IHx8IDA7XG4gICAgdmFyIGRlbGl2ZXJ5U3VtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlbGl2ZXJ5LnZhbHVlJykuaW5uZXJUZXh0IHx8IDA7XG4gICAgdmFyIHN1YnNjcmlwdGlvblN1bSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJzY3JpcHRpb24udmFsdWUnKS5pbm5lclRleHQgfHwgMDtcbiAgICB2YXIgc3VtRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdW0gc3Ryb25nJyk7XG4gICAgc3VtRGlzcGxheS5pbm5lclRleHQgPShOdW1iZXIocGxhblN1bSkrIE51bWJlcihkZWxpdmVyeVN1bSkgKyBOdW1iZXIoc3Vic2NyaXB0aW9uU3VtKSkudG9GaXhlZCgyKTtcbn1cblxuXG5cblxuXG5leHBvcnQge0NhbGN1bGF0ZX0iLCJjbGFzcyBTbGlkZXIge1xuICAgIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBkZWxheSA9IDUwMDApIHtcbiAgICAgICAgdGhpcy5zZWxlY3RvciA9IHNlbGVjdG9yO1xuICAgICAgICB0aGlzLmN1cnJlbnQgPSAwO1xuICAgICAgICB0aGlzLnNsaWRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5iYW5uZXItc2xpZGUnKTtcbiAgICAgICAgdGhpcy5iYW5uZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuc2VsZWN0b3IpO1xuICAgICAgICB0aGlzLmJpbmRCdXR0b25zKCk7XG4gICAgICAgIHRoaXMuZGVsYXkgPSBkZWxheTtcbiAgICAgICAgaWYgKHR5cGVvZiBkZWxheSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgdGhpcy50aW1lID0gc2V0VGltZW91dCgoKSA9PiB0aGlzLm5leHRTbGlkZSgpLCB0aGlzLmRlbGF5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZGVsYXkgPSA1MDAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0U2xpZGUobnIpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gbnI7XG4gICAgICAgIHRoaXMuc2xpZGVzLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZSgnYmFubmVyLXNsaWRlLWFjdGl2ZScpKTtcbiAgICAgICAgdGhpcy5zbGlkZXNbdGhpcy5jdXJyZW50XS5jbGFzc0xpc3QuYWRkKCdiYW5uZXItc2xpZGUtYWN0aXZlJyk7XG5cbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZSk7XG4gICAgICAgIHRoaXMudGltZSA9IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5uZXh0U2xpZGUoKSwgdGhpcy5kZWxheSk7XG5cbiAgICB9XG5cbiAgICBwcmV2U2xpZGUoKSB7XG4gICAgICAgIHRoaXMuY3VycmVudC0tO1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50IDwgMCkge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50ID0gdGhpcy5zbGlkZXMubGVuZ3RoIC0gMTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFNsaWRlKHRoaXMuY3VycmVudCk7XG4gICAgfVxuXG4gICAgbmV4dFNsaWRlKCkge1xuICAgICAgICB0aGlzLmN1cnJlbnQrKztcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudCA+IHRoaXMuc2xpZGVzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTbGlkZSh0aGlzLmN1cnJlbnQpO1xuICAgIH1cblxuICAgIGJpbmRCdXR0b25zKCkge1xuICAgICAgICB0aGlzLmJ0blByZXYgPSB0aGlzLmJhbm5lci5xdWVyeVNlbGVjdG9yKCcuYmFubmVyLXByZXYnKTtcbiAgICAgICAgdGhpcy5idG5QcmV2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5wcmV2U2xpZGUoKSk7IC8vIGFsYm8gdGFrXG4gICAgICAgIHRoaXMuYnRuTmV4dCA9IHRoaXMuYmFubmVyLnF1ZXJ5U2VsZWN0b3IoJy5iYW5uZXItbmV4dCcpO1xuICAgICAgICB0aGlzLmJ0bk5leHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm5leHRTbGlkZS5iaW5kKHRoaXMpKTsvL2FsYm8gdGFrXG4gICAgfVxuXG59XG5cbmV4cG9ydCB7IFNsaWRlciB9Il19
