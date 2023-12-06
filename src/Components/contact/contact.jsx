import React, { useRef, useState } from 'react'
// import emailjs from 'emailjs-com';
import './contact.css'

const Contact = () => {
    const form = useRef();
    const [data, setData] = useState({name: '' , email: '',message: ''});
    // const handleSubmit = (e)=>{
    //     e.preventDefault();
    //     emailjs.sendForm('service_5oqgdys',
    //     'template_xhwiwe8',
    //     form.current,
    //     'myqDbSzXt7stHJPlU')
    //     .then((res)=>{
    //         alert("Your form has been submitted successfully !!");
    //         setData({name: '' , email: '',message: ''});
    //     }
    //         )
    //     .catch(
    //         err => console.log(err)
    //     );
    // }
    return (
        <section  className="contactSection contactContainer section container contact__section" id = "Contact">
        <div  className="contact">
            <h3>Contact Me</h3>
            <p>I would really love to have your feedbacks. If you have any queries regarding my services, You can contact me with the help of details provided below.</p>
        </div>

        <div  className="section__container">
            <div  className="contactInfo">
                <div  className="infoBox">
                    <div  className="icon">
                        <i  className="fas fa-map-marker-alt"></i>
                    </div>
                    <div  className="text">
                        <h3>Address</h3>
                        <p>Kathmandu , Nepal</p>
                    </div>
                </div>

                <div  className="infoBox">
                    <div  className="icon">
                        <i  className="fas fa-envelope"></i>
                    </div>
                    <div  className="text">
                        <h3>Email</h3>
                        <p>vinamra@gmail.com</p>
                    </div>
                </div>

                <div  className="infoBox">
                    <div  className="icon">
                        <i  className="fas fa-phone"></i>
                    </div>
                    <div  className="text">
                        <h3>Phone</h3>
                        <p>+977 9840936543</p>
                    </div>
                </div>
            </div>
            <div  className="contactForm">
                <form action="#" method = "POST" ref = {form}>
                    <h2>Feedback or Queries</h2>
                    <div  className="inputBox">
                        <input 
                        type="text"
                         name = "name"
                         required = "required" 
                        value = {data.name} 
                        onChange = {(e)=>setData({...data,name:e.target.value})}
                        placeholder="Full Name" />
                        
                    </div>
                    <div  className="inputBox">
                        <input type="email"
                         name = "email" 
                         required = "required" 
                         value = {data.email} 
                         onChange = {(e)=>setData({...data,email:e.target.value})}
                         placeholder="Email Address" />
                        
                    </div>
                    <div  className="inputBox">
                        <textarea type="text" 
                        name = "message" 
                        value = {data.message}
                        onChange = {(e)=>setData({...data,message:e.target.value})}
                         placeholder="Message" />
                    </div>
                    <div  className="inputBox" >
                        <input type="submit" value = "Send" name = "submit" />
                    </div>
                </form>
            </div>
           
            
        </div>

    </section>
  )
}

export default Contact