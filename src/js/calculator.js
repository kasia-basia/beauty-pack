class Calculator {
    constructor() {
        this.plan = document.getElementById('plan');
        this.plan.onchange = this.calculatePlan.bind(this);

        this.delivery = document.getElementById('delivery');
        this.delivery.onchange = this.calculateDelivery.bind(this);

        this.skin = document.getElementById('skin');
        this.skin.onchange = this.calculateSkin.bind(this);

        this.gift = document.getElementById('gift');
        this.gift.onchange = this.calculateGift.bind(this);
    }

    calculatePlan(e) {
        const showPlanName = document.querySelector('.plan');
        const showPlanValue = document.querySelector('.plan-value');
        showPlanName.innerHTML = e.target.selectedOptions[0].innerHTML;
        showPlanValue.innerHTML = e.target.value;
        this.updateSum();
    };

    calculateDelivery(e) {
        const showDeliveryName = document.querySelector('.delivery');
        const showDeliveryValue = document.querySelector('.delivery-value');
        showDeliveryName.innerHTML = e.target.selectedOptions[0].innerHTML;
        showDeliveryValue.innerHTML = e.target.value;
        this.updateSum();
    }


    calculateSkin(e) {
        const showDeliverySkin = document.querySelector('.skin');
        showDeliverySkin.innerHTML = e.target.selectedOptions[0].innerHTML;
        this.updateSum();
    }

    calculateGift(e) {
        const showGift = document.querySelector('.gift');
        const showGiftValue = document.querySelector('.gift-value');
        if (e.currentTarget.checked === true) {
            showGift.innerHTML = 'Gift wrap';
            showGiftValue.innerHTML = e.target.value;
        } else {
            showGift.innerHTML = '';
            showGiftValue.innerHTML = '';
        }
        this.updateSum();
    }

    updateSum() {
        const planSum = document.querySelector('.plan-value').innerText || 0;
        const deliverySum = document.querySelector('.delivery-value').innerText || 0;
        const giftSum = document.querySelector('.gift-value').innerText || 0;
        const sumDisplay = document.querySelector('.sum strong');
        sumDisplay.innerText = (Number(planSum) + Number(deliverySum) + Number(giftSum)).toFixed(2);
    }

}

export {Calculator}