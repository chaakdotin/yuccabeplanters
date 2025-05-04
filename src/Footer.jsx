import React from 'react'
import './footer.css'
export default function Footer() {
    return (
        <>
            <div className='container justify-content-start footer-bg-color' style={{ backgroundColor: "#fff", borderRadius: "30px" }}>
                <div className='row col-12 p-4'>
                    <div className='col-lg-6 col-sm-12 d-flex content-center'>
                        <img src="./yp.svg" alt="" style={{ width: "185px", height: "90px", position: "relative", top: "-25px"}}/>
                    </div>
                    <div className='col-lg-6 col-sm-12 d-flex justify-content-between'>
                        <div className='col-lg-2'>
                            <div className='d-grid justify-content-start'>
                                <div className='' style={{textAlign: 'left'}}>
                                    <h1 style={{fontSize: "25px"}}>Explore</h1>
                                </div>
                                <div className='d-flex flex-column align-items-center gap-1' style={{textAlign: 'left'}}>
                                    <a className="Link_default__VBYZf" href="/services">Services</a>
                                    <a className="Link_default__VBYZf" href="/collections">Collections</a>
                                    <a className="Link_default__VBYZf" href="/blogs">Blogs</a>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-2'>
                            <div className='d-grid justify-content-start'>
                                <div style={{textAlign: 'left'}}>
                                    <h1 style={{fontSize: "25px"}}>Company</h1>
                                </div>
                                <div className='d-flex flex-column align-items-center gap-1' style={{textAlign: 'left'}}>
                                    <a className="Link_default__VBYZf" href="/about-us">About Us</a>
                                    <a className="Link_default__VBYZf" href="#">Home</a>
                                    <a className="Link_default__VBYZf" href="#">Home</a>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-2'>
                            <div className='d-grid justify-content-start'>
                                <div style={{textAlign: 'left'}}>
                                    <h1 style={{fontSize: "25px"}}>Support</h1>
                                </div>
                                <div className='d-flex flex-column align-items-center gap-1' style={{textAlign: 'left'}}>
                                    <a className="Link_default__VBYZf" href="#">Privacy Policy</a>
                                    <a className="Link_default__VBYZf" href="#">Terms of Use</a>
                                    <a className="Link_default__VBYZf" href="/contact">Contact Us</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row gap-1 copyright-socialmedia'>
                        <div className='col-lg-6 col-md-6 d-flex  copyright-div'>
                            <p className="Typography_variant-monoCaption__CtFq1 Typography_variant-mono__xLZrF Typography_weight-normal__omiiB my-2 px-3" data-variant-name="monoCaption">
                                © 2025 
                                <a className="Link_default__VBYZf Link_discreet__Qrwpa" href="#"  rel="noopener"> Yuccabe.</a>
                            </p>
                        </div>
                        <div className="SiteFooter_socials__TI9kV col-lg-6 col-md-6 d-flex my-2">
                            <a href="#" aria-label="YouTube">
                                <svg viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M25.2369 2.81657C24.9488 1.7152 24.1044 0.847011 23.0335 0.550447C21.0772 0 13.2517 0 13.2517 0C13.2517 0 5.42649 0 3.47016 0.529578C2.41989 0.825828 1.55487 1.71536 1.26679 2.81657C0.751953 4.82818 0.751953 9 0.751953 9C0.751953 9 0.751953 13.1928 1.26679 15.1834C1.55518 16.2846 2.3993 17.1528 3.47031 17.4494C5.44709 18 13.252 18 13.252 18C13.252 18 21.0772 18 23.0335 17.4704C24.1045 17.174 24.9488 16.3058 25.2372 15.2046C25.7518 13.1928 25.7518 9.02118 25.7518 9.02118C25.7518 9.02118 25.7724 4.82818 25.2369 2.81657ZM10.7602 12.8541V5.14593L17.2675 9L10.7602 12.8541Z" fill="#000"></path>
                                </svg>
                            </a>
                            <a href="#" aria-label="Twitter">
                                <svg viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.4096 2.08321C20.9313 2.29532 20.4348 2.46265 19.9252 2.5838C20.4867 2.0503 20.9088 1.38302 21.1469 0.638207C21.2149 0.425576 20.9839 0.241709 20.7919 0.355557C20.0831 0.775989 19.3196 1.09139 18.5226 1.2931C18.4764 1.30481 18.4286 1.31074 18.3808 1.31074C18.2356 1.31074 18.0945 1.25684 17.9834 1.159C17.1354 0.411614 16.0448 0 14.9124 0C14.4225 0 13.9278 0.0763706 13.442 0.227012C11.9371 0.693792 10.7759 1.9352 10.4116 3.46681C10.2749 4.04129 10.2379 4.6163 10.3015 5.17583C10.3088 5.24013 10.2784 5.28501 10.2597 5.30606C10.2268 5.34295 10.1801 5.36411 10.1316 5.36411C10.1262 5.36411 10.1207 5.36384 10.1152 5.36332C6.82088 5.05726 3.85025 3.47017 1.75045 0.894455C1.64337 0.763077 1.43804 0.779191 1.35269 0.925581C0.941499 1.63103 0.724197 2.43788 0.724197 3.2589C0.724197 4.51715 1.22971 5.70292 2.10779 6.56735C1.73854 6.4798 1.38114 6.34191 1.04915 6.15752C0.888538 6.06829 0.690919 6.18298 0.688662 6.36669C0.665672 8.23591 1.76006 9.89916 3.39948 10.6481C3.36646 10.6489 3.33345 10.6493 3.30038 10.6493C3.04051 10.6493 2.77739 10.6242 2.51841 10.5747C2.33753 10.5401 2.18558 10.7117 2.24174 10.8871C2.77387 12.5484 4.20428 13.773 5.91604 14.051C4.49538 15.0047 2.841 15.5077 1.11912 15.5077L0.58232 15.5074C0.416929 15.5074 0.277048 15.6152 0.234899 15.7754C0.193381 15.9332 0.269857 16.0996 0.410893 16.1817C2.35118 17.3108 4.56435 17.9076 6.81212 17.9076C8.77965 17.9076 10.6201 17.5172 12.2824 16.7472C13.8063 16.0413 15.1529 15.0322 16.2849 13.7479C17.3394 12.5516 18.164 11.1706 18.7357 9.64328C19.2807 8.18741 19.5688 6.63396 19.5688 5.15085V5.0802C19.5687 4.84206 19.6764 4.61798 19.8643 4.46545C20.5774 3.88651 21.1983 3.205 21.7098 2.43987C21.8449 2.23784 21.6319 1.98464 21.4096 2.08321Z" fill="#000"></path>
                                </svg>
                            </a>
                            <a href="#" aria-label="Instagram">
                                <svg viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                        d="M5.65119 0H12.8893C15.8308 0 18.224 2.39317 18.224 5.33478V12.5729C18.224 15.5145 15.8309 17.9076 12.8893 17.9076H5.65119C2.70958 17.9076 0.316406 15.5145 0.316406 12.5729V5.33478C0.316406 2.39317 2.70958 0 5.65119 0ZM12.8878 16.1058C14.8391 16.1058 16.421 14.5239 16.421 12.5725V5.33444C16.421 3.38306 14.8391 1.80117 12.8878 1.80117H5.64968C3.69832 1.80117 2.11641 3.38306 2.11641 5.33444V12.5725C2.11641 14.5239 3.69832 16.1058 5.64968 16.1058H12.8878Z"
                                        fill="#000"></path>
                                    <path fillRule="evenodd" clipRule="evenodd"
                                        d="M4.6416 8.95403C4.6416 6.40022 6.71931 4.32251 9.27315 4.32251C11.827 4.32251 13.9047 6.40019 13.9047 8.95403C13.9047 11.5079 11.827 13.5856 9.27315 13.5856C6.71931 13.5856 4.6416 11.5078 4.6416 8.95403ZM6.4416 8.95368C6.4416 10.5167 7.70864 11.7837 9.27165 11.7837C10.8346 11.7837 12.1017 10.5166 12.1017 8.95368C12.1017 7.39067 10.8346 6.12363 9.27165 6.12363C7.70868 6.12363 6.4416 7.39067 6.4416 8.95368Z"
                                        fill="#000"></path>
                                    <path
                                        d="M13.9125 5.46658C14.5255 5.46658 15.0224 4.9697 15.0224 4.35676C15.0224 3.74383 14.5255 3.24695 13.9125 3.24695C13.2996 3.24695 12.8027 3.74383 12.8027 4.35676C12.8027 4.9697 13.2996 5.46658 13.9125 5.46658Z"
                                        fill="#000"></path>
                                </svg>
                            </a>
                            <a href="#" aria-label="Facebook">
                                <svg viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.3754 0.0037452L7.97684 0C5.28215 0 3.54073 1.73871 3.54073 4.42982V6.47227H1.1291C0.920708 6.47227 0.751953 6.63668 0.751953 6.83949V9.79876C0.751953 10.0016 0.9209 10.1658 1.1291 10.1658H3.54073V17.633C3.54073 17.8358 3.70949 18 3.91788 18H7.06437C7.27276 18 7.44152 17.8356 7.44152 17.633V10.1658H10.2613C10.4697 10.1658 10.6384 10.0016 10.6384 9.79876L10.6396 6.83949C10.6396 6.74211 10.5997 6.64886 10.5291 6.57994C10.4585 6.51103 10.3623 6.47227 10.2622 6.47227H7.44152V4.74086C7.44152 3.90868 7.64529 3.48622 8.75923 3.48622L10.375 3.48566C10.5832 3.48566 10.752 3.32124 10.752 3.11863V0.370775C10.752 0.168347 10.5834 0.00411972 10.3754 0.0037452Z" fill="#000"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
