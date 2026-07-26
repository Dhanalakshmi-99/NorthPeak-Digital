const form = document.getElementById("contactForm");

form.addEventListener("submit",(e)=>{

    e.preventDefault();

    alert("Message Sent Successfully!");

    form.reset();

});