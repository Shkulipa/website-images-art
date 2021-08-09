const accordion = (triggersSelector, showOnlyOneElem = true) => {
    const btns = document.querySelectorAll(triggersSelector);

    btns.forEach(btn => {
        btn.addEventListener('click', function() {
            if(showOnlyOneElem) {
                if(!this.classList.contains('active-style')) {
                    btns.forEach(btnItem => {
                        if(btnItem.classList.contains('active-style')) {
                            btnItem.classList.remove('active-style');
                            btnItem.nextElementSibling.classList.remove('active-content');
                            btnItem.nextElementSibling.style.maxHeight = '0px';
                        }
                    });
                    
                    this.classList.add('active-style');
                    this.nextElementSibling.classList.add('active-content');
                    this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + 'px';
                } else {
                    this.classList.remove('active-style');
                    this.nextElementSibling.classList.remove('active-content');
                    this.nextElementSibling.style.maxHeight = '0px';
                }
            } else {
                this.classList.toggle('active-style');
                this.nextElementSibling.classList.toggle('active-content');
    
                if(this.classList.contains('active-style')) {
                    this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + 'px';
                } else {
                    this.nextElementSibling.style.maxHeight = '0px';
                }
            }
        });
    });
};

export default accordion;