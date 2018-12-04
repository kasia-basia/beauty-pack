(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _slider = require("./js/slider");

var _hideTitles = require("./js/hideTitles");

var _calculator = require("./js/calculator");

var _menu = require("./js/menu");

var _scroll = require("./js/scroll");

var _contact = require("./js/contact");

document.addEventListener("DOMContentLoaded", function (event) {
    new _calculator.Calculator();
    new _slider.Slider('.banner');
    new _hideTitles.HideTitles();
    new _menu.Menu();
    (0, _scroll.scroll)();
    new _contact.Contact();
});

},{"./js/calculator":2,"./js/contact":3,"./js/hideTitles":4,"./js/menu":5,"./js/scroll":6,"./js/slider":7}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Calculator = function () {
    function Calculator() {
        _classCallCheck(this, Calculator);

        this.plan = document.getElementById('plan');
        this.plan.onchange = this.calculatePlan.bind(this);

        this.delivery = document.getElementById('delivery');
        this.delivery.onchange = this.calculateDelivery.bind(this);

        this.skin = document.getElementById('skin');
        this.skin.onchange = this.calculateSkin.bind(this);

        this.gift = document.getElementById('gift');
        this.gift.onchange = this.calculateGift.bind(this);

        this.order = document.getElementById('order');
        this.order.onclick = this.handleSubmit.bind(this);
    }

    _createClass(Calculator, [{
        key: 'calculatePlan',
        value: function calculatePlan(e) {
            var showPlanName = document.querySelector('.plan');
            var showPlanValue = document.querySelector('.plan-value');
            showPlanName.innerHTML = e.target.selectedOptions[0].innerHTML;
            showPlanValue.innerHTML = e.target.value;
            if (showPlanName.innerHTML === 'Select') {
                showPlanName.innerHTML = '';
            }
            this.updateSum();
        }
    }, {
        key: 'calculateDelivery',
        value: function calculateDelivery(e) {
            var showDeliveryName = document.querySelector('.delivery');
            var showDeliveryValue = document.querySelector('.delivery-value');
            showDeliveryName.innerHTML = e.target.selectedOptions[0].innerHTML;
            showDeliveryValue.innerHTML = e.target.value;
            if (showDeliveryName.innerHTML === 'Select') {
                showDeliveryName.innerHTML = '';
            }
            this.updateSum();
        }
    }, {
        key: 'calculateSkin',
        value: function calculateSkin(e) {
            var showSkinName = document.querySelector('.skin');
            showSkinName.innerHTML = e.target.selectedOptions[0].innerHTML;
            if (showSkinName.innerHTML === 'Select') {
                showSkinName.innerHTML = '';
            }
            this.updateSum();
        }
    }, {
        key: 'calculateGift',
        value: function calculateGift(e) {
            var showGift = document.querySelector('.gift');
            var showGiftValue = document.querySelector('.gift-value');
            if (e.currentTarget.checked === true) {
                showGift.innerHTML = 'Gift wrap';
                showGiftValue.innerHTML = e.target.value;
            } else {
                showGift.innerHTML = '';
                showGiftValue.innerHTML = '';
            }
            this.updateSum();
        }
    }, {
        key: 'updateSum',
        value: function updateSum() {
            var planSum = document.querySelector('.plan-value').innerText || 0;
            var deliverySum = document.querySelector('.delivery-value').innerText || 0;
            var giftSum = document.querySelector('.gift-value').innerText || 0;
            var sumDisplay = document.querySelector('.sum strong');
            sumDisplay.innerText = (Number(planSum) + Number(deliverySum) + Number(giftSum)).toFixed(2);
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit(e) {
            e.preventDefault();
            var errors = [];
            var errorList = document.getElementById('error-list-order');
            var correct = true;

            if (this.plan.selectedOptions[0].innerHTML === 'Select') {
                errors.push('Choose your plan.');
                correct = false;
            }
            if (this.skin.selectedOptions[0].innerHTML === 'Select') {
                errors.push('Choose your skin type.');
                correct = false;
            }
            if (this.delivery.selectedOptions[0].innerHTML === 'Select') {
                errors.push('Choose your delivery.');
                correct = false;
            }

            if (!correct) {
                errorList.innerText = errors.join("\r\n");
            } else {
                errorList.innerText = '';
            }
        }
    }]);

    return Calculator;
}();

exports.Calculator = Calculator;

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Contact = function () {
    function Contact() {
        _classCallCheck(this, Contact);

        this.submit = document.getElementById('contact-submit');
        this.submit.onclick = this.handleSubmit.bind(this);

        this.name = document.getElementById('name');
        this.email = document.getElementById('email');
        this.msg = document.getElementById('msg');
        this.terms = document.getElementById('terms');
    }

    _createClass(Contact, [{
        key: 'validateEmail',
        value: function validateEmail(email) {
            var regEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return regEx.test(String(email).toLowerCase());
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit(e) {
            e.preventDefault();
            var errors = [];
            var errorList = document.getElementById('error-list-contact');
            var confirmation = document.getElementById('form-confirmation');
            var correct = true;

            if (this.name.value === '') {
                correct = false;
                errors.push('Fill in your name.');
            }

            if (!this.validateEmail(this.email.value)) {
                correct = false;
                errors.push('E-mail address is invalid.');
            }

            if (this.msg.value === '') {
                correct = false;
                errors.push('Fill in your message.');
            }

            if (!this.terms.checked) {
                correct = false;
                errors.push('You have to accept the terms and conditions.');
            }

            if (!correct) {
                errorList.innerText = errors.join("\r\n");
            } else {
                this.name.value = '';
                this.email.value = '';
                this.msg.value = '';
                this.terms.checked = false;
                errorList.innerText = '';
                confirmation.innerText = "Your message was sent.";
            }
        }
    }]);

    return Contact;
}();

exports.Contact = Contact;

},{}],4:[function(require,module,exports){
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
                    bar.style.bottom = '-80px';
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

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Menu = function () {
    function Menu() {
        _classCallCheck(this, Menu);

        this.menu = document.getElementById('menu');
        this.list = document.querySelector('.page-nav-list');
        this.overlay = document.getElementById('overlay');
        this.menu.onclick = this.toggle.bind(this);
    }

    _createClass(Menu, [{
        key: 'toggle',
        value: function toggle(e) {
            this.overlay.classList.toggle('open');
            this.list.classList.toggle('page-nav-list-active');
            this.list.classList.toggle('page-nav-list');
            e.currentTarget.classList.toggle('active');
        }
    }]);

    return Menu;
}();

exports.Menu = Menu;

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
function scroll() {
    var locations = ['articles', 'pricing', 'contact'];
    var scroll = document.querySelectorAll('.scroll');
    var overlay = document.getElementById('overlay');
    var list = document.querySelector('.page-nav-list');
    var menu = document.getElementById('menu');

    var _loop = function _loop(i) {
        scroll[i].addEventListener('click', function (e) {
            overlay.classList.remove('open');
            list.classList.remove('page-nav-list-active');
            list.classList.add('page-nav-list');
            menu.classList.remove('active');
            e.preventDefault();
            document.getElementById(locations[i]).scrollIntoView({ behavior: 'smooth' });
        });
    };

    for (var i = 0; i < scroll.length; i++) {
        _loop(i);
    }
}

exports.scroll = scroll;

},{}],7:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAuanMiLCJqcy9jYWxjdWxhdG9yLmpzIiwianMvY29udGFjdC5qcyIsImpzL2hpZGVUaXRsZXMuanMiLCJqcy9tZW51LmpzIiwianMvc2Nyb2xsLmpzIiwianMvc2xpZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQSxTQUFTLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxVQUFTLEtBQVQsRUFBZ0I7QUFDMUQsUUFBSSxzQkFBSjtBQUNBLFFBQUksY0FBSixDQUFXLFNBQVg7QUFDQSxRQUFJLHNCQUFKO0FBQ0EsUUFBSSxVQUFKO0FBQ0E7QUFDQSxRQUFJLGdCQUFKO0FBRUQsQ0FSSDs7Ozs7Ozs7Ozs7OztJQ1BNLFU7QUFDRiwwQkFBYztBQUFBOztBQUNWLGFBQUssSUFBTCxHQUFZLFNBQVMsY0FBVCxDQUF3QixNQUF4QixDQUFaO0FBQ0EsYUFBSyxJQUFMLENBQVUsUUFBVixHQUFxQixLQUFLLGFBQUwsQ0FBbUIsSUFBbkIsQ0FBd0IsSUFBeEIsQ0FBckI7O0FBRUEsYUFBSyxRQUFMLEdBQWdCLFNBQVMsY0FBVCxDQUF3QixVQUF4QixDQUFoQjtBQUNBLGFBQUssUUFBTCxDQUFjLFFBQWQsR0FBeUIsS0FBSyxpQkFBTCxDQUF1QixJQUF2QixDQUE0QixJQUE1QixDQUF6Qjs7QUFFQSxhQUFLLElBQUwsR0FBWSxTQUFTLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBWjtBQUNBLGFBQUssSUFBTCxDQUFVLFFBQVYsR0FBcUIsS0FBSyxhQUFMLENBQW1CLElBQW5CLENBQXdCLElBQXhCLENBQXJCOztBQUVBLGFBQUssSUFBTCxHQUFZLFNBQVMsY0FBVCxDQUF3QixNQUF4QixDQUFaO0FBQ0EsYUFBSyxJQUFMLENBQVUsUUFBVixHQUFxQixLQUFLLGFBQUwsQ0FBbUIsSUFBbkIsQ0FBd0IsSUFB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b0NBRVc7QUFDUixpQkFBSyxPQUFMO0FBQ0EsZ0JBQUksS0FBSyxPQUFMLEdBQWUsS0FBSyxNQUFMLENBQVksTUFBWixHQUFxQixDQUF4QyxFQUEyQztBQUN2QyxxQkFBSyxPQUFMLEdBQWUsQ0FBZjtBQUNIO0FBQ0QsaUJBQUssUUFBTCxDQUFjLEtBQUssT0FBbkI7QUFDSDs7O3NDQUVhO0FBQUE7O0FBQ1YsaUJBQUssT0FBTCxHQUFlLEtBQUssTUFBTCxDQUFZLGFBQVosQ0FBMEIsY0FBMUIsQ0FBZjtBQUNBLGlCQUFLLE9BQUwsQ0FBYSxnQkFBYixDQUE4QixPQUE5QixFQUF1QztBQUFBLHVCQUFNLE9BQUssU0FBTCxFQUFOO0FBQUEsYUFBdkMsRUFGVSxDQUVzRDtBQUNoRSxpQkFBSyxPQUFMLEdBQWUsS0FBSyxNQUFMLENBQVksYUFBWixDQUEwQixjQUExQixDQUFmO0FBQ0EsaUJBQUssT0FBTCxDQUFhLGdCQUFiLENBQThCLE9BQTlCLEVBQXVDLEtBQUssU0FBTCxDQUFlLElBQWYsQ0FBb0IsSUFBcEIsQ0FBdkMsRUFKVSxDQUl3RDtBQUNyRTs7Ozs7O1FBSUksTSxHQUFBLE0iLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJpbXBvcnQge1NsaWRlcn0gZnJvbSAnLi9qcy9zbGlkZXInXG5pbXBvcnQge0hpZGVUaXRsZXN9IGZyb20gXCIuL2pzL2hpZGVUaXRsZXNcIjtcbmltcG9ydCB7Q2FsY3VsYXRvcn0gZnJvbSBcIi4vanMvY2FsY3VsYXRvclwiO1xuaW1wb3J0IHtNZW51fSBmcm9tIFwiLi9qcy9tZW51XCI7XG5pbXBvcnQge3Njcm9sbH0gZnJvbSBcIi4vanMvc2Nyb2xsXCI7XG5pbXBvcnQge0NvbnRhY3R9IGZyb20gXCIuL2pzL2NvbnRhY3RcIjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBuZXcgQ2FsY3VsYXRvcigpO1xuICAgIG5ldyBTbGlkZXIoJy5iYW5uZXInKTtcbiAgICBuZXcgSGlkZVRpdGxlcygpO1xuICAgIG5ldyBNZW51KCk7XG4gICAgc2Nyb2xsKCk7XG4gICAgbmV3IENvbnRhY3QoKTtcblxuICB9KTtcblxuXG5cbiIsImNsYXNzIENhbGN1bGF0b3Ige1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnBsYW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxhbicpO1xuICAgICAgICB0aGlzLnBsYW4ub25jaGFuZ2UgPSB0aGlzLmNhbGN1bGF0ZVBsYW4uYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLmRlbGl2ZXJ5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlbGl2ZXJ5Jyk7XG4gICAgICAgIHRoaXMuZGVsaXZlcnkub25jaGFuZ2UgPSB0aGlzLmNhbGN1bGF0ZURlbGl2ZXJ5LmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5za2luID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NraW4nKTtcbiAgICAgICAgdGhpcy5za2luLm9uY2hhbmdlID0gdGhpcy5jYWxjdWxhdGVTa2luLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5naWZ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dpZnQnKTtcbiAgICAgICAgdGhpcy5naWZ0Lm9uY2hhbmdlID0gdGhpcy5jYWxjdWxhdGVHaWZ0LmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5vcmRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcmRlcicpO1xuICAgICAgICB0aGlzLm9yZGVyLm9uY2xpY2sgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xuXG5cbiAgICB9XG5cbiAgICBjYWxjdWxhdGVQbGFuKGUpIHtcbiAgICAgICAgY29uc3Qgc2hvd1BsYW5OYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYW4nKTtcbiAgICAgICAgY29uc3Qgc2hvd1BsYW5WYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGFuLXZhbHVlJyk7XG4gICAgICAgIHNob3dQbGFuTmFtZS5pbm5lckhUTUwgPSBlLnRhcmdldC5zZWxlY3RlZE9wdGlvbnNbMF0uaW5uZXJIVE1MO1xuICAgICAgICBzaG93UGxhblZhbHVlLmlubmVySFRNTCA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICBpZiAoc2hvd1BsYW5OYW1lLmlubmVySFRNTCA9PT0gJ1NlbGVjdCcpe1xuICAgICAgICAgICAgc2hvd1BsYW5OYW1lLmlubmVySFRNTCA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlU3VtKCk7XG4gICAgfTtcblxuICAgIGNhbGN1bGF0ZURlbGl2ZXJ5KGUpIHtcbiAgICAgICAgY29uc3Qgc2hvd0RlbGl2ZXJ5TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZWxpdmVyeScpO1xuICAgICAgICBjb25zdCBzaG93RGVsaXZlcnlWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZWxpdmVyeS12YWx1ZScpO1xuICAgICAgICBzaG93RGVsaXZlcnlOYW1lLmlubmVySFRNTCA9IGUudGFyZ2V0LnNlbGVjdGVkT3B0aW9uc1swXS5pbm5lckhUTUw7XG4gICAgICAgIHNob3dEZWxpdmVyeVZhbHVlLmlubmVySFRNTCA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICBpZiAoc2hvd0RlbGl2ZXJ5TmFtZS5pbm5lckhUTUwgPT09ICdTZWxlY3QnKXtcbiAgICAgICAgICAgIHNob3dEZWxpdmVyeU5hbWUuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVTdW0oKTtcbiAgICB9XG5cblxuICAgIGNhbGN1bGF0ZVNraW4oZSkge1xuICAgICAgICBjb25zdCBzaG93U2tpbk5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2tpbicpO1xuICAgICAgICBzaG93U2tpbk5hbWUuaW5uZXJIVE1MID0gZS50YXJnZXQuc2VsZWN0ZWRPcHRpb25zWzBdLmlubmVySFRNTDtcbiAgICAgICAgaWYgKHNob3dTa2luTmFtZS5pbm5lckhUTUwgPT09ICdTZWxlY3QnKXtcbiAgICAgICAgICAgIHNob3dTa2luTmFtZS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZVN1bSgpO1xuICAgIH1cblxuICAgIGNhbGN1bGF0ZUdpZnQoZSkge1xuICAgICAgICBjb25zdCBzaG93R2lmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5naWZ0Jyk7XG4gICAgICAgIGNvbnN0IHNob3dHaWZ0VmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2lmdC12YWx1ZScpO1xuICAgICAgICBpZiAoZS5jdXJyZW50VGFyZ2V0LmNoZWNrZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHNob3dHaWZ0LmlubmVySFRNTCA9ICdHaWZ0IHdyYXAnO1xuICAgICAgICAgICAgc2hvd0dpZnRWYWx1ZS5pbm5lckhUTUwgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNob3dHaWZ0LmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgc2hvd0dpZnRWYWx1ZS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZVN1bSgpO1xuICAgIH1cblxuICAgIHVwZGF0ZVN1bSgpIHtcbiAgICAgICAgY29uc3QgcGxhblN1bSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGFuLXZhbHVlJykuaW5uZXJUZXh0IHx8IDA7XG4gICAgICAgIGNvbnN0IGRlbGl2ZXJ5U3VtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlbGl2ZXJ5LXZhbHVlJykuaW5uZXJUZXh0IHx8IDA7XG4gICAgICAgIGNvbnN0IGdpZnRTdW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2lmdC12YWx1ZScpLmlubmVyVGV4dCB8fCAwO1xuICAgICAgICBjb25zdCBzdW1EaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1bSBzdHJvbmcnKTtcbiAgICAgICAgc3VtRGlzcGxheS5pbm5lclRleHQgPSAoTnVtYmVyKHBsYW5TdW0pICsgTnVtYmVyKGRlbGl2ZXJ5U3VtKSArIE51bWJlcihnaWZ0U3VtKSkudG9GaXhlZCgyKTtcbiAgICB9XG5cbiAgICBoYW5kbGVTdWJtaXQoZSl7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgZXJyb3JzID0gW107XG4gICAgICAgIGNvbnN0IGVycm9yTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlcnJvci1saXN0LW9yZGVyJyk7XG4gICAgICAgIGxldCBjb3JyZWN0ID0gdHJ1ZTtcblxuICAgICAgICBpZiAodGhpcy5wbGFuLnNlbGVjdGVkT3B0aW9uc1swXS5pbm5lckhUTUwgPT09ICdTZWxlY3QnKXtcbiAgICAgICAgICAgIGVycm9ycy5wdXNoKCdDaG9vc2UgeW91ciBwbGFuLicpO1xuICAgICAgICAgICAgY29ycmVjdCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnNraW4uc2VsZWN0ZWRPcHRpb25zWzBdLmlubmVySFRNTCA9PT0gJ1NlbGVjdCcpe1xuICAgICAgICAgICAgZXJyb3JzLnB1c2goJ0Nob29zZSB5b3VyIHNraW4gdHlwZS4nKTtcbiAgICAgICAgICAgIGNvcnJlY3QgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5kZWxpdmVyeS5zZWxlY3RlZE9wdGlvbnNbMF0uaW5uZXJIVE1MID09PSAnU2VsZWN0Jyl7XG4gICAgICAgICAgICBlcnJvcnMucHVzaCgnQ2hvb3NlIHlvdXIgZGVsaXZlcnkuJyk7XG4gICAgICAgICAgICBjb3JyZWN0ID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWNvcnJlY3Qpe1xuICAgICAgICAgICAgZXJyb3JMaXN0LmlubmVyVGV4dCA9IGVycm9ycy5qb2luKFwiXFxyXFxuXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXJyb3JMaXN0LmlubmVyVGV4dCA9ICcnO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IHtDYWxjdWxhdG9yfSIsImNsYXNzIENvbnRhY3Qge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnN1Ym1pdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0LXN1Ym1pdCcpO1xuICAgICAgICB0aGlzLnN1Ym1pdC5vbmNsaWNrID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLm5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZScpO1xuICAgICAgICB0aGlzLmVtYWlsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VtYWlsJyk7XG4gICAgICAgIHRoaXMubXNnID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21zZycpO1xuICAgICAgICB0aGlzLnRlcm1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rlcm1zJyk7XG4gICAgfVxuXG4gICAgdmFsaWRhdGVFbWFpbChlbWFpbCl7XG4gICAgICAgIGNvbnN0IHJlZ0V4ID0gL14oKFtePD4oKVtcXF1cXFxcLiw7Olxcc0BcXFwiXSsoXFwuW148PigpW1xcXVxcXFwuLDs6XFxzQFxcXCJdKykqKXwoXFxcIi4rXFxcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcXSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC9cbiAgICAgICAgcmV0dXJuIHJlZ0V4LnRlc3QoU3RyaW5nKGVtYWlsKS50b0xvd2VyQ2FzZSgpKTtcbiAgICB9XG5cbiAgICBoYW5kbGVTdWJtaXQoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGVycm9ycyA9IFtdO1xuICAgICAgICBjb25zdCBlcnJvckxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXJyb3ItbGlzdC1jb250YWN0Jyk7XG4gICAgICAgIGNvbnN0IGNvbmZpcm1hdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtLWNvbmZpcm1hdGlvbicpO1xuICAgICAgICBsZXQgY29ycmVjdCA9IHRydWU7XG4gICAgICAgIFxuICAgICAgICBpZiAodGhpcy5uYW1lLnZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgY29ycmVjdCA9IGZhbHNlO1xuICAgICAgICAgICAgZXJyb3JzLnB1c2goJ0ZpbGwgaW4geW91ciBuYW1lLicpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMudmFsaWRhdGVFbWFpbCh0aGlzLmVtYWlsLnZhbHVlKSl7XG4gICAgICAgICAgICBjb3JyZWN0ID0gZmFsc2U7XG4gICAgICAgICAgICBlcnJvcnMucHVzaCgnRS1tYWlsIGFkZHJlc3MgaXMgaW52YWxpZC4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm1zZy52YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICAgIGNvcnJlY3QgPSBmYWxzZTtcbiAgICAgICAgICAgIGVycm9ycy5wdXNoKCdGaWxsIGluIHlvdXIgbWVzc2FnZS4nKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLnRlcm1zLmNoZWNrZWQpe1xuICAgICAgICAgICAgY29ycmVjdCA9IGZhbHNlO1xuICAgICAgICAgICAgZXJyb3JzLnB1c2goJ1lvdSBoYXZlIHRvIGFjY2VwdCB0aGUgdGVybXMgYW5kIGNvbmRpdGlvbnMuJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWNvcnJlY3Qpe1xuICAgICAgICAgICAgZXJyb3JMaXN0LmlubmVyVGV4dCA9IGVycm9ycy5qb2luKFwiXFxyXFxuXCIpO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm5hbWUudmFsdWUgPSAnJztcbiAgICAgICAgICAgIHRoaXMuZW1haWwudmFsdWUgPSAnJztcbiAgICAgICAgICAgIHRoaXMubXNnLnZhbHVlID0gJyc7XG4gICAgICAgICAgICB0aGlzLnRlcm1zLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGVycm9yTGlzdC5pbm5lclRleHQgPSAnJztcbiAgICAgICAgICAgIGNvbmZpcm1hdGlvbi5pbm5lclRleHQgPSBcIllvdXIgbWVzc2FnZSB3YXMgc2VudC5cIlxuICAgICAgICB9XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IHtDb250YWN0fSIsImNsYXNzIEhpZGVUaXRsZXMge1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMuYXJ0aWNsZUJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hcnRpY2xlLWJveCcpO1xuICAgICAgICB0aGlzLmFkZEVmZmVjdCgpO1xuICAgIH1cblxuICAgIGFkZEVmZmVjdCgpe1xuICAgICAgICB0aGlzLmFydGljbGVCYXIuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIHRleHRCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYXJ0aWNsZS1ib3gtYmFyJyk7XG5cbiAgICAgICAgICAgIGUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgdmFyIGJhciA9IGUucXVlcnlTZWxlY3RvcignLmFydGljbGUtYm94LWJhcicpO1xuICAgICAgICAgICAgICAgIGJhci5zdHlsZS5ib3R0b20gPSAnLTgwcHgnO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgdmFyIGJhciA9IGUucXVlcnlTZWxlY3RvcignLmFydGljbGUtYm94LWJhcicpO1xuICAgICAgICAgICAgICAgIGJhci5zdHlsZS5ib3R0b20gPSAnMjBweCc7XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgIH0pO1xuICAgIH1cblxuXG59XG5cbmV4cG9ydCB7IEhpZGVUaXRsZXMgfSIsImNsYXNzIE1lbnUge1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMubWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51Jyk7XG4gICAgICAgIHRoaXMubGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlLW5hdi1saXN0Jyk7XG4gICAgICAgIHRoaXMub3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvdmVybGF5Jyk7XG4gICAgICAgIHRoaXMubWVudS5vbmNsaWNrID0gdGhpcy50b2dnbGUuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICB0b2dnbGUoZSl7XG4gICAgICAgIHRoaXMub3ZlcmxheS5jbGFzc0xpc3QudG9nZ2xlKCdvcGVuJyk7XG4gICAgICAgIHRoaXMubGlzdC5jbGFzc0xpc3QudG9nZ2xlKCdwYWdlLW5hdi1saXN0LWFjdGl2ZScpO1xuICAgICAgICB0aGlzLmxpc3QuY2xhc3NMaXN0LnRvZ2dsZSgncGFnZS1uYXYtbGlzdCcpO1xuICAgICAgICBlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJylcblxuICAgIH1cbn1cblxuZXhwb3J0IHtNZW51fSIsImZ1bmN0aW9uIHNjcm9sbCgpIHtcbiAgICBjb25zdCBsb2NhdGlvbnMgPSBbJ2FydGljbGVzJywgJ3ByaWNpbmcnLCAnY29udGFjdCddO1xuICAgIGNvbnN0IHNjcm9sbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zY3JvbGwnKTtcbiAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ292ZXJsYXknKTtcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2UtbmF2LWxpc3QnKTtcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUnKTtcblxuICAgICAgICBmb3IobGV0IGk9MDtpPHNjcm9sbC5sZW5ndGg7aSsrICl7XG4gICAgICAgICAgICBzY3JvbGxbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xuICAgICAgICAgICAgICAgIGxpc3QuY2xhc3NMaXN0LnJlbW92ZSgncGFnZS1uYXYtbGlzdC1hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICBsaXN0LmNsYXNzTGlzdC5hZGQoJ3BhZ2UtbmF2LWxpc3QnKTtcbiAgICAgICAgICAgICAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChsb2NhdGlvbnNbaV0pLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG59XG5cbmV4cG9ydCB7c2Nyb2xsfSIsImNsYXNzIFNsaWRlciB7XG4gICAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIGRlbGF5ID0gNTAwMCkge1xuICAgICAgICB0aGlzLnNlbGVjdG9yID0gc2VsZWN0b3I7XG4gICAgICAgIHRoaXMuY3VycmVudCA9IDA7XG4gICAgICAgIHRoaXMuc2xpZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJhbm5lci1zbGlkZScpO1xuICAgICAgICB0aGlzLmJhbm5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5zZWxlY3Rvcik7XG4gICAgICAgIHRoaXMuYmluZEJ1dHRvbnMoKTtcbiAgICAgICAgdGhpcy5kZWxheSA9IGRlbGF5O1xuICAgICAgICBpZiAodHlwZW9mIGRlbGF5ID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICB0aGlzLnRpbWUgPSBzZXRUaW1lb3V0KCgpID0+IHRoaXMubmV4dFNsaWRlKCksIHRoaXMuZGVsYXkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kZWxheSA9IDUwMDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRTbGlkZShucikge1xuICAgICAgICB0aGlzLmN1cnJlbnQgPSBucjtcbiAgICAgICAgdGhpcy5zbGlkZXMuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKCdiYW5uZXItc2xpZGUtYWN0aXZlJykpO1xuICAgICAgICB0aGlzLnNsaWRlc1t0aGlzLmN1cnJlbnRdLmNsYXNzTGlzdC5hZGQoJ2Jhbm5lci1zbGlkZS1hY3RpdmUnKTtcblxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lKTtcbiAgICAgICAgdGhpcy50aW1lID0gc2V0VGltZW91dCgoKSA9PiB0aGlzLm5leHRTbGlkZSgpLCB0aGlzLmRlbGF5KTtcbiAgICB9XG5cbiAgICBwcmV2U2xpZGUoKSB7XG4gICAgICAgIHRoaXMuY3VycmVudC0tO1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50IDwgMCkge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50ID0gdGhpcy5zbGlkZXMubGVuZ3RoIC0gMTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFNsaWRlKHRoaXMuY3VycmVudCk7XG4gICAgfVxuXG4gICAgbmV4dFNsaWRlKCkge1xuICAgICAgICB0aGlzLmN1cnJlbnQrKztcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudCA+IHRoaXMuc2xpZGVzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTbGlkZSh0aGlzLmN1cnJlbnQpO1xuICAgIH1cblxuICAgIGJpbmRCdXR0b25zKCkge1xuICAgICAgICB0aGlzLmJ0blByZXYgPSB0aGlzLmJhbm5lci5xdWVyeVNlbGVjdG9yKCcuYmFubmVyLXByZXYnKTtcbiAgICAgICAgdGhpcy5idG5QcmV2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5wcmV2U2xpZGUoKSk7IC8vIGFsYm8gdGFrXG4gICAgICAgIHRoaXMuYnRuTmV4dCA9IHRoaXMuYmFubmVyLnF1ZXJ5U2VsZWN0b3IoJy5iYW5uZXItbmV4dCcpO1xuICAgICAgICB0aGlzLmJ0bk5leHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm5leHRTbGlkZS5iaW5kKHRoaXMpKTsvL2FsYm8gdGFrXG4gICAgfVxuXG59XG5cbmV4cG9ydCB7IFNsaWRlciB9Il19
