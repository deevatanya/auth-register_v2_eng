/**
 * Function inputErrorTemplate
 * @param {String} msg 
 */
function inputErrorTemplate(msg) {
  return `
    <div class="invalid-feedback">${msg}</div>
  `;
}

/**
 * Function showInputError. Add input error
 * @param {HTMLInputElement} el 
 */
export function showInputError(el) {
  const parent = el.parentElement;
  if (el.classList.contains('is-invalid')) return;
  
  const msg = 'Пожалуйста, вветите корректные данные';
  const template = inputErrorTemplate(msg);

  el.classList.add('is-invalid');
  parent.insertAdjacentHTML('beforeend', template);
}

/**
 * Function removeInputError. Remove input error
 * @param {HTMLInputElement} el 
 */
export function removeInputError(el) {
  const parent = el.parentElement;
  const err = parent.querySelector('.invalid-feedback');
  if (!err) return;

  el.classList.remove('is-invalid');
  parent.removeChild(err);
}