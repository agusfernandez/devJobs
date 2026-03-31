const jobsContainer = document.querySelector('.jobs-container')
const filterTecnology = document.querySelector('#filter-tecnology')
const filterContract = document.querySelector('#filter-contract')
const filterLocation = document.querySelector('#filter-location')
const messageFilter = document.querySelector('#message-filter')
const searchForm = document.querySelector('#searchForm')
const inputSearch = document.querySelector('#empleos-search-input')
const jobsListingCard = document.querySelectorAll('.jobs-listing-card')
const filters = document.querySelectorAll('.filter-section')
const messageNoResult = document.querySelector('.message-noresult')


// Si existe jobsContainer ejecuta el codigo
jobsContainer?.addEventListener('click', (e) => {
    const element = e.target;
    console.log('currenttarget' + e.currentTarget);
    if (element.classList.contains('btn-applied-job')) {
        console.log('aplicando');
        element.textContent = 'Aplicado';
        element.classList.add('is-applied');
        element.disabled = true;
    }
})



filters.forEach(filter => {
    filter.addEventListener('change', () => {
        const filterValue = filter.value;
        const filterTecnologyValue = filterTecnology.value;
        const filterContractValue = filterContract.value;
        const filterLocationValue = filterLocation.value;

        //message filter
        if (filterValue) {
            messageFilter.textContent = `Filtro de ${filter.name}: ${filterValue}`;
        } else {
            messageFilter.textContent = '';
        }

        const filtersActive = [filterTecnologyValue, filterContractValue, filterLocationValue].filter(f => f !== '');


        //filter jobs
        jobsListingCard.forEach(job => {

            const jobsMethod = job.getAttribute('data-modalidad');
            const jobsCategory = job.getAttribute('data-categoria');
            const jobsLocation = job.getAttribute('data-ubicacion');


            let match = false;

            if (filtersActive.length === 0) {
                match = true;
            } else if (filtersActive.length === 3) {
                match = jobsMethod === filterContractValue &&
                    jobsCategory === filterTecnologyValue &&
                    jobsLocation === filterLocationValue;
            } else {
                if (filterContractValue !== '' && jobsMethod === filterContractValue) match = true;
                if (filterTecnologyValue !== '' && jobsCategory === filterTecnologyValue) match = true;
                if (filterLocationValue !== '' && jobsLocation === filterLocationValue) match = true;
            }

            job.style.display = match ? 'flex' : 'none';

        })

        // Mensaje de sin resultados
        const anyVisible = [...jobsListingCard].some(job => job.style.display !== 'none');
        messageNoResult.style.display = anyVisible ? 'none' : 'flex';
        if (!anyVisible) messageNoResult.innerHTML = '<h2>No hay resultados</h2>';



    })
})




inputSearch.addEventListener('input', () => {
    console.log('input ' + inputSearch.value);
})

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('search ' + searchForm);
})
