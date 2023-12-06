import React from 'react'
import './about.css';

const About = () => {
    return (
        <section className="about" id="About">
            <h1 className="aboutTitle">About me</h1>
            <div className="about__container">
                <div className="about__contents">
                    <div className="image__section">
                        <img src="/vinamra.png" alt="" />
                       
                    </div>

                    <div className="info__section">
                    
                        <h2>Graphics Designer</h2>
                        <p>
                        I am a tech-savvy student pursuing a degree in Computer Science Engineering, with a
                     focus on graphics design and event management. As an adept graphics designer, I bring
                      creativity to life by crafting visually appealing representations. </p>
                        <p>
                        Simultaneously, my
                       role as an event manager allows me to blend technical skills with a talent for
                        orchestrating seamless and memorable experiences. Passionate about technology, 
                    I am dedicated to expanding my knowledge and skills to contribute innovative solutions 
                    in both design and event management.
                        </p>

                        <div className="personal__info">
                            <div><span>Name: </span><span>Vinamra Lama</span></div>
                            <div><span>Age: </span><span>23</span></div>
                            <div><span>Email: </span><span>vinnylama7@gmail.com</span></div>
                            <div><span>Address: </span><span>kathmandu, Nepal</span></div>
                        </div>
                    </div>

                    <div className="skill__section">
                        <div className="skill">                           
                            <div className="subject">Illustrator</div>
                            <div className="progress__bar">

                            <div className="progress__line" value = "79" style = {{maxWidth: '79%'}}></div>
                            </div>
                        </div>

                        <div className="skill">  
                            <div className="subject">Photoshop</div>
                            <div className="progress__bar">

                            <div className="progress__line" value = "58" style = {{maxWidth: `58%`}}></div>
                            </div>
                        </div>

                        <div className="skill">   
                            <div className="subject">UI Design</div>
                            <div className="progress__bar">
                            <div className="progress__line" value = "90" style = {{maxWidth: `90%`}}></div>
                            </div>
                        </div>

                        <div className="skill">  
                            <div className="subject">Web designing</div>
                            <div className="progress__bar">

                            <div className="progress__line" value = "65" style = {{maxWidth: `65%`}}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About