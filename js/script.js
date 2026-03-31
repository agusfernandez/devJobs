const jobsContainer = document.querySelector('.jobs-container')
const filterOption = document.querySelector('#filter-tecnology')
const filterContract = document.querySelector('#filter-contract')
const filterLocation = document.querySelector('#filter-location')
const messageFilter = document.querySelector('#message-filter')
const searchForm = document.querySelector('#searchForm')
const inputSearch = document.querySelector('#empleos-search-input')

console.log(searchForm)

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

filterOption.addEventListener('change', ()=> {
    console.log('filter', filterOption.value);
})


filterLocation.addEventListener('change',()=>{
    console.log('filter', filterLocation.value);
    const filterLocationValue = filterLocation.value;
    if(filterLocationValue) {
        messageFilter.textContent = `Filtro por ubicación: ${filterLocationValue}`;
    } else {
        messageFilter.textContent = '';
    }
})

inputSearch.addEventListener('input', () => {
    console.log('input ' + inputSearch.value);
})

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('search ' + searchForm);
})
