class Contact {
    constructor() {
        this.submit = document.getElementById('contact-submit');
        this.submit.onclick = this.handleSubmit.bind(this);

        this.name = document.getElementById('name');
        this.email = document.getElementById('email');
        this.msg = document.getElementById('msg');
        this.terms = document.getElementById('terms');
    }

    validateEmail(email){
        const regEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return regEx.test(String(email).toLowerCase());
    }

    handleSubmit(e) {
        e.preventDefault();
        const errors = [];
        const errorList = document.getElementById('error-list-contact');
        const confirmation = document.getElementById('form-confirmation');
        let correct = true;
        
        if (this.name.value === '') {
            correct = false;
            errors.push('Fill in your name.')
        }

        if (!this.validateEmail(this.email.value)){
            correct = false;
            errors.push('E-mail address is invalid.');
        }

        if (this.msg.value === '') {
            correct = false;
            errors.push('Fill in your message.')
        }

        if (!this.terms.checked){
            correct = false;
            errors.push('You have to accept the terms and conditions.');
        }

        if (!correct){
            errorList.innerText = errors.join("\r\n");

        } else {
            this.name.value = '';
            this.email.value = '';
            this.msg.value = '';
            this.terms.checked = false;
            errorList.innerText = '';
            confirmation.innerText = "Your message was sent."
        }

    }

}

export {Contact}