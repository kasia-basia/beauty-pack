(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _slider = require("./js/slider");

var _hideTitles = require("./js/hideTitles");

var _calculator = require("./js/calculator");

document.addEventListener("DOMContentLoaded", function (event) {
    new _calculator.Calculator();
    new _slider.Slider('.banner');
    new _hideTitles.HideTitles();
});

},{"./js/calculator":2,"./js/hideTitles":3,"./js/slider":4}],2:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAuanMiLCJqcy9jYWxjdWxhdG9yLmpzIiwianMvaGlkZVRpdGxlcy5qcyIsImpzL3NsaWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7O0FBQ0E7O0FBQ0E7O0FBRUEsU0FBUyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsVUFBUyxLQUFULEVBQWdCO0FBQzFELFFBQUksc0JBQUo7QUFDQSxRQUFJLGNBQUosQ0FBVyxTQUFYO0FBQ0EsUUFBSSxzQkFBSjtBQUVELENBTEg7Ozs7Ozs7Ozs7Ozs7SUNKTSxVO0FBQ0YsMEJBQWM7QUFBQTs7QUFDVixhQUFLLElBQUwsR0FBWSxTQUFTLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBWjtBQUNBLGFBQUssSUFBTCxDQUFVLFFBQVYsR0FBcUIsS0FBSyxhQUFMLENBQW1CLElBQW5CLENBQXdCLElBQXhCLENBQXJCOztBQUVBLGFBQUssUUFBTCxHQUFnQixTQUFTLGNBQVQsQ0FBd0IsVUFBeEIsQ0FBaEI7QUFDQSxhQUFLLFFBQUwsQ0FBYyxRQUFkLEdBQXlCLEtBQUssaUJBQUwsQ0FBdUIsSUFBdkIsQ0FBNEIsSUFBNUIsQ0FBekI7O0FBRUEsYUFBSyxJQUFMLEdBQVksU0FBUyxjQUFULENBQXdCLE1BQXhCLENBQVo7QUFDQSxhQUFLLElBQUwsQ0FBVSxRQUFWLEdBQXFCLEtBQUssYUFBTCxDQUFtQixJQUFuQixDQUF3QixJQUF4QixDQUFyQjs7QUFFQSxhQUFLLElBQUwsR0FBWSxTQUFTLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBWjtBQUNBLGFBQUssSUFBTCxDQUFVLFFBQVYsR0FBcUIsS0FBSyxhQUFMLENBQW1CLElBQW5CLENBQXdCLElBQXhCLENBQXJCO0FBQ0g7Ozs7c0NBRWEsQyxFQUFHO0FBQ2IsZ0JBQU0sZUFBZSxTQUFTLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBckI7QUFDQSxnQkFBTSxnQkFBZ0IsU0FBUyxh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QW5CO0FBQ0g7OztvQ0FFVztBQUNSLGlCQUFLLE9BQUw7QUFDQSxnQkFBSSxLQUFLLE9BQUwsR0FBZSxLQUFLLE1BQUwsQ0FBWSxNQUFaLEdBQXFCLENBQXhDLEVBQTJDO0FBQ3ZDLHFCQUFLLE9BQUwsR0FBZSxDQUFmO0FBQ0g7QUFDRCxpQkFBSyxRQUFMLENBQWMsS0FBSyxPQUFuQjtBQUNIOzs7c0NBRWE7QUFBQTs7QUFDVixpQkFBSyxPQUFMLEdBQWUsS0FBSyxNQUFMLENBQVksYUFBWixDQUEwQixjQUExQixDQUFmO0FBQ0EsaUJBQUssT0FBTCxDQUFhLGdCQUFiLENBQThCLE9BQTlCLEVBQXVDO0FBQUEsdUJBQU0sT0FBSyxTQUFMLEVBQU47QUFBQSxhQUF2QyxFQUZVLENBRXNEO0FBQ2hFLGlCQUFLLE9BQUwsR0FBZSxLQUFLLE1BQUwsQ0FBWSxhQUFaLENBQTBCLGNBQTFCLENBQWY7QUFDQSxpQkFBSyxPQUFMLENBQWEsZ0JBQWIsQ0FBOEIsT0FBOUIsRUFBdUMsS0FBSyxTQUFMLENBQWUsSUFBZixDQUFvQixJQUFwQixDQUF2QyxFQUpVLENBSXdEO0FBQ3JFOzs7Ozs7UUFJSSxNLEdBQUEsTSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImltcG9ydCB7U2xpZGVyfSBmcm9tICcuL2pzL3NsaWRlcidcbmltcG9ydCB7SGlkZVRpdGxlc30gZnJvbSBcIi4vanMvaGlkZVRpdGxlc1wiO1xuaW1wb3J0IHtDYWxjdWxhdG9yfSBmcm9tIFwiLi9qcy9jYWxjdWxhdG9yXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgbmV3IENhbGN1bGF0b3IoKTtcbiAgICBuZXcgU2xpZGVyKCcuYmFubmVyJyk7XG4gICAgbmV3IEhpZGVUaXRsZXMoKTtcblxuICB9KTsiLCJjbGFzcyBDYWxjdWxhdG9yIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wbGFuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYW4nKTtcbiAgICAgICAgdGhpcy5wbGFuLm9uY2hhbmdlID0gdGhpcy5jYWxjdWxhdGVQbGFuLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5kZWxpdmVyeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWxpdmVyeScpO1xuICAgICAgICB0aGlzLmRlbGl2ZXJ5Lm9uY2hhbmdlID0gdGhpcy5jYWxjdWxhdGVEZWxpdmVyeS5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuc2tpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdza2luJyk7XG4gICAgICAgIHRoaXMuc2tpbi5vbmNoYW5nZSA9IHRoaXMuY2FsY3VsYXRlU2tpbi5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuZ2lmdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnaWZ0Jyk7XG4gICAgICAgIHRoaXMuZ2lmdC5vbmNoYW5nZSA9IHRoaXMuY2FsY3VsYXRlR2lmdC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGNhbGN1bGF0ZVBsYW4oZSkge1xuICAgICAgICBjb25zdCBzaG93UGxhbk5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxhbicpO1xuICAgICAgICBjb25zdCBzaG93UGxhblZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYW4tdmFsdWUnKTtcbiAgICAgICAgc2hvd1BsYW5OYW1lLmlubmVySFRNTCA9IGUudGFyZ2V0LnNlbGVjdGVkT3B0aW9uc1swXS5pbm5lckhUTUw7XG4gICAgICAgIHNob3dQbGFuVmFsdWUuaW5uZXJIVE1MID0gZS50YXJnZXQudmFsdWU7XG4gICAgICAgIHRoaXMudXBkYXRlU3VtKCk7XG4gICAgfTtcblxuICAgIGNhbGN1bGF0ZURlbGl2ZXJ5KGUpIHtcbiAgICAgICAgY29uc3Qgc2hvd0RlbGl2ZXJ5TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZWxpdmVyeScpO1xuICAgICAgICBjb25zdCBzaG93RGVsaXZlcnlWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZWxpdmVyeS12YWx1ZScpO1xuICAgICAgICBzaG93RGVsaXZlcnlOYW1lLmlubmVySFRNTCA9IGUudGFyZ2V0LnNlbGVjdGVkT3B0aW9uc1swXS5pbm5lckhUTUw7XG4gICAgICAgIHNob3dEZWxpdmVyeVZhbHVlLmlubmVySFRNTCA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICB0aGlzLnVwZGF0ZVN1bSgpO1xuICAgIH1cblxuXG4gICAgY2FsY3VsYXRlU2tpbihlKSB7XG4gICAgICAgIGNvbnN0IHNob3dEZWxpdmVyeVNraW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2tpbicpO1xuICAgICAgICBzaG93RGVsaXZlcnlTa2luLmlubmVySFRNTCA9IGUudGFyZ2V0LnNlbGVjdGVkT3B0aW9uc1swXS5pbm5lckhUTUw7XG4gICAgICAgIHRoaXMudXBkYXRlU3VtKCk7XG4gICAgfVxuXG4gICAgY2FsY3VsYXRlR2lmdChlKSB7XG4gICAgICAgIGNvbnN0IHNob3dHaWZ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdpZnQnKTtcbiAgICAgICAgY29uc3Qgc2hvd0dpZnRWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5naWZ0LXZhbHVlJyk7XG4gICAgICAgIGlmIChlLmN1cnJlbnRUYXJnZXQuY2hlY2tlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgc2hvd0dpZnQuaW5uZXJIVE1MID0gJ0dpZnQgd3JhcCc7XG4gICAgICAgICAgICBzaG93R2lmdFZhbHVlLmlubmVySFRNTCA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2hvd0dpZnQuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICBzaG93R2lmdFZhbHVlLmlubmVySFRNTCA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlU3VtKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlU3VtKCkge1xuICAgICAgICBjb25zdCBwbGFuU3VtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYW4tdmFsdWUnKS5pbm5lclRleHQgfHwgMDtcbiAgICAgICAgY29uc3QgZGVsaXZlcnlTdW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVsaXZlcnktdmFsdWUnKS5pbm5lclRleHQgfHwgMDtcbiAgICAgICAgY29uc3QgZ2lmdFN1bSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5naWZ0LXZhbHVlJykuaW5uZXJUZXh0IHx8IDA7XG4gICAgICAgIGNvbnN0IHN1bURpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VtIHN0cm9uZycpO1xuICAgICAgICBzdW1EaXNwbGF5LmlubmVyVGV4dCA9IChOdW1iZXIocGxhblN1bSkgKyBOdW1iZXIoZGVsaXZlcnlTdW0pICsgTnVtYmVyKGdpZnRTdW0pKS50b0ZpeGVkKDIpO1xuICAgIH1cblxufVxuXG5leHBvcnQge0NhbGN1bGF0b3J9IiwiY2xhc3MgSGlkZVRpdGxlcyB7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5hcnRpY2xlQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFydGljbGUtYm94Jyk7XG4gICAgICAgIHRoaXMuYWRkRWZmZWN0KCk7XG4gICAgfVxuXG4gICAgYWRkRWZmZWN0KCl7XG4gICAgICAgIHRoaXMuYXJ0aWNsZUJhci5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB2YXIgdGV4dEJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hcnRpY2xlLWJveC1iYXInKTtcblxuICAgICAgICAgICAgZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICB2YXIgYmFyID0gZS5xdWVyeVNlbGVjdG9yKCcuYXJ0aWNsZS1ib3gtYmFyJyk7XG4gICAgICAgICAgICAgICAgYmFyLnN0eWxlLmJvdHRvbSA9ICctMTAwJSc7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICB2YXIgYmFyID0gZS5xdWVyeVNlbGVjdG9yKCcuYXJ0aWNsZS1ib3gtYmFyJyk7XG4gICAgICAgICAgICAgICAgYmFyLnN0eWxlLmJvdHRvbSA9ICcyMHB4JztcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbn1cblxuZXhwb3J0IHsgSGlkZVRpdGxlcyB9IiwiY2xhc3MgU2xpZGVyIHtcbiAgICBjb25zdHJ1Y3RvcihzZWxlY3RvciwgZGVsYXkgPSA1MDAwKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0b3IgPSBzZWxlY3RvcjtcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gMDtcbiAgICAgICAgdGhpcy5zbGlkZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYmFubmVyLXNsaWRlJyk7XG4gICAgICAgIHRoaXMuYmFubmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnNlbGVjdG9yKTtcbiAgICAgICAgdGhpcy5iaW5kQnV0dG9ucygpO1xuICAgICAgICB0aGlzLmRlbGF5ID0gZGVsYXk7XG4gICAgICAgIGlmICh0eXBlb2YgZGVsYXkgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIHRoaXMudGltZSA9IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5uZXh0U2xpZGUoKSwgdGhpcy5kZWxheSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRlbGF5ID0gNTAwMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldFNsaWRlKG5yKSB7XG4gICAgICAgIHRoaXMuY3VycmVudCA9IG5yO1xuICAgICAgICB0aGlzLnNsaWRlcy5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2Jhbm5lci1zbGlkZS1hY3RpdmUnKSk7XG4gICAgICAgIHRoaXMuc2xpZGVzW3RoaXMuY3VycmVudF0uY2xhc3NMaXN0LmFkZCgnYmFubmVyLXNsaWRlLWFjdGl2ZScpO1xuXG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWUpO1xuICAgICAgICB0aGlzLnRpbWUgPSBzZXRUaW1lb3V0KCgpID0+IHRoaXMubmV4dFNsaWRlKCksIHRoaXMuZGVsYXkpO1xuICAgIH1cblxuICAgIHByZXZTbGlkZSgpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50LS07XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnQgPCAwKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnQgPSB0aGlzLnNsaWRlcy5sZW5ndGggLSAxO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U2xpZGUodGhpcy5jdXJyZW50KTtcbiAgICB9XG5cbiAgICBuZXh0U2xpZGUoKSB7XG4gICAgICAgIHRoaXMuY3VycmVudCsrO1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50ID4gdGhpcy5zbGlkZXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50ID0gMDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFNsaWRlKHRoaXMuY3VycmVudCk7XG4gICAgfVxuXG4gICAgYmluZEJ1dHRvbnMoKSB7XG4gICAgICAgIHRoaXMuYnRuUHJldiA9IHRoaXMuYmFubmVyLnF1ZXJ5U2VsZWN0b3IoJy5iYW5uZXItcHJldicpO1xuICAgICAgICB0aGlzLmJ0blByZXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLnByZXZTbGlkZSgpKTsgLy8gYWxibyB0YWtcbiAgICAgICAgdGhpcy5idG5OZXh0ID0gdGhpcy5iYW5uZXIucXVlcnlTZWxlY3RvcignLmJhbm5lci1uZXh0Jyk7XG4gICAgICAgIHRoaXMuYnRuTmV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMubmV4dFNsaWRlLmJpbmQodGhpcykpOy8vYWxibyB0YWtcbiAgICB9XG5cbn1cblxuZXhwb3J0IHsgU2xpZGVyIH0iXX0=
