import React from 'react'
import resume from '../assets/Shreyas_Deodhare.pdf' 
function Home() {
  return (
    
    <div className="conatiner-fluid bg-dark text-light min-vh-100 d-flex justify-content-center align-items-center">
      <div className="d-flex flex-column justify-content-center text-center align-items-center">
      <h1>Hello , I am <span className='text-primary display-1 fw-bold' >Shreyas</span></h1>
      <p className='my-info w-50'>
            {/* I am fresher web developer looking for the opportunity to express my knowledge. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid velit dicta voluptatum rem blanditiis magnam voluptatibus vitae. Ipsum, dignissimos unde molestias at hic optio voluptatum beatae nihil, velit quaerat ratione. Quae sed neque fugiat ex! */}
           BTECH(CSE) graduate 2023 from  Walchand Institute of Technology. I am a versatile professional with a strong foundation in data modelling,web dev and software architecture. My programming skills include Python, C++, and SQL, as well as data visualisation using Power BI ,Excel.
I am proficient in Microsoft Cloud Services and have completed various certifications including Microsoft Certified: Azure Data Scientist Associate, Microsoft Certified: Azure Data Fundamentals, Microsoft Certified: AI Fundamentals , AWS Cloud Practitioner Essentials , Oracle Machine Learning using Autonomous Database Associate. 

In addition to my technical expertise, I possess excellent communication and interpersonal skills that enable me to work effectively in a team environment. I am highly adaptable and have the ability to learn and implement new technologies quickly. My passion for data analysis and software engineering motivates me to continually enhance my skills and knowledge. 



          </p>
          <div>
            <a href={resume} className='btn btn-outline-danger mx-3' download> Data Scientist Resume</a>
            <a href="mailto:shreyasdeodhare18@gmail.com" className='btn btn-outline-success'>Contact Me</a>
            <a href="https://www.linkedin.com/in/shreyas-deodhare/"  target= "_blank" className='btn btn-outline-info mx-2'>Connect</a>
          </div>
          </div>
          

      
    </div>
    
    
     
  )
}

export default Home
