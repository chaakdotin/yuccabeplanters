import React, { useEffect, useRef } from 'react'
import gsap from "gsap";
import "./contact.css"
import Footer from './Footer'
export default function ContactUs() {

  const shoot = () => {
    
    const element = document.querySelector('.js-copy');
    const value = element.getAttribute('data-str');
    // Copy to clipboard
    navigator.clipboard.writeText(value).then(() => {
      document.querySelector('.w-remove').classList.remove("w-flips")
      document.querySelector('.w-remove').classList.add("w-copy");
    }).catch(err => {
      console.error('Failed to copy:', err);
    });
  }
  useEffect(() => {
    const copyhover = document.querySelector('.c-link-li');
    copyhover.addEventListener("mouseleave",(e) => {
      document.querySelector('.w-remove').classList.remove("w-copy")
      document.querySelector('.w-remove').classList.add("w-flips");
    });
    const tracking = document.querySelector('.cursor-track');
    tracking.addEventListener('mousemove', function(e) {
      const x = e.clientX-150;
      const y = e.clientY-100;
      gsap.to('#tracker', {
        x: x,
        y: y,
        duration: 1,
        delay: 0.2,
        ease: 'power2.out'
      });
    });
  });
  return (
    <>
    <div className='cursor-track position-relative w-100 h-100vh'>
        <div
            id="tracker"
            style={{
            position: "absolute",
            top:"-20%",
            left:"-0%",
            background: "radial-gradient(circle, rgba(235, 205, 141, 1) 10%, rgba(235, 205, 141, .1) 70%, transparent 100%)",
            opacity:.5,
            color: "#fff",
            padding: 5,
            width:500,
            height:500,
            borderRadius:"100%",
            zIndex:-1,
            boxShadow: "rgb(225 255 0 / 75%) 0px 0px 20px 2",
            display:"flex",
            alignItems:"center",
            justifyContent:"center"
            }}
        >
            {/* <div style={{width:100, height:100,borderRadius:"100%", background: "#0000FF",}}></div> */}
        </div>

        <div className='container' style={{paddingTop:220}}>
            <div className='d-flex flex-column justify-content-center col-12 pb-5'>
            <div className='text-center'>
                <span className="getintouch" style={{fontSize: '8.68vw', fontWeight:600,fontFamily: "Markpro",letterSpacing:-3}}>Get In Touch</span>
            </div>
            <div className='d-flex justify-content-center pt-2' style={{}}>
                <p className='getintouch-para' style={{fontSize:'max(1.043vw, 12px)',width:"calc((2.0848vw - 2.777vw*2/48)*22)", color:"#3e3e3e",fontFamily: "PPMori,Noto Sans JP,Noto Sans SC,sans-serif", fontWeight:100, lineHeight:1.2}}>
                    We’d love to hear from you. Whether you’re an architect, a designer, a brand, or simply someone who loves beautiful spaces—let’s create something timeless together. 
                    Have a project in mind? Need a custom piece? Or just curious about how our planters can elevate your space? Drop us a message, and we’ll be right there—ready to bring your green vision to life.
                </p>
            </div>
            </div>
        </div>
        <div className='w-100 pb-5'>
            <div className="c-body">
            <div className="c-link-b c-link-ul">
                <div className="c-link-li" data-d="8">
                <a href="hello@yuccabeplanters.com" onClick={(e) => {
                    e.preventDefault(); // prevent page jump
                }} className="c-link-title c-link-copy h4 c-clip w-500 c-copy js-copy" data-str="hello@yuccabeplanters.com">
                    <div className="o">
                    <div className="t" data-anim="0">
                        <div className="w w-flex">
                        <div className="w-label f-s">(mail)</div>
                        <div className="w-flip">
                            <div className='w-flips w-remove' style={{fontFamily:"PPMori,Noto Sans JP,Noto Sans SC,sans-serif"}}>
                            <div>hello@yuccabeplanters.com</div>
                            <div onClick={shoot}>Copy to clipboard</div>
                            <div>Copied</div>
                            </div>						
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="b"></div>
                </a>
                </div>
                <div className="c-link-li">
                <a href="tel:08872727786" className="c-link-title h4 c-clip c-copy w-500" data-d="12">
                    <div className="o">
                    <div className="t" data-anim="0">
                        <div className="w w-flex">
                        <div className="w-label f-s">(phone)</div>
                        <div className="w-flip">
                            <div className='w-flips' style={{fontFamily:"PPMori,Noto Sans JP,Noto Sans SC,sans-serif"}}>
                            <div>+91-99716-14948</div>
                            <div>91-99716-14948</div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="b"></div>
                </a>
                </div>
            </div>
            </div>
        </div>
    </div>
    <div style={{}} className="bg-color  contact-us">
       <div className="container h-100vh ">
            <div className='row h-100 align-items-center'>
                <div className="col-lg-6 col-md-6 col-sm-12 contact-us-info " style={{textAlign:"left"}}>
                    <div className='py-5'>
                        <div className='text-white'>
                            <h1 className="poppins-medium">Have a vision for your space?</h1>
                        </div>
                        <div className='text-white description'>
                            <span className="poppins-medium">We’re here to make it a reality. Whether you’re looking for innovative planters, custom designs, or expert advice, we’re just a call or click away</span>
                        </div>
                    </div>
                    <div className='text-white tagline'>
                        <span className="poppins-medium">We collaborate with ambitious companies and aesthetes.</span>
                    </div>
                    <div className='text-white tagline'>
                        <span className="poppins-medium">Are you one?</span>
                    </div>
                    <div className='text-white py-2 lastline'>
                        <span className="poppins-medium">Making a change starts with one conversation.
                            Let’s talk!
                        </span>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 px-5 form">
                    <form action="https://yuccabeplanters.chaak.in/api/contact.php" method='POST'>
                        <div className='px-5 poppins-medium' style={{textAlign:"left"}}>
                            <div className="form-floatings mt-3 mb-3 form-group">
                                <label for="your-name" className="form-label">Your name<span>*</span></label>
                                <input type="text" className="form-control" name="your-name" id="your-name" placeholder='Name you’d like us to remember.' required/>
                            </div>
                            <div className="form-floatings mt-3 mb-3 form-group">
                                <label for="email-address" className="form-label">Email Address<span>*</span></label>
                                <input type="text" className="form-control" name="email-address" id="email-address" placeholder='We promise — no spam, just style.' required/>
                            </div>
                            <div className="form-floatings mt-3 mb-3 form-group">
                                <label for="contact-number" className="form-label">Contact Number<span>*</span></label>
                                <input type="text" className="form-control" name="contact-number" id="contact-number" placeholder='Prefer a call? Share your number.' required/>
                            </div>
                            <div className="form-floatings mt-3 mb-3 form-group">
                                <label for="company" className="form-label">Company<span>*</span></label>
                                <input type="text" className="form-control" name="company" id="company" placeholder='Tell us where creativity is brewing.' required/>
                            </div>
                            <div className="form-floatings mt-3 mb-3 form-group">
                                <label for="message" className="form-label">Message<span>*</span></label>
                                <input type="text" className="form-control" name="message" id="message" placeholder='Your thoughts, ideas, or questions...' required/>
                            </div>
                            <div>
                                <button className='btn btn-white' style={{ borderRadius: '30px', padding: '10px 30px', fontSize:14 }}> Send your Message</button>
                            </div>
                        </div>
                    </form>
                    <style>
                        {`
                            .color-box {
                                background: radial-gradient(circle at center, rgba(255, 255, 255, 1) 0%, rgba(235, 205, 141, 1) 50%);
                                background-size: 200% 200%;
                                animation: moveWhite 4s infinite;
                            }

                            @keyframes moveWhite {
                                0%   { background-position: 30% 30%; }
                                20%  { background-position: 80% 40%; }
                                40%  { background-position: 70% 80%; }
                                60%  { background-position: 20% 70%; }
                                80%  { background-position: 10% 20%; }
                                100% { background-position: 30% 30%; }
                            }
                            .btn-white {
                                background-color:#fff;
                            }
                            .btn-white:hover{
                                background-color:#000!important;
                                color:#fff!important;
                            }
                        `}
                    </style>

                </div>
                <Footer />
            </div>
            
        </div>
    </div> 
    </>
  )
}
