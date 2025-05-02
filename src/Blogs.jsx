import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import css from './Blogs.css?raw';

export default function Blogs() {
    const [blogs, setBlogs] = useState([]);
     useEffect(() => {
        fetch('https://yuccabeplanters.chaak.in/api/blogs.php')
        .then((res) => res.json())
        .then((data) => {
            setBlogs(data);
        })
        .catch((err) => {
            console.error('API Error:', err);
            setLoading(false);
        });
    }, []);
    
    return (
        <>
            <style>{css}</style>
            <div className="tp-blog-standard-area pt-170">
                <div className="container container-1500">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="tp-blog-standard-thumb-box p-relative">
                                <img
                                    className='w-100'
                                    data-speed=".8"
                                    src="https://html.hixstudio.net/liko-prev/liko/assets/img/inner-blog/blog-standard/blog-1.jpg"
                                    alt=""
                                    style={{
                                        translate: "none",
                                        rotate: "none",
                                        scale: "none",
                                        transform: "translate(0px, 0.00021px)",
                                        willChange: "transform"
                                    }}
                                    data-lag={0}
                                />
                                <div className="tp-blog-standard-title-box d-none d-sm-block">
                                    <h4
                                        className="tp-blog-standard-title tp-char-animation"
                                        style={{ perspective: 300 }}
                                    >
                                        <div style={{ position: "relative", display: "inline-block" }}>
                                            <div
                                                style={{
                                                    position: "relative",
                                                    display: "inline-block",
                                                    translate: "none",
                                                    rotate: "none",
                                                    scale: "none",
                                                    opacity: 1,
                                                    visibility: "inherit",
                                                    transform: "translate(0px, 0px)"
                                                }}
                                            >
                                                O
                                            </div>
                                            <div
                                                style={{
                                                    position: "relative",
                                                    display: "inline-block",
                                                    translate: "none",
                                                    rotate: "none",
                                                    scale: "none",
                                                    opacity: 1,
                                                    visibility: "inherit",
                                                    transform: "translate(0px, 0px)"
                                                }}
                                            >
                                                u
                                            </div>
                                            <div
                                                style={{
                                                    position: "relative",
                                                    display: "inline-block",
                                                    translate: "none",
                                                    rotate: "none",
                                                    scale: "none",
                                                    opacity: 1,
                                                    visibility: "inherit",
                                                    transform: "translate(0px, 0px)"
                                                }}
                                            >
                                                r
                                            </div>
                                        </div>{" "}
                                        <div style={{ position: "relative", display: "inline-block" }}>
                                            <div
                                                style={{
                                                    position: "relative",
                                                    display: "inline-block",
                                                    translate: "none",
                                                    rotate: "none",
                                                    scale: "none",
                                                    opacity: 1,
                                                    visibility: "inherit",
                                                    transform: "translate(0px, 0px)"
                                                }}
                                            >
                                                N
                                            </div>
                                            <div
                                                style={{
                                                    position: "relative",
                                                    display: "inline-block",
                                                    translate: "none",
                                                    rotate: "none",
                                                    scale: "none",
                                                    opacity: 1,
                                                    visibility: "inherit",
                                                    transform: "translate(0px, 0px)"
                                                }}
                                            >
                                                e
                                            </div>
                                            <div
                                                style={{
                                                    position: "relative",
                                                    display: "inline-block",
                                                    translate: "none",
                                                    rotate: "none",
                                                    scale: "none",
                                                    opacity: 1,
                                                    visibility: "inherit",
                                                    transform: "translate(0px, 0px)"
                                                }}
                                            >
                                                w
                                            </div>
                                        </div>{" "}
                                        <div style={{ position: "relative", display: "inline-block" }}>
                                            <div
                                                style={{
                                                    position: "relative",
                                                    display: "inline-block",
                                                    translate: "none",
                                                    rotate: "none",
                                                    scale: "none",
                                                    opacity: 1,
                                                    visibility: "inherit",
                                                    transform: "translate(0px, 0px)"
                                                }}
                                            >
                                                P
                                            </div>
                                            <div
                                                style={{
                                                    position: "relative",
                                                    display: "inline-block",
                                                    translate: "none",
                                                    rotate: "none",
                                                    scale: "none",
                                                    opacity: 1,
                                                    visibility: "inherit",
                                                    transform: "translate(0px, 0px)"
                                                }}
                                            >
                                                r
                                            </div>
                                            <div
                                                style={{
                                                    position: "relative",
                                                    display: "inline-block",
                                                    translate: "none",
                                                    rotate: "none",
                                                    scale: "none",
                                                    opacity: 1,
                                                    visibility: "inherit",
                                                    transform: "translate(0px, 0px)"
                                                }}
                                            >
                                                o
                                            </div>
                                            <div
                                                style={{
                                                    position: "relative",
                                                    display: "inline-block",
                                                    translate: "none",
                                                    rotate: "none",
                                                    scale: "none",
                                                    opacity: 1,
                                                    visibility: "inherit",
                                                    transform: "translate(0px, 0px)"
                                                }}
                                            >
                                                j
                                            </div>
                                            <div
                                                style={{
                                                    position: "relative",
                                                    display: "inline-block",
                                                    translate: "none",
                                                    rotate: "none",
                                                    scale: "none",
                                                    opacity: 1,
                                                    visibility: "inherit",
                                                    transform: "translate(0px, 0px)"
                                                }}
                                            >
                                                e
                                            </div>
                                            <div
                                                style={{
                                                    position: "relative",
                                                    display: "inline-block",
                                                    translate: "none",
                                                    rotate: "none",
                                                    scale: "none",
                                                    opacity: 1,
                                                    visibility: "inherit",
                                                    transform: "translate(0px, 0px)"
                                                }}
                                            >
                                                c
                                            </div>
                                            <div
                                                style={{
                                                    position: "relative",
                                                    display: "inline-block",
                                                    translate: "none",
                                                    rotate: "none",
                                                    scale: "none",
                                                    opacity: 1,
                                                    visibility: "inherit",
                                                    transform: "translate(0px, 0px)"
                                                }}
                                            >
                                                t
                                            </div>
                                            <div
                                                style={{
                                                    position: "relative",
                                                    display: "inline-block",
                                                    translate: "none",
                                                    rotate: "none",
                                                    scale: "none",
                                                    opacity: 1,
                                                    visibility: "inherit",
                                                    transform: "translate(0px, 0px)"
                                                }}
                                            >
                                                s
                                            </div>
                                        </div>{" "}
                                        <div style={{ position: "relative", display: "inline-block" }}>
                                            <div
                                                style={{
                                                    position: "relative",
                                                    display: "inline-block",
                                                    translate: "none",
                                                    rotate: "none",
                                                    scale: "none",
                                                    opacity: 1,
                                                    visibility: "inherit",
                                                    transform: "translate(0px, 0px)"
                                                }}
                                            >
                                                W
                                            </div>
                                            <div
                                                style={{
                                                    position: "relative",
                                                    display: "inline-block",
                                                    translate: "none",
                                                    rotate: "none",
                                                    scale: "none",
                                                    opacity: 1,
                                                    visibility: "inherit",
                                                    transform: "translate(0px, 0px)"
                                                }}
                                            >
                                                i
                                            </div>
                                            <div
                                                style={{
                                                    position: "relative",
                                                    display: "inline-block",
                                                    translate: "none",
                                                    rotate: "none",
                                                    scale: "none",
                                                    opacity: 1,
                                                    visibility: "inherit",
                                                    transform: "translate(0px, 0px)"
                                                }}
                                            >
                                                t
                                            </div>
                                            <div
                                                style={{
                                                    position: "relative",
                                                    display: "inline-block",
                                                    translate: "none",
                                                    rotate: "none",
                                                    scale: "none",
                                                    opacity: 1,
                                                    visibility: "inherit",
                                                    transform: "translate(0px, 0px)"
                                                }}
                                            >
                                                h
                                            </div>
                                        </div>{" "}
                                        <br />{" "}
                                        <div style={{ position: "relative", display: "inline-block" }}>
                                            {" "}
                                            <div
                                                style={{
                                                    position: "relative",
                                                    display: "inline-block",
                                                    translate: "none",
                                                    rotate: "none",
                                                    scale: "none",
                                                    opacity: 1,
                                                    visibility: "inherit",
                                                    transform: "translate(0px, 0px)"
                                                }}
                                            >
                                                L
                                            </div>
                                            <div
                                                style={{
                                                    position: "relative",
                                                    display: "inline-block",
                                                    translate: "none",
                                                    rotate: "none",
                                                    scale: "none",
                                                    opacity: 1,
                                                    visibility: "inherit",
                                                    transform: "translate(0px, 0px)"
                                                }}
                                            >
                                                o
                                            </div>
                                            <div
                                                style={{
                                                    position: "relative",
                                                    display: "inline-block",
                                                    translate: "none",
                                                    rotate: "none",
                                                    scale: "none",
                                                    opacity: 1,
                                                    visibility: "inherit",
                                                    transform: "translate(0px, 0px)"
                                                }}
                                            >
                                                c
                                            </div>
                                            <div
                                                style={{
                                                    position: "relative",
                                                    display: "inline-block",
                                                    translate: "none",
                                                    rotate: "none",
                                                    scale: "none",
                                                    opacity: 1,
                                                    visibility: "inherit",
                                                    transform: "translate(0px, 0px)"
                                                }}
                                            >
                                                a
                                            </div>
                                            <div
                                                style={{
                                                    position: "relative",
                                                    display: "inline-block",
                                                    translate: "none",
                                                    rotate: "none",
                                                    scale: "none",
                                                    opacity: 1,
                                                    visibility: "inherit",
                                                    transform: "translate(0px, 0px)"
                                                }}
                                            >
                                                l
                                            </div>
                                        </div>{" "}
                                        <div style={{ position: "relative", display: "inline-block" }}>
                                            <div
                                                style={{
                                                    position: "relative",
                                                    display: "inline-block",
                                                    translate: "none",
                                                    rotate: "none",
                                                    scale: "none",
                                                    opacity: 1,
                                                    visibility: "inherit",
                                                    transform: "translate(0px, 0px)"
                                                }}
                                            >
                                                C
                                            </div>
                                            <div
                                                style={{
                                                    position: "relative",
                                                    display: "inline-block",
                                                    translate: "none",
                                                    rotate: "none",
                                                    scale: "none",
                                                    opacity: 1,
                                                    visibility: "inherit",
                                                    transform: "translate(0px, 0px)"
                                                }}
                                            >
                                                o
                                            </div>
                                            <div
                                                style={{
                                                    position: "relative",
                                                    display: "inline-block",
                                                    translate: "none",
                                                    rotate: "none",
                                                    scale: "none",
                                                    opacity: 1,
                                                    visibility: "inherit",
                                                    transform: "translate(0px, 0px)"
                                                }}
                                            >
                                                m
                                            </div>
                                            <div
                                                style={{
                                                    position: "relative",
                                                    display: "inline-block",
                                                    translate: "none",
                                                    rotate: "none",
                                                    scale: "none",
                                                    opacity: 1,
                                                    visibility: "inherit",
                                                    transform: "translate(0px, 0px)"
                                                }}
                                            >
                                                m
                                            </div>
                                            <div
                                                style={{
                                                    position: "relative",
                                                    display: "inline-block",
                                                    translate: "none",
                                                    rotate: "none",
                                                    scale: "none",
                                                    opacity: 1,
                                                    visibility: "inherit",
                                                    transform: "translate(0px, 0px)"
                                                }}
                                            >
                                                u
                                            </div>
                                            <div
                                                style={{
                                                    position: "relative",
                                                    display: "inline-block",
                                                    translate: "none",
                                                    rotate: "none",
                                                    scale: "none",
                                                    opacity: 1,
                                                    visibility: "inherit",
                                                    transform: "translate(0px, 0px)"
                                                }}
                                            >
                                                n
                                            </div>
                                            <div
                                                style={{
                                                    position: "relative",
                                                    display: "inline-block",
                                                    translate: "none",
                                                    rotate: "none",
                                                    scale: "none",
                                                    opacity: 1,
                                                    visibility: "inherit",
                                                    transform: "translate(0px, 0px)"
                                                }}
                                            >
                                                i
                                            </div>
                                            <div
                                                style={{
                                                    position: "relative",
                                                    display: "inline-block",
                                                    translate: "none",
                                                    rotate: "none",
                                                    scale: "none",
                                                    opacity: 1,
                                                    visibility: "inherit",
                                                    transform: "translate(0px, 0px)"
                                                }}
                                            >
                                                t
                                            </div>
                                            <div
                                                style={{
                                                    position: "relative",
                                                    display: "inline-block",
                                                    translate: "none",
                                                    rotate: "none",
                                                    scale: "none",
                                                    opacity: 1,
                                                    visibility: "inherit",
                                                    transform: "translate(0px, 0px)"
                                                }}
                                            >
                                                y
                                            </div>
                                        </div>
                                    </h4>
                                </div>
                                <div className="tp-blog-standard-meta d-none d-sm-block">
                                    <span>
                                        OCT <br /> 21
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="blog-details-realated-area pt-120 pb-70">
                <div className="container">
                    <div className="row">
                        {
                            blogs.map((data) => {
                                return ( 
                                    <div className="col-xl-4 col-lg-6 col-md-6 mb-50" key={data.Entry_ID}>
                                        <div className="tp-blog-item">
                                            <div className="tp-blog-thumb fix p-relative">
                                                <img src={data.Main_Image} alt="" />
                                                <div className="tp-blog-meta">
                                                    <span>{data.Blog_Post_Date}. {data.Blog_Post_Month}. {data.Blog_Post_Year}</span>
                                                </div>
                                            </div>
                                            <div className="tp-blog-content">
                                                <span>{data.Category}</span>
                                                <h4 className="tp-blog-title-sm fs-4" style={{lineHeight:1.1}}>
                                                    <a href={data.Blog_Link}>{data.Blog_Title}</a>
                                                </h4>
                                                <p style={{fontFamily: "PPMori,Noto Sans JP,Noto Sans SC,sans-serif"}}>
                                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est aspernatur atque sunt! Magnam iure, laudantium nesciunt tenetur saepe tempora libero Lorem ipsum
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        }
                        
                    </div>
                </div>
            </div>
             <style>{`.footer-bg-color { background-color: #d9d4c5!important; margin-bottom:20px; }`}</style>
            <Footer />
        </>
    )
}
