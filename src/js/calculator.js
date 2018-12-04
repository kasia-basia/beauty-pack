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

        this.order = document.getElementById('order');
        this.order.onclick = this.handleSubmit.bind(this);


    }

    calculatePlan(e) {
        const showPlanName = document.querySelector('.plan');
        const showPlanValue = document.querySelector('.plan-value');
        showPlanName.innerHTML = e.target.selectedOptions[0].innerHTML;
        showPlanValue.innerHTML = e.target.value;
        if (showPlanName.innerHTML === 'Select'){
            showPlanName.innerHTML = '';
        }
        this.updateSum();
    };

    calculateDelivery(e) {
        const showDeliveryName = document.querySelector('.delivery');
        const showDeliveryValue = document.querySelector('.delivery-value');
        showDeliveryName.innerHTML = e.target.selectedOptions[0].innerHTML;
        showDeliveryValue.innerHTML = e.target.value;
        if (showDeliveryName.innerHTML === 'Select'){
            showDeliveryName.innerHTML = '';
        }
        this.updateSum();
    }


    calculateSkin(e) {
        const showSkinName = document.querySelector('.skin');
        showSkinName.innerHTML = e.target.selectedOptions[0].innerHTML;
        if (showSkinName.innerHTML === 'Select'){
            showSkinName.innerHTML = '';
        }
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

    handleSubmit(e){
        e.preventDefault();
        const errors = [];
        const errorList = document.getElementById('error-list-order');
        let correct = true;

        if (this.plan.selectedOptions[0].innerHTML === 'Select'){
            errors.push('Choose your plan.');
            correct = false;
        }
        if (this.skin.selectedOptions[0].innerHTML === 'Select'){
            errors.push('Choose your skin type.');
            correct = false;
        }
        if (this.delivery.selectedOptions[0].innerHTML === 'Select'){
            errors.push('Choose your delivery.');
            correct = false;
        }

        if (!correct){
            errorList.innerText = errors.join("\r\n");
        } else {
            errorList.innerText = '';
        }
    }
}
export {Calculator}