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
        name: 'alura-books-site',
        techs: 'HTML & CSS (mobile first)',
        link: './404/404.html',
        repository: 'https://github.com/valvanogabryel/alura-cursos/tree/main/responsividade-com-mobile-first'
    },
    project10: {
        name: 'tela-login-responsivo',
        techs: 'HTML & CSS (mobile first)',
        link: 'https://valvanogabryel.github.io/projetos/projetos/projeto-login/index.html',
        repository: 'https://github.com/valvanogabryel/projetos/tree/main/projetos/projeto-login'
    },
    project11: {
        name: 'alura-books-loja',
        techs: 'JS (Métodos de Arrays)',
        link: 'https://valvanogabryel.github.io/projetos/projetos/alura_books-projeto/index.html',
        repository: 'https://github.com/valvanogabryel/projetos/tree/main/projetos/alura_books-projeto'
    },
    project12: {
        name: 'alura-books-cadastro',
        techs: 'JS (Consumo e tratamento de dados de uma API + Buscador de CEP)',
        link: 'https://valvanogabryel.github.io/projetos/projetos/js-consumindo-dados-api-main/index.html',
        repository: 'https://github.com/valvanogabryel/projetos/tree/main/projetos/js-consumindo-dados-api-main'
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

        case projects.project7.name:
            modalTechs.innerHTML = projects.project7.techs
            siteBtn.href = projects.project7.link
            repositoryBtn.href = projects.project7.repository
            break

        case projects.project8.name:
            modalTechs.innerHTML = projects.project8.techs
            siteBtn.href = projects.project8.link
            repositoryBtn.href = projects.project8.repository
            break

        case projects.project9.name:
            modalTechs.innerHTML = projects.project9.techs
            siteBtn.href = projects.project9.link
            repositoryBtn.href = projects.project9.repository
            break

        case projects.project10.name:
            modalTechs.innerHTML = projects.project10.techs
            siteBtn.href = projects.project10.link
            repositoryBtn.href = projects.project10.repository
            break

        case projects.project11.name:
            modalTechs.innerHTML = projects.project11.techs
            siteBtn.href = projects.project11.link
            repositoryBtn.href = projects.project11.repository
            break

        case projects.project12.name:
            modalTechs.innerHTML = projects.project12.techs
            siteBtn.href = projects.project12.link
            repositoryBtn.href = projects.project12.repository
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

