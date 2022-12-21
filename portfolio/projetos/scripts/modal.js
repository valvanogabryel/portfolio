const modal = document.getElementById('modal-projects');
const btns = document.querySelectorAll('button.button__activator');
const modalTechs = document.querySelector('p#modal-text');
const siteBtn = document.querySelector('#btn-site');
const repositoryBtn = document.querySelector('#btn-repository');
const projects = {
    project1: {
        name: 'projeto-selfcare',
        techs: 'HTML & CSS',
        link: 'https://valvanogabryel.github.io/selfcare/index.html',
        repository: 'https://github.com/valvanogabryel/selfcare'
    },
    project2: {
        name: 'projeto-calculadora-de-gorjeta',
        techs: 'HTML, CSS & JS',
        link: 'https://valvanogabryel.github.io/projetos/projetos-treinamento/funcionalidades/tip-calculator-app/index.html',
        repository: 'https://github.com/valvanogabryel/projetos/tree/main/projetos-treinamento/funcionalidades/tip-calculator-app'
    },
    project3: {
        name: 'tic-tac-toe',
        techs: 'HTML, CSS & JS',
        link: 'https://valvanogabryel.github.io/selfcare/index.html',
        repository: 'https://github.com/valvanogabryel/selfcare'
    },
    project4: {
        name: 'projeto-calculadora-de-gorjeta',
        techs: 'HTML, CSS & JS',
        link: 'https://valvanogabryel.github.io/projetos/projetos-treinamento/funcionalidades/tip-calculator-app/index.html',
        repository: 'https://github.com/valvanogabryel/projetos/tree/main/projetos-treinamento/funcionalidades/tip-calculator-app'
    },
    project5: {
        name: 'projeto-selfcare',
        techs: 'HTML & CSS',
        link: 'https://valvanogabryel.github.io/selfcare/index.html',
        repository: 'https://github.com/valvanogabryel/selfcare'
    },
    project6: {
        name: 'projeto-calculadora-de-gorjeta',
        techs: 'HTML, CSS & JS',
        link: 'https://valvanogabryel.github.io/projetos/projetos-treinamento/funcionalidades/tip-calculator-app/index.html',
        repository: 'https://github.com/valvanogabryel/projetos/tree/main/projetos-treinamento/funcionalidades/tip-calculator-app'
    }

}

btns.forEach(btn => {
    btn.addEventListener('click', handleModal);
})


function handleModal(event) {
    switch (event.target.alt) {
        case projects.project1.name:
            modalTechs.innerHTML = projects.project1.techs
            siteBtn.href = projects.project1.link
            repositoryBtn.href = projects.project1.repository
            break

        case projects.project2.name:
            modalTechs.innerHTML = projects.project2.techs
            siteBtn.href = projects.project2.link
            repositoryBtn.href = projects.project2.repository
            break
    }







    startModal();
}

function startModal() {
    // const modal = document.getElementById(modalId);
    modal.classList.add('show');

    modal.addEventListener('click', event => {
        if (event.target.id === 'modal-projects') modal.classList.remove('show');
    })
}

