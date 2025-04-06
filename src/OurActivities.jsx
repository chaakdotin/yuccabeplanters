import React,{useEffect} from 'react'
import './ourActivities.css'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default  function OurActivities() {
    // Define maximum (active) and minimum (inactive) scale values.
    const sections = Array.from({ length: 10 }, (_, i) => ({
        s_id: i + 1,
        id: `panel${i + 1}`,
        title: `Section ${i + 1}`,
        content: `This is the content for section ${i + 1}.`,
        imageUrl: `https://source.unsplash.com/random/300x300?sig=${i + 1}`,
    }));

    useEffect(() => {
        if (sections.length === 0) return;
        sections.forEach((section, index) => {
            gsap.to(`#${section.id}`, {
              yPercent: -100 * index,
              ease: "none",
              scrollTrigger: {
                trigger: `#${section.id}`,
                start: "top 30%",
                end: "bottom 30%",
                scrub: 1,
                markers: true
              },
            });
        });
          
    }, [sections]);
    return (
        <>
            <svg id="SvgList" aria-hidden="true" style={{display: "none"}}>
                <symbol id="IconLogo" viewBox="0 0 50 22" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_993_500)">
                        <path d="M49.4412 0.557512V12.0051H46.8704V0.557512H49.4412ZM50 0H46.3115V12.5626H50V0Z"></path>
                        <path d="M0 4.16278V21.1111H2.57079V13.3803H9.72429V11.8936H2.57079V5.61231H10.5812V4.12561L0 4.16278Z"></path>
                        <path d="M11.9597 4.16278V21.1111H22.5409V19.6244H14.5305V13.3803H21.684V11.8936H14.5305V5.61231H22.5409V4.12561L11.9597 4.16278Z"></path>
                        <path d="M24.665 4.16279V21.1111H30.6635C32.1728 21.116 33.6454 20.648 34.8737 19.7731C35.3918 19.3825 35.8232 18.8889 36.1404 18.3236C36.448 17.7649 36.6143 17.1397 36.6248 16.5024V8.73439C36.6271 8.11183 36.4734 7.49857 36.1777 6.95035C35.8589 6.38607 35.4279 5.89278 34.9109 5.50082C34.3408 5.05872 33.6978 4.71914 33.0108 4.4973C32.2544 4.24452 31.4612 4.11892 30.6635 4.12562L24.665 4.16279ZM30.6635 5.64949C31.1198 5.65103 31.5728 5.72634 32.0048 5.87249C32.4096 6.01418 32.7784 6.24253 33.0853 6.54151C33.3863 6.82535 33.627 7.1666 33.7932 7.54503C33.9756 7.92772 34.065 8.34794 34.054 8.77155V16.5024C34.0573 16.9253 33.9683 17.3438 33.7932 17.7289C33.6137 18.0997 33.3746 18.4387 33.0853 18.7324C32.7724 19.0236 32.4053 19.2509 32.0048 19.4014C31.5791 19.5714 31.1215 19.6475 30.6635 19.6244H27.2358V5.61232L30.6635 5.64949Z"></path>
                        <path d="M38.8976 3.33337V20.2817H49.4788V18.795H41.4684V3.33337H38.8976Z"></path>
                    </g>
                    <defs>
                        <clipPath id="clip0_993_500">
                            <rect width="50" height="21.1111" fill="white"></rect>
                        </clipPath>
                    </defs>
                </symbol>
                <symbol id="IconFilter" width="26" height="13" viewBox="0 0 26 13" fill="none">
                    <path d="M0 3H26" stroke="#2D2D2B"></path>
                    <path d="M0 10H26" stroke="#2D2D2B"></path>
                    <circle cx="6" cy="3" r="2.5" fill="#F2F2ED" stroke="#2D2D2B"></circle>
                    <circle cx="11" cy="10" r="2.5" fill="#F2F2ED" stroke="#2D2D2B"></circle>
                </symbol>
                <symbol id="IconArrow" viewBox="0 0 10 9.9">
                    <g>
                        <path className="st-arrow" d="M0,5h9.5"></path>
                        <path className="st-arrow" d="M5.5,1.2L9.3,5L5.5,8.8"></path>
                    </g>
                </symbol>
                <symbol id="IconBlank" viewBox="0 0 7.4 7.4">
                    <g>
                        <path className="st-blank" d="M0.4,7.1l6.7-6.7" fill="none" stroke=""></path>
                        <path className="st-blank" d="M1.5,0.5l5.4,0l0,5.4" fill="none"></path>
                    </g>
                </symbol>
                <symbol id="IconList" viewBox="0 0 18 7">
                    <g>
                        <rect width="18" height="1"></rect>
                        <rect y="3" width="18" height="1"></rect>
                        <rect y="6" width="18" height="1"></rect>
                    </g>
                </symbol>
                <symbol id="IconGrid" viewBox="0 0 18 8">
                    <g>
                        <rect width="3" height="3"></rect>
                        <rect y="5" width="3" height="3"></rect>
                        <rect x="5" width="3" height="3"></rect>
                        <rect x="10" width="3" height="3"></rect>
                        <rect x="15" width="3" height="3"></rect>
                        <rect x="5" y="5" width="3" height="3"></rect>
                        <rect x="10" y="5" width="3" height="3"></rect>
                        <rect x="15" y="5" width="3" height="3"></rect>
                    </g>
                </symbol>
                <symbol id="IconPlay" viewBox="0 0 9 12">
                    <path d="M0.500001 1.66987L8 6L0.500001 10.3301L0.500001 1.66987Z"></path>
                </symbol>
            </svg>
            <div
                data-animation="fv-title1"
                className='fixed-header'
                style={{ transform: "perspective(400px)" }}
            >
                <h1
                    id="HomeTitle"
                    className="home_1st_header_title font-en-hd"
                    data-words-split=""
                    data-als-section-1-title=""
                    style={{ transformOrigin: "left center", transform: "scale(1) rotate(0.0001deg)",display: 'flex',justifyContent: 'start', }} >
                    <span
                        className="word-split_i"
                        style={{
                            display: "inline-flex",
                            marginRight: "0.2em",
                            transform: "rotate(0.001deg)",
                        }} 
                    >
                        Our
                    </span>
                    <span
                        className="word-split_i"
                        style={{
                            display: "inline-flex",
                            transform: "rotate(0.001deg)",
                        }}>
                        Our Activities
                    </span>
                </h1>
                <div className="articles_header_container " data-als-section-3-head="" >
                    <ul
                        className="articles_header"
                        style={{ translate: "none", rotate: "none", scale: "none" }}
                    >
                        <li className="articles_header_i font-en-df">No.</li>
                        <li className="articles_header_i font-en-df">Title</li>
                        <li className="articles_header_i font-en-df">Category</li>
                        <li className="articles_header_i font-en-df">Date</li>
                    </ul>
                    <div
                        className="articles_header_line"
                        aria-hidden="true"
                        style={{
                            translate: "none",
                            rotate: "none",
                            scale: "none",
                            transform: "rotate(0.0001deg)",
                            opacity: 1,
                        }}
                    ></div>
                </div>
            </div>
            <div className="home_1st_footer" data-als-section-3="" >
                <div className="container-fuild">
                    <div className='dffdfff' data-als-container="" style={{ width: "100%", position: 'fixed', width: '100%', top: '35vh' }}>
                        <ol className="articles_li" data-als-list="">
                            {sections.map(({ s_id, id, title, content, imageUrl }) => (
                                <li className="articles_li_i" data-als-item="" id={id} key={id}>
                                    <a className="articles_li_block" data-als-block="" href="#" style={{}}>
                                        <div className="articles_li_header" data-als-head="" style={{ height: "78px", padding: "0px 30px", textAlign: "left" }}>
                                            <p className="articles_li_num font-en-df">{s_id}</p>
                                            <h2 className="articles_li_title font-en-df">〔column〕街中の家・自然の中の家</h2>
                                            <p className="articles_li_cat font-en-df">Articles</p>
                                            <p className="articles_li_date font-en-df">
                                                <time dateTime="2025-02-13">2025.02.13</time>
                                            </p>
                                        </div>
                                        <div className="articles_li_body" data-als-body="" style={{ height: "55vh" }}>
                                            <div className="articles_li_body_inner">
                                                <p className="articles_li_body_num font-en-df">001</p>
                                                <div className="articles_li_body_more font-en-df"  >
                                                    <div className="articles_li_body_more_in" style={{ translate: "none", rotate: "none", scale: "none", clipPath: "inset(0%)", transform: "translate(0px, 0%) rotate(0.001deg)", }} >
                                                        Show Detail
                                                        <svg viewBox="0 0 10 9.9" aria-hidden="true" style={{ translate: "none", rotate: "none", scale: "none", transform: "translate(0%, 0px) rotate(0.001deg)", }}>
                                                            <use href="#IconArrow"></use>
                                                        </svg>
                                                    </div>
                                                </div>

                                                <div className="articles_li_body_img"
                                                    data-img-src-2x="https://fedl.jp/wp/wp-content/uploads/2025/02/8_SunkenRetreat-1440x1033.jpg" data-img-src="https://fedl.jp/wp/wp-content/uploads/2025/02/8_SunkenRetreat-720x517.jpg" data-img-src-mobile-3x="https://fedl.jp/wp/wp-content/uploads/2025/02/8_SunkenRetreat-1170x839.jpg" data-img-src-mobile-2x="https://fedl.jp/wp/wp-content/uploads/2025/02/8_SunkenRetreat-780x560.jpg" data-img-src-mobile="https://fedl.jp/wp/wp-content/uploads/2025/02/8_SunkenRetreat-390x280.jpg" data-img-src-tablet-2x="https://fedl.jp/wp/wp-content/uploads/2025/02/8_SunkenRetreat-768x551.jpg" data-img-src-tablet="https://fedl.jp/wp/wp-content/uploads/2025/02/8_SunkenRetreat-384x275.jpg" data-als-img="" data-gl-img="" data-gl-item="article-item-thumb" style={{ opacity: 1 }} >
                                                    
                                                        <img
                                                            src="./img/YP.jpg"
                                                            alt="(column) 街中の家・自然の中の家"
                                                        />
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        </>
    )
}
