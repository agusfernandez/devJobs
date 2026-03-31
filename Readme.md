# Bootcamp Midudev
## Proyecto Final
### Desarrollado por: Agustina Fernandez

Javascript
- uso del la etiqueta <script type="module"><script> para importar el archivo script.js

´´´
Prueba Uno

const btnWorking = document.querySelectorAll('.btn-applied-job');

btnWorking.forEach(button => {
    button.addEventListener('click', () => {
        console.log('Aplicado');
        button.textContent='Aplicado';
        button.classList.add('is-applied');
        button.disabled = true;
    });
});


´´´

Forma correcta de Aplicacion 

### Event "onClick"

´´´
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

´´´

### Event "onChange"

´´´
const filterOption = document.querySelector('#filter-tecnology')

filterOption.addEventListener('change', ()=> {
    console.log('filter', filterOption.value);
})
´´´


