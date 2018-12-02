(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _slider = require("./js/slider");

var _hideTitles = require("./js/hideTitles");

var _calculator = require("./js/calculator");

var _menu = require("./js/menu");

document.addEventListener("DOMContentLoaded", function (event) {
    new _calculator.Calculator();
    new _slider.Slider('.banner');
    new _hideTitles.HideTitles();
    new _menu.Menu();
});

},{"./js/calculator":2,"./js/hideTitles":3,"./js/menu":4,"./js/slider":5}],2:[function(require,module,exports){
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
    }

    _createClass(Calculator, [{
        key: 'calculatePlan',
        value: function calculatePlan(e) {
            var showPlanName = document.querySelector('.plan');
            var showPlanValue = document.querySelector('.plan-value');
            showPlanName.innerHTML = e.target.selectedOptions[0].innerHTML;
            showPlanValue.innerHTML = e.target.value;
            this.updateSum();
        }
    }, {
        key: 'calculateDelivery',
        value: function calculateDelivery(e) {
            var showDeliveryName = document.querySelector('.delivery');
            var showDeliveryValue = document.querySelector('.delivery-value');
            showDeliveryName.innerHTML = e.target.selectedOptions[0].innerHTML;
            showDeliveryValue.innerHTML = e.target.value;
            this.updateSum();
        }
    }, {
        key: 'calculateSkin',
        value: function calculateSkin(e) {
            var showDeliverySkin = document.querySelector('.skin');
            showDeliverySkin.innerHTML = e.target.selectedOptions[0].innerHTML;
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

},{}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAuanMiLCJqcy9jYWxjdWxhdG9yLmpzIiwianMvaGlkZVRpdGxlcy5qcyIsImpzL21lbnUuanMiLCJqcy9zbGlkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBOztBQUNBOztBQUNBOztBQUNBOztBQUVBLFNBQVMsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFVBQVMsS0FBVCxFQUFnQjtBQUMxRCxRQUFJLHNCQUFKO0FBQ0EsUUFBSSxjQUFKLENBQVcsU0FBWDtBQUNBLFFBQUksc0JBQUo7QUFDQSxRQUFJLFVBQUo7QUFDRCxDQUxIOzs7Ozs7Ozs7Ozs7O0lDTE0sVTtBQUNGLDBCQUFjO0FBQUE7O0FBQ1YsYUFBSyxJQUFMLEdBQVksU0FBUyxjQUFULENBQXdCLE1BQXhCLENBQVo7QUFDQSxhQUFLLElBQUwsQ0FBVSxRQUFWLEdBQXFCLEtBQUssYUFBTCxDQUFtQixJQUFuQixDQUF3QixJQUF4QixDQUFyQjs7QUFFQSxhQUFLLFFBQUwsR0FBZ0IsU0FBUyxjQUFULENBQXdCLFVBQXhCLENBQWhCO0FBQ0EsYUFBSyxRQUFMLENBQWMsUUFBZCxHQUF5QixLQUFLLGlCQUFMLENBQXVCLElBQXZCLENBQTRCLElBQTVCLENBQXpCOztBQUVBLGFBQUssSUFBTCxHQUFZLFNBQVMsY0FBVCxDQUF3QixNQUF4QixDQUFaO0FBQ0EsYUFBSyxJQUFMLENBQVUsUUFBVixHQUFxQixLQUFLLGFBQUwsQ0FBbUIsSUFBbkIsQ0FBd0IsSUFBeEIsQ0FBckI7O0FBRUEsYUFBSyxJQUFMLEdBQVksU0FBUyxjQUFULENBQXdCLE1BQXhCLENBQVo7QUFDQSxhQUFLLElBQUwsQ0FBVSxRQUFWLEdBQXFCLEtBQUssYUFBTCxDQUFtQixJQUFuQixDQUF3QixJQUF4QixDQUFyQjtBQUNIOzs7O3NDQUVhLEMsRUFBRztBQUNiLGdCQUFNLGVBQWUsU0FBUyxhQUFULENBQXVCLE9B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WixDQUEwQixjQUExQixDQUFmO0FBQ0EsaUJBQUssT0FBTCxDQUFhLGdCQUFiLENBQThCLE9BQTlCLEVBQXVDLEtBQUssU0FBTCxDQUFlLElBQWYsQ0FBb0IsSUFBcEIsQ0FBdkMsRUFKVSxDQUl3RDtBQUNyRTs7Ozs7O1FBSUksTSxHQUFBLE0iLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJpbXBvcnQge1NsaWRlcn0gZnJvbSAnLi9qcy9zbGlkZXInXG5pbXBvcnQge0hpZGVUaXRsZXN9IGZyb20gXCIuL2pzL2hpZGVUaXRsZXNcIjtcbmltcG9ydCB7Q2FsY3VsYXRvcn0gZnJvbSBcIi4vanMvY2FsY3VsYXRvclwiO1xuaW1wb3J0IHtNZW51fSBmcm9tIFwiLi9qcy9tZW51XCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgbmV3IENhbGN1bGF0b3IoKTtcbiAgICBuZXcgU2xpZGVyKCcuYmFubmVyJyk7XG4gICAgbmV3IEhpZGVUaXRsZXMoKTtcbiAgICBuZXcgTWVudSgpO1xuICB9KTsiLCJjbGFzcyBDYWxjdWxhdG9yIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wbGFuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYW4nKTtcbiAgICAgICAgdGhpcy5wbGFuLm9uY2hhbmdlID0gdGhpcy5jYWxjdWxhdGVQbGFuLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5kZWxpdmVyeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWxpdmVyeScpO1xuICAgICAgICB0aGlzLmRlbGl2ZXJ5Lm9uY2hhbmdlID0gdGhpcy5jYWxjdWxhdGVEZWxpdmVyeS5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuc2tpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdza2luJyk7XG4gICAgICAgIHRoaXMuc2tpbi5vbmNoYW5nZSA9IHRoaXMuY2FsY3VsYXRlU2tpbi5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuZ2lmdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnaWZ0Jyk7XG4gICAgICAgIHRoaXMuZ2lmdC5vbmNoYW5nZSA9IHRoaXMuY2FsY3VsYXRlR2lmdC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGNhbGN1bGF0ZVBsYW4oZSkge1xuICAgICAgICBjb25zdCBzaG93UGxhbk5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxhbicpO1xuICAgICAgICBjb25zdCBzaG93UGxhblZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYW4tdmFsdWUnKTtcbiAgICAgICAgc2hvd1BsYW5OYW1lLmlubmVySFRNTCA9IGUudGFyZ2V0LnNlbGVjdGVkT3B0aW9uc1swXS5pbm5lckhUTUw7XG4gICAgICAgIHNob3dQbGFuVmFsdWUuaW5uZXJIVE1MID0gZS50YXJnZXQudmFsdWU7XG4gICAgICAgIHRoaXMudXBkYXRlU3VtKCk7XG4gICAgfTtcblxuICAgIGNhbGN1bGF0ZURlbGl2ZXJ5KGUpIHtcbiAgICAgICAgY29uc3Qgc2hvd0RlbGl2ZXJ5TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZWxpdmVyeScpO1xuICAgICAgICBjb25zdCBzaG93RGVsaXZlcnlWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZWxpdmVyeS12YWx1ZScpO1xuICAgICAgICBzaG93RGVsaXZlcnlOYW1lLmlubmVySFRNTCA9IGUudGFyZ2V0LnNlbGVjdGVkT3B0aW9uc1swXS5pbm5lckhUTUw7XG4gICAgICAgIHNob3dEZWxpdmVyeVZhbHVlLmlubmVySFRNTCA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICB0aGlzLnVwZGF0ZVN1bSgpO1xuICAgIH1cblxuXG4gICAgY2FsY3VsYXRlU2tpbihlKSB7XG4gICAgICAgIGNvbnN0IHNob3dEZWxpdmVyeVNraW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2tpbicpO1xuICAgICAgICBzaG93RGVsaXZlcnlTa2luLmlubmVySFRNTCA9IGUudGFyZ2V0LnNlbGVjdGVkT3B0aW9uc1swXS5pbm5lckhUTUw7XG4gICAgICAgIHRoaXMudXBkYXRlU3VtKCk7XG4gICAgfVxuXG4gICAgY2FsY3VsYXRlR2lmdChlKSB7XG4gICAgICAgIGNvbnN0IHNob3dHaWZ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdpZnQnKTtcbiAgICAgICAgY29uc3Qgc2hvd0dpZnRWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5naWZ0LXZhbHVlJyk7XG4gICAgICAgIGlmIChlLmN1cnJlbnRUYXJnZXQuY2hlY2tlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgc2hvd0dpZnQuaW5uZXJIVE1MID0gJ0dpZnQgd3JhcCc7XG4gICAgICAgICAgICBzaG93R2lmdFZhbHVlLmlubmVySFRNTCA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2hvd0dpZnQuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICBzaG93R2lmdFZhbHVlLmlubmVySFRNTCA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlU3VtKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlU3VtKCkge1xuICAgICAgICBjb25zdCBwbGFuU3VtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYW4tdmFsdWUnKS5pbm5lclRleHQgfHwgMDtcbiAgICAgICAgY29uc3QgZGVsaXZlcnlTdW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVsaXZlcnktdmFsdWUnKS5pbm5lclRleHQgfHwgMDtcbiAgICAgICAgY29uc3QgZ2lmdFN1bSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5naWZ0LXZhbHVlJykuaW5uZXJUZXh0IHx8IDA7XG4gICAgICAgIGNvbnN0IHN1bURpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VtIHN0cm9uZycpO1xuICAgICAgICBzdW1EaXNwbGF5LmlubmVyVGV4dCA9IChOdW1iZXIocGxhblN1bSkgKyBOdW1iZXIoZGVsaXZlcnlTdW0pICsgTnVtYmVyKGdpZnRTdW0pKS50b0ZpeGVkKDIpO1xuICAgIH1cblxufVxuXG5leHBvcnQge0NhbGN1bGF0b3J9IiwiY2xhc3MgSGlkZVRpdGxlcyB7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5hcnRpY2xlQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFydGljbGUtYm94Jyk7XG4gICAgICAgIHRoaXMuYWRkRWZmZWN0KCk7XG4gICAgfVxuXG4gICAgYWRkRWZmZWN0KCl7XG4gICAgICAgIHRoaXMuYXJ0aWNsZUJhci5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB2YXIgdGV4dEJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hcnRpY2xlLWJveC1iYXInKTtcblxuICAgICAgICAgICAgZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICB2YXIgYmFyID0gZS5xdWVyeVNlbGVjdG9yKCcuYXJ0aWNsZS1ib3gtYmFyJyk7XG4gICAgICAgICAgICAgICAgYmFyLnN0eWxlLmJvdHRvbSA9ICctODBweCc7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICB2YXIgYmFyID0gZS5xdWVyeVNlbGVjdG9yKCcuYXJ0aWNsZS1ib3gtYmFyJyk7XG4gICAgICAgICAgICAgICAgYmFyLnN0eWxlLmJvdHRvbSA9ICcyMHB4JztcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbn1cblxuZXhwb3J0IHsgSGlkZVRpdGxlcyB9IiwiY2xhc3MgTWVudSB7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5tZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUnKTtcbiAgICAgICAgdGhpcy5saXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2UtbmF2LWxpc3QnKTtcbiAgICAgICAgdGhpcy5vdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ292ZXJsYXknKTtcbiAgICAgICAgdGhpcy5tZW51Lm9uY2xpY2sgPSB0aGlzLnRvZ2dsZS5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIHRvZ2dsZShlKXtcbiAgICAgICAgdGhpcy5vdmVybGF5LmNsYXNzTGlzdC50b2dnbGUoJ29wZW4nKTtcbiAgICAgICAgdGhpcy5saXN0LmNsYXNzTGlzdC50b2dnbGUoJ3BhZ2UtbmF2LWxpc3QtYWN0aXZlJyk7XG4gICAgICAgIHRoaXMubGlzdC5jbGFzc0xpc3QudG9nZ2xlKCdwYWdlLW5hdi1saXN0Jyk7XG4gICAgICAgIGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKVxuICAgIH1cbn1cblxuZXhwb3J0IHtNZW51fSIsImNsYXNzIFNsaWRlciB7XG4gICAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIGRlbGF5ID0gNTAwMCkge1xuICAgICAgICB0aGlzLnNlbGVjdG9yID0gc2VsZWN0b3I7XG4gICAgICAgIHRoaXMuY3VycmVudCA9IDA7XG4gICAgICAgIHRoaXMuc2xpZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJhbm5lci1zbGlkZScpO1xuICAgICAgICB0aGlzLmJhbm5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5zZWxlY3Rvcik7XG4gICAgICAgIHRoaXMuYmluZEJ1dHRvbnMoKTtcbiAgICAgICAgdGhpcy5kZWxheSA9IGRlbGF5O1xuICAgICAgICBpZiAodHlwZW9mIGRlbGF5ID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICB0aGlzLnRpbWUgPSBzZXRUaW1lb3V0KCgpID0+IHRoaXMubmV4dFNsaWRlKCksIHRoaXMuZGVsYXkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kZWxheSA9IDUwMDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRTbGlkZShucikge1xuICAgICAgICB0aGlzLmN1cnJlbnQgPSBucjtcbiAgICAgICAgdGhpcy5zbGlkZXMuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKCdiYW5uZXItc2xpZGUtYWN0aXZlJykpO1xuICAgICAgICB0aGlzLnNsaWRlc1t0aGlzLmN1cnJlbnRdLmNsYXNzTGlzdC5hZGQoJ2Jhbm5lci1zbGlkZS1hY3RpdmUnKTtcblxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lKTtcbiAgICAgICAgdGhpcy50aW1lID0gc2V0VGltZW91dCgoKSA9PiB0aGlzLm5leHRTbGlkZSgpLCB0aGlzLmRlbGF5KTtcbiAgICB9XG5cbiAgICBwcmV2U2xpZGUoKSB7XG4gICAgICAgIHRoaXMuY3VycmVudC0tO1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50IDwgMCkge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50ID0gdGhpcy5zbGlkZXMubGVuZ3RoIC0gMTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFNsaWRlKHRoaXMuY3VycmVudCk7XG4gICAgfVxuXG4gICAgbmV4dFNsaWRlKCkge1xuICAgICAgICB0aGlzLmN1cnJlbnQrKztcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudCA+IHRoaXMuc2xpZGVzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTbGlkZSh0aGlzLmN1cnJlbnQpO1xuICAgIH1cblxuICAgIGJpbmRCdXR0b25zKCkge1xuICAgICAgICB0aGlzLmJ0blByZXYgPSB0aGlzLmJhbm5lci5xdWVyeVNlbGVjdG9yKCcuYmFubmVyLXByZXYnKTtcbiAgICAgICAgdGhpcy5idG5QcmV2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5wcmV2U2xpZGUoKSk7IC8vIGFsYm8gdGFrXG4gICAgICAgIHRoaXMuYnRuTmV4dCA9IHRoaXMuYmFubmVyLnF1ZXJ5U2VsZWN0b3IoJy5iYW5uZXItbmV4dCcpO1xuICAgICAgICB0aGlzLmJ0bk5leHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm5leHRTbGlkZS5iaW5kKHRoaXMpKTsvL2FsYm8gdGFrXG4gICAgfVxuXG59XG5cbmV4cG9ydCB7IFNsaWRlciB9Il19
