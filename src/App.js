import './App.css'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import a from './images/SLDR1.jpg'
import b from './images/title3.jpg'
import c from './images/title4.jpg'
import d from './images/favicon.ico.png'
import e from './images/apply.jpg'
import f from './images/search.jpg'
import g from './images/ccl.jpg'
import h from './images/job.jpg'
import i from './images/Contact.jpg'
import { FaBeer } from "react-icons/fa" 
import Marquee from 'react-fast-marquee';

function App() {
  return (
    <div className="App">

      <div id='nav'><div id='em'><span><FaBeer/>contactsatna@vitsdpr.ac.in</span><span>1234567890</span></div>
      <ul class="nav justify-content-end">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#" >Alumni</a>
       </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Apply Now</a>
       </li>
       <li class="nav-item">
          <a class="nav-link" href="#">Admin Login</a>
       </li>
  
      </ul>
   </div>


   <div id='mar'>
     <img id='fav' src={d}></img>
     <Marquee>
        <span id='bold-red' > VINDHYA INSTITUTE OF TECHNOLOGY AND SCIENCE SATNA</span>
     </Marquee>

    </div>

      

    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
       <div className="carousel-item active">
          <img src={a} className="d-block w-100" alt="..."/>
       </div>
       <div className="carousel-item">
          <img src={b} className="d-block w-100" alt="..."/>
       </div>
       <div className="carousel-item">
          <img src={c} className="d-block w-100" alt="..."/>
       </div>
    
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
     </button>
     <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
     </button>
   </div>



   <div className='lg'>
      <a href="#" >
        <img src={e} alt="Apply" />
        <p>ADMISSION</p>
     </a>
      <a href="#" >
        <img src={f} alt="Search" />
        <p>ENQUIRY</p>
     </a>
     <a href="#" >
        <img src={g} alt="Core Committee" />
        <p>CORE COMMITTEE</p>
     </a>
     <a href="#">
        <img src={h} alt="Career" />
        <p>CAREER</p>
     </a>
      <a href="#">
        <img src={i} alt="Contact" />
        <p>CONTACT US</p>
     </a>     
   </div>
   
   

   <div className="card">
     <div className="card-body">
        <h1 className="card-title" ><b>Our Colleges</b></h1>
     </div>
   </div>

   <button className='btn'>
     <div className="row">
       <div className="col-sm-3">
         <div className="card">
           <div className="card-body">
              <h2 className="card-title"><b>VITS</b></h2>
              <p className="card-text">VINDHYA INSTITUTE OF TECHNOLOGY & SCIENCE<hr></hr>
                The Vindhya Institute of Technology and Science (Popularly known as VITS), Satna, a constituent institute of Vindhya group, 
                is rated among the top private engineering colleges in Madhya Pradesh. Established in 2002,
                VITs is one of the first private engineering colleges in the Vindhya region.
             </p>
             <a href={a} className="btn btn-primary">Click here for visit website</a>
           </div>
         </div>
       </div>
       <div className="col-sm-3">
         <div className="card">
           <div className="card-body">
              <h2 className="card-title"><b>VIMR</b></h2>
              <p className="card-text">VINDHYA INSTITUTE OF MANAGEMENT & RESEARCH<hr></hr>
                The group has been triggered by alumni of IIMs and IITs with a bonafied intention to facilitate high quality Professional education in the regions.
                The first endeavor was in the form of Vindhya institute of technology and sciences, Satna.
             </p>
             <a href={a} className="btn btn-primary">Click here for visit website</a>
           </div>
         </div>
       </div>

       <div className="col-sm-3">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title"><b>VIMS</b></h2>
              <p className="card-text">VINDHYA INSTITUTE OF MANAGEMENT & SCIENCE<hr></hr>
                The Vindhya Institute of Management and Sciences (VIMS), is a young, innovative, and enterprising college that has become the leading institution for undergraduate programs in management,
                commerce, and computer application. Unlike conventional academic institutes.
             </p>
             <a href={a} className="btn btn-primary">Click here for visit website</a>
           </div>
         </div>
       </div>

       <div className="col-sm-3">
         <div className="card">
           <div className="card-body">
             <h2 className="card-title"><b>VCP</b></h2>
             <p className="card-text">VITS COLLEGE OF PHARMACY<hr></hr>
               The VITS College of Pharmacy (VCP) is where you train to become a medication expert. 
               The Programs are available that teach you the science behind the drugs, how to create and dispense them safely. 
               This college prepares you for a career helping people through the world of medicines.
             </p>
             <a href={a} className="btn btn-primary">Click here for visit website</a>
           </div>
         </div>
       </div>
     </div>
   </button>
 
 

    </div>
  );
}

export default App;