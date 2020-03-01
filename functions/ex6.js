function protect_email(email) {
  let ind = email.indexOf('@');
  let ch = '';
  for (let i = 0; i < email.length; i++) {
    if (i > ind - 4 && i < ind) ch = ch + '.';
    else ch = ch + email[i];
  }
  return ch;
}
let t = 'marwenhanzouli@gmail.com';
console.log(protect_email(t));
