import { getResource } from '../services/requests';

const showMoreStyles = (trigger, wrraper) => {
    const btn = document.querySelector(trigger);

    btn.addEventListener('click', function() {
        getResource('assets/db.json')
            .then(res => createCards(res.styles))
            .catch(err => console.log(err));

        this.remove();
    });

    function createCards(response) {
        response.forEach(({src, title, link}) => {
            let card = document.createElement('div');

            card.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');

            card.innerHTML = `
                <div class="style-block">
                    <div class=styles-block>
                        <img src=${src} alt="style">
                        <h4>${title}</h4>
                        <a href=${link}>Подробнее</a>
                    </div>
                </div>`;

            document.querySelector(wrraper).appendChild(card);
        });
    }
};

export default showMoreStyles;