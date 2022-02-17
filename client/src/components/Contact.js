import React, {useState} from 'react'
import "./contact.css"



function Contact() {
    return (
 <div class="form-container">
      <form class="register-form">
        {/* Uncomment the next line to show the success message */}
        {/* <div class="success-message">Success! Thank you for registering</div> */}
        <input
          id="first-name"
          class="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        />
        {/* Uncomment the next line to show the error message */}
        {/* <span id="first-name-error">Please enter a first name</span> */}
        <input
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
        {/* Uncomment the next line to show the error message */}
        {/* <span id="last-name-error">Please enter a last name</span> */}
        <input
          id="email"
          class="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />
        {/* Uncomment the next line to show the error message */}
        {/* <span id="email-error">Please enter an email address</span> */}
        <button class="form-field" type="submit">
          Contact Us
        </button>
      </form>
    </div>
  );
}
















// function Contact() {
//     return (
//         <div className="c-container">
//             <form>
//                 <input placeholder="name"/><br />
//                 <input placeholder="name"/><br />
//                 <input placeholder="name"/><br />
//                 <input placeholder="name"/><br />
//                 <input placeholder="name"/><br />
//                 <input placeholder="name"/><br />
//                 <input placeholder="name"/><br />
//                 <input placeholder="name"/>
//             </form>   
//         </div>
//     )
// }

export default Contact
