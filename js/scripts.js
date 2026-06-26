/*!
* Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/

//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
    const buttonSendMail = document.getElementById('submitButton')
    function sendEmail() {
        const name = document.getElementById('name')
        const email = document.getElementById('email')
        const phone = document.getElementById('phone')
        const message = document.getElementById('message')
        buttonSendMail.addEventListener('click', async (e)=>{
        e.preventDefault()
        const dataToSend = {
            name : name.value,
            email: email.value,
            phone : phone.value,
            message : message.value 
        }
            console.log(dataToSend);
            await fetch('https://portfolio-4s6v.onrender.com/api/contact/mail',{
            method:'POST',
            headers: {
                    'Accept': 'application/json', 
                    'Content-Type': 'application/json'
                },
                body : JSON.stringify(dataToSend)
        })
        .then(res => res.json())
        .then(()=>{
                console.log('message envoyé')
            })
        .catch(error => console.error())
        })
    }
    const contactForm = document.getElementById('contactForm')
    const inputs = contactForm.querySelectorAll("input, textarea")
    function checkValue(params) {
    let form = true
    inputs.forEach(input => {
        if(input.value === ""){
            form = false
        }
    });
        buttonSendMail.disabled = !form
    }
    inputs.forEach(input=> {
        input.addEventListener('input', checkValue)
    });
    sendEmail()
    
});
