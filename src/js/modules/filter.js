const filter = () => {
    const menu = document.querySelector('.portfolio-menu'),
          items = document.querySelectorAll('li'),
          btnAll = document.querySelector('.all'),
          btnLovers = document.querySelector('.lovers'),
          btnChef = document.querySelector('.chef'),
          btnGirl = document.querySelector('.girl'),
          btnGuy = document.querySelector('.guy'),
          btnGrandmother = document.querySelector('.grandmother'),
          btnGranddad = document.querySelector('.granddad'),
          wrapper = document.querySelector('.portfolio-wrapper'),
          markAll = wrapper.querySelectorAll('.all'),
          markGirl = wrapper.querySelectorAll('.girl'),
          markLovers = wrapper.querySelectorAll('.lovers'),
          markChef = wrapper.querySelectorAll('.chef'),
          markGuy = wrapper.querySelectorAll('.guy'),
          no = document.querySelector('.portfolio-no');

    const btnFilter = (btnSelector, markSelector = false) => {
        btnSelector.addEventListener('click', () => {
            markSelector ? typeFilter(markSelector) : typeFilter();
        });
    };

    const typeFilter = (markType) => {
        markAll.forEach(mark => {
            mark.style.display = 'none';
            mark.classList.remove('animated', 'fadeIn');
        });

        no.style.display = 'none';
        no.classList.remove('animated', 'fadeIn');

        if(markType) {
            markType.forEach(mark => {
                mark.style.display = 'block';
                mark.classList.add('animated', 'fadeIn');
            });
        } else {
            no.style.display = 'block';
            no.classList.add('animated', 'fadeIn');
        }
    };

    btnFilter(btnAll, markAll);
    btnFilter(btnLovers, markLovers);
    btnFilter(btnChef, markChef);
    btnFilter(btnGirl, markGirl);
    btnFilter(btnGuy, markGuy);
    btnFilter(btnGrandmother);
    btnFilter(btnGranddad);

    menu.addEventListener('click', e => {
        let target = e.target;

        if(target && target.tagName == 'LI') {
            items.forEach(btn => {
                btn.classList.remove('active');
                target.classList.add('active');
            })
        }
    });
};

export default filter;