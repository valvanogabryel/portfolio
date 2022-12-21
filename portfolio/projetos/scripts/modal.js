const btns = document.querySelectorAll('button.button__activator');
const projects = {
    project1: {
        techs: HTML & CSS
    }

}

btns.forEach(btn => {
    btn.addEventListener('click', handleModal);
})


function handleModal(event) {
    console.log(event);




}

function startModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.add('show');
}

