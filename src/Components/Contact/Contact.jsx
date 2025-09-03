import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/edusity_assets/msg-icon.png'
import mail_icon from '../../assets/edusity_assets/mail-icon.png'
import phone_icon from '../../assets/edusity_assets/phone-icon.png'
import location_icon from '../../assets/edusity_assets/location-icon.png'
import white_arrow from '../../assets/edusity_assets/white-arrow.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
}


  return (
    <div className='contact'>
        <div className='contact-col'>
            <h3>Send us a message <img src={msg_icon} alt="" /></h3>
            <p>At Gusto Sovet, we’re always ready to hear from you. Whether you’re starting a 
                new project, looking for digital solutions, or need reliable support, our team is here 
                to guide you. Share your ideas with us, and together we’ll create solutions that 
                help your business grow.</p>
                <ul>
                    <li><img src={mail_icon} alt="" /> gavindusaj7@gmail.com </li>
                    <li><img src={phone_icon} alt="" />+94762660008 <img src="" alt="" /></li>
                    <li><img src={location_icon} alt="" />21, Paniyanduwa, <br/>Ambalangoda, SriLanka</li>
                </ul>

        </div>
        <div className='contact-col'>
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type='text' name='name' placeholder='Enter your name' required/>
                <label>Phone Number</label>
                <input type='tel' name='phone' placeholder='Enter Your mobile number' required/>
                <label>Write your message here</label>
                <textarea name='message' rows='6' placeholder='Enter your message' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>

            </form>
            <span>{result}</span>
        </div>

    </div>
  )
}
export default Contact;