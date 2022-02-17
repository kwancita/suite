import React, {useState} from 'react'
import "./contact.css"


function Contact() {
  return (
          <div className="c-container">
              <div className="c-div">
                <p className="c-para">If you would like to know more about our hotel or any questions, please feel free to contact us by leaving your information in the form below. Our staff will contact you back asap. Thank you for your support. </p>
              </div>
              <h1>Contact Us</h1>
              <form className="c-form">
                <input
                  className="c-input"
                  id="name"
                  type="text"
                  placeholder="Name"
                  name="name"
                />
                <br />
                <input
                  className="c-input"
                  id="subject"
                  type="text"
                  placeholder="Subject"
                  name="subject"
                />
                <br />
                <input
                  className="c-input"
                  id="email"
                  type="text"
                  placeholder="Email"
                  name="email"
                />
                <br />
                <textarea 
                  className="c-textarea"
                  id="message"
                  type="text"
                  placeholder="Message"
                  name="message"
                />
                <br />
                <button className="c-button" type="submit">
                  Submit
                </button>
              </form>
            </div>
          );
}

export default Contact

// function Contact() {
//     return (
//  <div class="form-container">
//       <form class="register-form">
//         <input
//           id="first-name"
//           class="form-field"
//           type="text"
//           placeholder="First Name"
//           name="firstName"
//         />
//         <input
//           id="last-name"
//           class="form-field"
//           type="text"
//           placeholder="Last Name"
//           name="lastName"
//         />
//         <input
//           id="email"
//           class="form-field"
//           type="text"
//           placeholder="Email"
//           name="email"
//         />
//         <button class="form-field" type="submit">
//           Contact Us
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Contact
