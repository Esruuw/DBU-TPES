import React from 'react'
import './header.css'
import grad from '../Assets/hero-img.png'
import graddd from '../Assets/why-us.png'
import { BiLogoHtml5, BiLogoAndroid, BiBuilding } from 'react-icons/bi';
import photo1 from '../Assets/nahom.jpg';

function Header()
{
  return (
    <div className='all'>
    <div className='navbarr'>
      <nav>
    <h1>Debre Brehan University</h1>
   </nav>   
    </div>

{/* second nav */}
    <div className='secnavbar'>
    <nav>
    <li className="list_nav"> 
    <a href="Header" className="nav_link">
    Home
    </a>
    </li> 

     <li className="list_nav"> 
    <a href="#" className="nav_link">
    About
    </a>
    </li>

    <li className="list_nav"> 
    <a href="#" className="nav_link">
    service
    </a>
    </li>
    <li className="list_nav"> 
    <a href="#" className="nav_link">
    portifolio
    </a>
    </li>
        
    </nav>
    </div>

<div className='firstPage'>
<div className='firstPage1'>
<h1>DBU Teachers Performance 
    Evaluation System</h1>

    <p>Lorem Ipsum is simply dummy text of the printing and typesetting
     industry. Lorem Ipsum has been the industry's standard dummy 
     text ever since the 1500s, when an unknown printer took a galley 
    of type and scrambled it to make a type specimen book. </p>
    <div className='buttons'>
    <button>
    <a href="RegistrationForm" className="nav_link">
    Teacher
   </a> 
   </button>

   <button >
   <a href="RegistrationForm" className="nav_link">
    Student
   </a>  
   </button>
    </div>
  
</div>
<div className='firstPage2'>
</div>
<div className="firstimage">
  <img src={grad} alt=""  />
 </div>
   </div>
{/* borderrrrrrr */}
   <div className="secondpage">

    <div className="secondleft">
    <img src={graddd} alt=""  height={700} width={700} />

    </div>
    <div className="secondright">
<h1>Need of Performance Evaluation</h1>
<p className='par1'>
Teacher performance evaluation is a critical component in educationa
institutions for several reasons. It involves systematically reviewing
and assessing the effectiveness of teachers in fostering learning and
their impact on student achievement.</p>
<p className='par2'>
Feedback for Improvement: Regular evaluations provide teachers with feedback on their 
teaching methods, helping them identify strengths and areas for improvement.
</p>

<p className='par2'>
  Teacher Performance Evaluation: Teachers are evaluated on their teaching effectiveness, 
  teaching skills, and teaching methods.
</p>
<p className='par3'>
Ensuring Standards: Evaluations help ensure that teachers meet certain educational standards 
   and are accountable for their students' performance.
</p>
<p className='par4'>
Alignment with Student Needs: Evaluations can help teachers adapt their methods to better
suit the diverse learning needs of their students.
</p>
    </div>
   </div>
   {/* borderrrrrr */}

   <div className="thirdpage">
   <h1>Our Members</h1>

    <div className='third1'>  
<p className='box1'>
Students
</p>
<p className="box2">

Teachers
</p>

<p className="box3">
Dept Head
</p>
<p className="box4">
Dean
</p>
    </div>
   </div>

   {/* borderrr */}
<div className="fourthpage">
<h1>Contact Us</h1>
<div className='fourth1'>  
<div className='fourthfirst'>
  <p>
   Developers 
  </p>
  
<p className="esru">Esrael</p>
<p className="nahi">Nahom</p>
<p className="nati">Natinael</p>
</div>
{/* borderrrrrrr */}

<div className="fourthsecond">
<p>
   Contact Colleges 
  </p>
<p className="kenu">Kenean</p>
<p className="hale">Halelujah</p>
<p className="amen">Amen</p>
</div>


{/* borderrrrrrr */}
<div className="fourththird">
<p>
   Other 
  </p>
<p className="rich">Kenean</p>
<p className="eba">Halelujah</p>
<p className="roba">Amen</p>
</div>

</div>
</div>

<div className="fifthpage">
<h4>Copyright &copy; 2024, Debre Berhan University.</h4>
</div> 
</div>
  

  
  )
}

export default Header