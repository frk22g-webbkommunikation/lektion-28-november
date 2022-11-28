const bodyElem = document.querySelector('body');
import { getTargets } from './api.js';

function displayTargets(targets, button) {
    console.log(button);
    targets.forEach((target) => {
        const elem = `
            <section>
                <h4>${target.title}</h4>
                <p>${target.description}</p>
            </section>
        `;

        button.insertAdjacentHTML('beforebegin', elem);
    });
}

function addClickEvent() {
    const buttons = document.querySelectorAll('button');
    
    buttons.forEach((button) => {
        button.addEventListener('click', async (event) => {
            const goalCode = event.target.getAttribute('data-code');

            const targets = await getTargets(goalCode);
            console.log(targets);
            displayTargets(targets, button);
        });
    })
}

function displayGoals(goals) {
    goals.forEach((goal) => {
        const elem = `
            <article>
                <h3>${goal.title}</h3>
                <p>${goal.description}</p>
                <button data-code="${goal.code}">Läs mer</button>
            </article>
        `
        bodyElem.insertAdjacentHTML('beforeend', elem);
    });

    addClickEvent();
}

export { displayGoals }