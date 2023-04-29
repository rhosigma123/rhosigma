function sendMail(){
    var params = {
        name:document.getElementById("name").value ,
        email:document.getElementById("email").value ,
        phone:document.getElementById("phone").value ,
        subject:document.getElementById("subject").value ,
        message:document.getElementById("message").value,
        submit:document.getElementById("submit").value

    };
const serviceId ="service_rqc4sln";
const templateId ="template_7cts4wx"

emailjs.send(serviceId,templateId,params)
.then(
    res=>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("message").value = "";
        // console.log(res);
        alert("Your Message Sent Successfull")
    }
).catch(err=>console.log(err));
}

// const contactForm = document.getElementById("contact-form");
// contactForm.addEventListener("submit", function(event) {
//     event.preventDefault();
//     send(contactForm);
// });