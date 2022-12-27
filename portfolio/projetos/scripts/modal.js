const modal = document.getElementById('modal-projects');
const btns = document.querySelectorAll('button.button__activator');
const modalTechs = document.querySelector('p#modal-text');
const siteBtn = document.querySelector('#btn-site');
const repositoryBtn = document.querySelector('#btn-repository');
const projects = [{
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
    },
    project7: {
        name: 'numero-secreto',
        techs: 'JS e reconhecimento de voz',
        link: 'https://alura-cursos-dgis-7yyro7exa-valvanogabryel.vercel.app',
        repository: 'https://github.com/valvanogabryel/alura-cursos/tree/main/validacoes-e-reconhecimento-de-voz-com-javascript/numero-secreto'
    },
    project8: {
        name: 'hzc-site',
        techs: 'HTML, CSS (flex & grid) & JS (menu hamburguer)',
        link: './404/404.html',
        repository: 'https://github.com/valvanogabryel/alura-cursos/tree/main/css-dispondo-elementos-flexbox-grid'
    },
    project9: {
        name: 'alurabooks-site',
        techs: 'HTML & CSS Responsivo (mobile first)',
        link: './404/404.html',
        repository: 'https://github.com/valvanogabryel/alura-cursos/tree/main/responsividade-com-mobile-first'
    }
}]

btns.forEach(btn => {
    btn.addEventListener('click', handleModal);
})

function handleModal(event) {
    for (let i = 0; i < projects.length + 1; i++) {
        switch (event.target.alt) {
            case projects.project[i].name:
                modalTechs.innerHTML = projects.project[i].techs
                siteBtn.href = projects.project[i].link
                repositoryBtn.href = projects.project[i].repository
                break
        }
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

