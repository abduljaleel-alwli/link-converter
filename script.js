
//Get form element
var form=document.getElementById("convert-link");
function submitForm(event){
   //Preventing page refresh
   event.preventDefault();
}
//Calling a function during form submission.
form.addEventListener('submit', submitForm);


const convert_button = document.getElementById('convert-button')

convert_button.addEventListener('click', () => {
    const normal_link = document.getElementById('normal-link')
    const converted_link = document.getElementById('converted-link')
    const newLink = decodeURIComponent(normal_link.value);
    converted_link.value = newLink;

    converted_link.select();
    converted_link.setSelectionRange(0, 99999);
    document.execCommand("copy");
    
    const message = document.getElementById("message")
    message.classList.add('message-show')
    setTimeout(() => {
        message.classList.add('message-close')
    }, 5000);
})