import React from 'react'
import heroimg from '../images/3d-rendering-website-hosting-concept.jpg';
import image1 from '../images/digital-tablet-online-learning.jpg';
import Card from '../card/Card';
const HeroSection = () => {
  return (
    <div className='container-fluid'>
        <section>
        <div class="image-container ">
  <img class='w-100' src={heroimg} alt="Hero Image" />
  <div class="overlay-text">
  <h3>Make your voice heard.</h3>
<p className='paragraphtext'>You have something to say, and the world deserves to hear it. Get the resources you need to promote your podcast, launch a subscription, grow your audience, and measure your impact.</p>
  </div>
</div>
</section>


<div class="container-fluid text-center m-5 ">
  <div class="row ">
    <div class="col-lg-5 col-md-5 ">
      <h1 className='' >Know your audience</h1>
      <p className='column1'>Analytics help you learn about your listeners — how they listen, where they listen from, and which episodes they enjoy.</p>
    </div>
    <div class="col-lg-6 col-md-5 ">
      <img src={image1} className='img-fluid'/>
    </div>
    
  </div>
</div>
<div className='container-fluid'>
<div className='row justify-content-center'>
   <Card name="hello" description="here text" btn="click1"/>
   <Card name="hey" description="ghania" btn="click2"/>
   <Card name="how" description="developer" btn="click3"/>
   <Card name="who" description="custom" btn="click4"/>
   </div>
</div>


</div>

  )
}

export default HeroSection