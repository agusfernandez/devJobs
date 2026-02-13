const jobsContainer = document.querySelector('.jobs-container');

jobsContainer.addEventListener('click', (e) => {
    const element = e.target;
    console.log(element);
    console.log('currenttarget'+ e.currentTarget);
    if(element.classList.contains('btn-applied-job')) {
        console.log('aplicando');
        element.textContent='Aplicado';
        element.classList.add('is-applied');
        element.disabled = true;
    }
})