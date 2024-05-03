import React from 'react'
import './about.css'
import photo1 from '../Assets/sam.jpg';
// import photo2 from '../Assets/miki.jpg';

const About = () => {
  return (
<div className='mother'>
<div className='text'>About Us</div>

<div className='mother1'>
<div className='esrael'>
<img src={photo1} alt="" className='image1'/>
<h4>Esrael Wendimu</h4>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting
     industry. Lorem Ipsum has been the industry's standard dummy 
     text ever since the 1500s, when an unknown printer took a galley 
    of type and scrambled it to make a type specimen book. </p>
    <button className='btn1'>See More</button>
</div>
<div className='nahom'>
<img src={photo1} alt="" className='image2' />
<h4>Nahom Mesfin</h4>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting
     industry. Lorem Ipsum has been the industry's standard dummy 
     text ever since the 1500s, when an unknown printer took a galley 
    of type and scrambled it to make a type specimen book. </p>
    <button className='btn2'>See More</button>

</div>
<div className='nati'>
<img src={photo1} alt="" className='image3' />
<h4>Natinael Temesgen</h4>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting
     industry. Lorem Ipsum has been the industry's standard dummy 
     text ever since the 1500s, when an unknown printer took a galley 
    of type and scrambled it to make a type specimen book. </p>
    <button className='btn3'>See More</button>

</div> 
  </div>
    </div>
  )
}

export default About