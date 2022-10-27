import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-from-state';
const form = document.querySelector('.feedback-form')
// console.log(form)


form.addEventListener('submit', onForm);
form.addEventListener('input', throttle(saveData, 3000));

if(localStorage.getItem(STORAGE_KEY)){
    const formData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    for (let key in formData){
        form.elements[key].value = formData[key];
    }
}

function saveData(e){
    const formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) ||{};
   formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
}

function onForm (e){
    const email = e.target.elements.email.value
    const messag = e.target.elements.message.value
    e.preventDefault();
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY)
    console.log({email, messag})
  
}