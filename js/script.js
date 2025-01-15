//DOM handler function
const $ = (id) => document.getElementById(id)

//DISABLE REGISTER BUTTON IF TERMS IS UNCHECKED
if(!$('terms').checked){
    $('register').disabled = true
}

//TOGGLE REGISTER BUTTON IF TERMS IS UNCHECKED
const checkDisabled = () => {
    $('register').disabled = !$('register').disabled
}

//PROCESS ENTRIES
function processEntries()  {
    "use strict"
    //DEFINE GENERIC LOCAL VARIABLES
    let header = ''
    let html = ''
    let required = '<span>Required Field</span>'
    let message = 'Review your entries and complete all required fields.'

    //COLLECT VALUES FROM FORM ELEMENTS
    let email = $('email_address').value
    let phone = $('phone').value
    let country = $('country').value
    let contact = 'Text'
    if($('email').checked){
        contact = 'Email'
    }
    if($('none').checked){
        contact = 'None'
    }
    let terms = ''
    if($('terms').checked){
        terms = 'I Accept'
    }
    //CHECK FOR EMPTY VALUES
    if(email === ''){
        email = required
        header = message
    }
    if(phone === ''){
        phone = required
        header = message
    }
    if(country === ''){
        country = required
        header = message
    }
    if(terms === ''){
        terms = required
        header = message
    }

    $('registration_header').innerHTML = header

    //BUILD OUT ERROR MESSAGE IF ANYTHING WRONG ABOVE
    if(header === message){
        html = 

       ` 
        <tr><td>Email:</td><td>${email}</td></tr>
        <tr><td>Phone:</td><td>${phone}</td></tr>
        <tr><td>Country:</td><td>${country}</td></tr>
        <tr><td>Contact:</td><td>${contact}</td></tr>
        <tr><td>Terms:</td><td>${terms}</td></tr></>
        `

        $('registration_info').innerHTML = html
    }
    else{
        $('registration_form').submit()
    }
}

//RESET FORM
const resetform = () =>{
    $('registration_form').reset()
    $('registration_header').innerHTML = ''
    $('registration_info').innerHTML = ''
    $('email_address').focus()
}

$('terms').addEventListener('click',checkDisabled)
$('register').addEventListener('click',processEntries)
$('reset_form').addEventListener('click',resetform)
$('email_address').focus()
