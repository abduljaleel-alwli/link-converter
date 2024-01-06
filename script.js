
//Get form element
var form=document.getElementById("convert-link");
function submitForm(event){
   //Preventing page refresh
   event.preventDefault();
}
//Calling a function during form submission.
form.addEventListener('submit', submitForm);


const convert_button = document.getElementById('convert-button');
const normal_link = document.getElementById('normal-link');
const message = document.getElementById("message");

normal_link.onkeyup = () => {
    console.log(';alsdjkf');
    message.style.display = 'none'
}

convert_button.addEventListener('click', () => {
    if (normal_link.value.includes('http')) {
        const converted_link = document.getElementById('converted-link');
        const newLink = decodeURIComponent(normal_link.value);
        converted_link.value = newLink;

        converted_link.select();
        converted_link.setSelectionRange(0, 99999);
        document.execCommand("copy");

        message.innerHTML = '🤗 تم نسخ الرابط'
        message.style.display = 'block'
        setTimeout(() => {
            message.style.display = 'none'
        }, 5000);
    }else{
        message.innerHTML = '🙃 خطاء في عنوان الرابط'
        message.style.display = 'block'
        setTimeout(() => {
            message.style.display = 'none'
        }, 5000);
    }
});