import React, {useState,component} from "react";
import './UI.css'
import {motion} from "framer-motion";
// import grad_photo from '../Assets/graduation.png'
// import insta_icon from '../Assets/instagram.png'
// import teleg_icon from '../Assets/telegram.png'
// import facebook_icon from '../Assets/facebook.png'
import grad from '../Assets/hero-img.png'
import sch from '../Assets/school.jpg'
import { Navigate } from "react-router-dom";


const textVariants = {
    initial:{
        x: -500,
        opacity:0,
    },
    animate:{
        x:0,
        opacity: 1,
        transition:{
            duration: 1,
            staggerChildren:0.1,
        },
    },
};
function UI()
{
    
const [active, setActive] = useState("nav_menu");
const [toggleIcon, setToggleIcon] =  useState("nav_toggler");

const navToggle = () =>
{
    active === 'nav_menu' 
    ? setActive ("nav_menu nav_active")
    :setActive("nav_menu");

//TagglerIcon
toggleIcon === "nav_toggler"
? setToggleIcon( "nav_toggler toggle")
: setToggleIcon ("nav_toggler");

};

    return(
        <div className="overall">
        
<nav className="nav">

<a href="#" className="nav_brand">Debre Berhan University</a>

<ul className={active}> 
<li className="nav_item"> 
<a href="UI" className="nav_link">
    Home
    </a>
    </li>
    

<li className="nav_item"> 
<a href="About" className="nav_link">
    About
    </a>
    </li>


<li className="nav_item">
     <a href="#" className="nav_link">
        Skills
        </a>
        </li>

<li className="nav_item"> 
<a href="#" className="nav_link">
    Contact
    </a>
    </li>




</ul>
<div onClick = {navToggle} className= {toggleIcon}>
<div className="line1"></div>
<div className="line2"></div>
<div className="line3"></div>

</div>

</nav>
<motion.div className="text_container" 
variants = {textVariants}
initial = "initial"
animate = "animate"
>
    
    <motion.h1 variants = {textVariants}> Teachers Performance Evaluation System</motion.h1>
    <motion.h2 variants = {textVariants}>Teachers Make the Difference!</motion.h2>

    <motion.div variants = {textVariants} className="buttons">
        <motion.button variants = {textVariants}>
            
            <a href="RegistrationForm" className="nav_link">
            Student
           </a>
            </motion.button>
        <motion.button variants = {textVariants}>
            <a href="registration" className="nav_link">
            Teacher
           </a>
            </motion.button>
    </motion.div>
{/* <div className="slidingTextContainer">
Teachers Performance Evaluation

</div> */}
{/* <motion.ul  variants = {textVariants} className="unordered">
    <motion.li variants = {textVariants} className="ordered_list1">
<motion.a variants = {textVariants} href="" >
<img src={insta_icon} alt="https://t.me/Esraelw" height={50} width={30}/>

</motion.a>

    </motion.li>
    <li className="ordered_list2" >
<a href="https://t.me/Esraelw">
<img src={teleg_icon} alt="" height={50} width={30} />

</a>

    </li>
    <li className="ordered_list3">
<a href="https://t.me/Esraelw">
<img src={facebook_icon} alt="" height={50} width={30}  />

</a>

    </li>

</motion.ul> */}

<motion. div className="border">
<img src={grad} alt="" height={900} width={700}  />
</motion.div>

</motion.div>
<div className="addition">
    <div className="first">
    <img src={sch} alt="" height={700} width={900}  />

    </div>

    <div className="second">
<h1>Debre Brehan University</h1>
<div className="second1">
<h1>Community Engagement</h1>

</div>


<div className="second2">
<h1>Innovation and Tecnology</h1>
</div>

<div className="second3">
<h1>Research and Publication</h1>
</div>
</div>
 
</div>



<div className="addition2">

<div className="con1">
<h2>Contact Us</h2>
</div>

<div className="con2">
<h2>Computing College</h2>

</div>

<div className="con3">
<h2>Engineering College </h2>

</div>

<div className="con3">
<h2>About Us </h2>

</div>
</div>

<div className="addition3">
    <h4>Copyright &copy; 2024, Debre Berhan University.</h4>
</div>
</div>


    )
}
export default UI;



