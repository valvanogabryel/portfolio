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
        link: 'https://valvanogabryel.github.io/projetos/games/jogo-da-velha1/index.html',
        repository: 'https://github.com/valvanogabryel/projetos/tree/main/games/jogo-da-velha1'
    },
    project4: {
        name: 'galleria',
        techs: 'HTML & SASS',
        link: 'https://valvanogabryel.github.io/projetos/projetos-treinamento/sites/Galleria%20(Sass)/index.html',
        repository: 'https://github.com/valvanogabryel/projetos/tree/main/projetos-treinamento/sites/Galleria%20(Sass)'
    },
    project5: {
        name: 'landing-page-mundo-invertido',
        techs: 'HTML, CSS & JS',
        link: 'https://valvanogabryel.github.io/projetoST/index.html',
        repository: 'https://github.com/valvanogabryel/projetoST'
    },
    project6: {
        name: 'supertrunfo-pokemon',
        techs: 'HTML, CSS & JS',
        link: 'https://valvanogabryel.github.io/projetos/games/supertrunfo-pokemon/index.html',
        repository: 'https://github.com/valvanogabryel/projetos/tree/main/games/supertrunfo-pokemon'
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

        case projects.project3.name:
            modalTechs.innerHTML = projects.project3.techs
            siteBtn.href = projects.project3.link
            repositoryBtn.href = projects.project3.repository
            break

        case projects.project4.name:
            modalTechs.innerHTML = projects.project4.techs
            siteBtn.href = projects.project4.link
            repositoryBtn.href = projects.project4.repository
            break

        case projects.project5.name:
            modalTechs.innerHTML = projects.project5.techs
            siteBtn.href = projects.project5.link
            repositoryBtn.href = projects.project5.repository
            break

        case projects.project6.name:
            modalTechs.innerHTML = projects.project6.techs
            siteBtn.href = projects.project6.link
            repositoryBtn.href = projects.project6.repository
            break
    }
    startModal();
}

function startModal() {
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';

    modal.addEventListener('click', event => {
        if (event.target.id === 'modal-projects') {
            modal.classList.remove('show');
            document.body.style.overflow = 'auto';
        }
    });
}

