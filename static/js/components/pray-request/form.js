// Obtener elementos del DOM
const prayRequestForm = document.querySelector('.prayRequest');
const submitButton = prayRequestForm.querySelector('.prayRequest-submit');
// Validar el formulario antes de enviarlo
submitButton.addEventListener('click', async (event) => {
  event.preventDefault();
  // Obtener los campos de entrada
  const nameInput = prayRequestForm.querySelector('#name');
  const emailInput = prayRequestForm.querySelector('#email');
  const prayerRequestInput = prayRequestForm.querySelector('#prayer-request');
  const phoneInput = prayRequestForm.querySelector('#phone');
  // Mostrar los valores en la consola
  console.log('Valores de los campos de entrada:');
  console.log('Nombre:', nameInput.value);
  console.log('Correo:', emailInput.value);
  console.log('Petición de Oración:', prayerRequestInput.value);
  console.log('Número de Celular:', phoneInput.value);
});
