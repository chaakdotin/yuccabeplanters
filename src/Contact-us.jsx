import React from 'react'

import "./contact.css"
export default function ContactUs() {
  return (
    <>
     <div style={{}} className="bg-color contact-us">
        <div className="container h-100vh ">
            <div className='row h-100 align-items-center'>
                <div className="col-lg-6 col-md-6 col-sm-12 contact-us-info ">
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
                    <div className='text-white tagline-1'>
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
                        <div className='px-5 poppins-medium'>
                            <div className="form-floatings mt-3 mb-3">
                                <input type="text" className="form-control" name="your-name" id="your-name" placeholder='Your name' />
                                {/* <label htmlFor="your-name">Your name</label> */}
                            </div>
                            <div className="form-floatings mt-3 mb-3">
                                <input type="text" className="form-control" name="email-addresse" id="email-addresse" placeholder='Email Addresse' />
                                {/* <label htmlFor="email-addresse">Email Addresse</label> */}
                            </div>
                            <div className="form-floatings mt-3 mb-3">
                                <input type="text" className="form-control" name="contact-number" id="contact-number" placeholder='Contact number' />
                                {/* <label htmlFor="contact-number">Contact number</label> */}
                            </div>
                            <div className="form-floatings mt-3 mb-3">
                                <input type="text" className="form-control" name="company" id="company" placeholder='Company' />
                                {/* <label htmlFor="company">Company</label> */}
                            </div>
                            <div className="form-floatings mt-3 mb-3">
                                <input type="text" className="form-control" name="message" id="message" placeholder='Message' />
                                {/* <label htmlFor="message">Message</label> */}
                            </div>
                            <div>
                                <button className='btn btn-primary' style={{ borderRadius: '2px', paddingRight: '60px' }}> Submit</button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    </div> 
    </>
  )
}
