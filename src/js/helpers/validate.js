const regExpDic = {
  email: /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/,
  password: /^[0-9a-zA-Z]{8,}$/,
  nickname: /^[0-9a-zA-Z]{1,}$/,
  phone: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
  firstName: /^[a-zA-Z]{2,}$/,
  lastName: /^[a-zA-Z]{2,}$/,
  birth_date: /^(0?[1-9]|[12][0-9]|3[01])[.](0?[1-9]|1[012])[.]\d{4}$/
};

/**
 *  Function validate. Chck Input on RegExp provided in regExpDic by input data-required type
 * @param {HTMLInputElement} el
 * @returns {Boolean} - Return true if input valid or doesn`t has data-required attr
 */
export function validate(el) {
  const regExpName = el.dataset.required;
  if(!regExpDic[regExpName]) return true;
  return regExpDic[regExpName].test(el.value);
}