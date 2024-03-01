// Regular expressions
const regexTwoCharacters =
  /^(?! )[\wáéíóúüñÁÉÍÓÚÜÑ.,?!¡¿\s-][\w\dáéíóúüñÁÉÍÓÚÜÑ.,?!¡¿\s-]{0,48}[\wáéíóúüñÁÉÍÓÚÜÑ.,?!¡¿\s-](?! )$/;

const regexDecimalNumber = /^\d+([.,]\d+)?$/;

const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateForm(values: Contact) {
  return {
    name: regexTwoCharacters.test(values.name),
    email: regexEmail.test(values.email),
    phone: regexTwoCharacters.test(values.phone),
    message: regexTwoCharacters.test(values.message),
    allFields:
      regexTwoCharacters.test(values.name) &&
      regexEmail.test(values.email) &&
      regexTwoCharacters.test(values.phone) &&
      regexTwoCharacters.test(values.message),
  };
}
