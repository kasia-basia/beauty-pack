class Slider {
    constructor(selector, delay = 5000) {
        this.selector = selector;
        this.current = 0;
        this.slides = document.querySelectorAll('.banner-slide');
        this.banner = document.querySelector(this.selector);
        this.bindButtons();
        this.delay = delay;
        if (typeof delay === "number") {
            this.time = setTimeout(() => this.nextSlide(), this.delay);
        } else {
            this.delay = 5000;
        }
    }

    setSlide(nr) {
        this.current = nr;
        this.slides.forEach(el => el.classList.remove('banner-slide-active'));
        this.slides[this.current].classList.add('banner-slide-active');

        clearTimeout(this.time);
        this.time = setTimeout(() => this.nextSlide(), this.delay);

    }

    prevSlide() {
        this.current--;
        if (this.current < 0) {
            this.current = this.slides.length - 1;
        }
        this.setSlide(this.current);
    }

    nextSlide() {
        this.current++;
        if (this.current > this.slides.length - 1) {
            this.current = 0;
        }
        this.setSlide(this.current);
    }

    bindButtons() {
        this.btnPrev = this.banner.querySelector('.banner-prev');
        this.btnPrev.addEventListener('click', () => this.prevSlide()); // albo tak
        this.btnNext = this.banner.querySelector('.banner-next');
        this.btnNext.addEventListener('click', this.nextSlide.bind(this));//albo tak
    }

}

export { Slider }