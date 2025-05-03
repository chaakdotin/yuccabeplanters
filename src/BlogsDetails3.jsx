import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import css from './BlogsDetails.css?raw';
export default function BlogsDetails1() {

    const [Category, setCategory] = useState([]);
    useEffect(() => {
        // Load random blogs
        fetch('https://yuccabeplanters.chaak.in/api/RandomBlog.php')
            .then((res) => res.json())
            .then((data) => {
                setCategory(data);
            })
            .catch((err) => {
                console.error('API Error:', err);
            });

        // Simulated blog data
    }, []);


    return (
        <>
            <style>{css}</style>
            <div className="blog-details-area blog-details-without-sidebar">
                <div className="blog-details-without-sidebar p-relative d-flex align-items-end pt-170 pb-70">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="blog-details-content z-index-5">
                                    <span className="blog-details-meta text-black">Creative</span>
                                    <h4
                                        className="blog-details-title tp-text-black tp-char-animation"
                                        style={{ perspective: 300 }}
                                    >
                                        <div style={{ position: "relative", display: "inline-block" }}>
                                            The Ultimate Guide to Choosing the Right Planter for Every Space
                                        </div>
                                       
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container container-1800 ">
                    <div className="blog-details-thumb-wrap">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="blog-details-top-meta text-center">
                                    <span>Kabir Malhotra</span>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="blog-details-top-meta text-center">
                                    <span>17 March 2025</span>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="blog-details-top-meta text-center">
                                    <span>8 min</span>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="blog-details-thumb">
                                    <img
                                        className="w-100"
                                        data-speed=".8"
                                        src="https://html.hixstudio.net/liko-prev/liko/assets/img/inner-blog/blog-details-without-sidebar/blog-details-3.jpg"
                                        alt=""
                                        style={{
                                            translate: "none",
                                            rotate: "none",
                                            scale: "none",
                                            transform: "translate(0px, 0px)",
                                            willChange: "transform"
                                        }}
                                        data-lag={0}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="postbox__area tp-blog-sidebar-sticky-area pt-120 pb-120">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <div className="postbox__wrapper">
                                <div className="row justify-content-center">
                                    <div className="col-xl-8">
                                        {/* 1. Matte Black FRP Cylindrical Planter */}
                                       
                                        <div className="blog-details-left-content">
                                            <p>
                                                When it comes to styling a space with greenery, the planter is just as important as the plant itself. A well-chosen planter doesn’t just hold the plant—it frames it, highlights it, and helps it thrive.
                                            </p>
                                            <p>
                                                But with so many styles, sizes, and finishes out there, how do you choose the right one? Here’s a breakdown to help you find the perfect planter for every corner of your home or outdoor area.
                                            </p>
                                        </div>

                                        <div className="blog-details-top-text">
                                            <h4 className="blog-details-left-title">🏠 Living Room – Statement & Style</h4>
                                        </div>
                                        <div className="blog-details-left-content">
                                            <p>
                                                This is where your planter can truly shine. Choose something bold and sculptural—like a tall FRP planter in matte black or ivory white. It should complement your furniture and act like an art piece on its own. Use it for leafy plants like monstera, fiddle leaf fig, or rubber plant.
                                            </p>
                                            <p>
                                                <b>Tip</b>: Go large and dramatic. The living room is for showcasing.
                                            </p>
                                        </div>

                                        <div className="blog-details-top-text">
                                            <h4 className="blog-details-left-title">🛏️ Bedroom – Calm & Minimal</h4>
                                        </div>
                                        <div className="blog-details-left-content">
                                            <p>
                                                The bedroom is all about rest. Stick with soft colors like beige, sage green, or blush-toned ceramic planters. Choose smaller sizes for bedside tables or corners and go with calming plants like snake plant or peace lily.
                                            </p>
                                            <p>
                                                <b>Tip</b>: Low-maintenance plants with air-purifying properties pair best with subtle, minimal planters.
                                            </p>
                                        </div>

                                        <div className="blog-details-top-text">
                                            <h4 className="blog-details-left-title">🍽️ Dining Area – Balance & Elegance</h4>
                                        </div>
                                        <div className="blog-details-left-content">
                                            <p>
                                                Dining spaces benefit from symmetry and mood. Use mid-sized planters with matching finishes on either side of a buffet or console. Choose elegant finishes—like glossy ceramics or dual-tone metals—and soft foliage like ferns or pothos.
                                            </p>
                                            <p>
                                                <b>Tip</b>: Avoid spiky or overpowering plants here; go for flowy and graceful forms.
                                            </p>
                                        </div>

                                        <div className="blog-details-top-text">
                                            <h4 className="blog-details-left-title">💻 Work Desk – Focus & Freshness</h4>
                                        </div>
                                        <div className="blog-details-left-content">
                                            <p>
                                            Small table-top planters made from ceramic or concrete are perfect for your work desk. They don’t just add charm—they keep you grounded. Choose small greens like ZZ plant, jade, or mini succulents.
                                            </p>
                                            <p>
                                                <b>Tip</b>: Keep it small, clean, and easy to maintain—clutter kills focus.
                                            </p>
                                        </div>

                                        <div className="blog-details-top-text">
                                            <h4 className="blog-details-left-title">🪴 Balcony or Terrace – Bold & Weatherproof</h4>
                                        </div>
                                        <div className="blog-details-left-content">
                                            <p>
                                                Outdoor spaces need durability. Go for FRP or concrete planters that can handle sunlight, rain, and temperature changes. Use a mix of heights to add visual rhythm. Plants like palms, hibiscus, or bamboo fit beautifully.
                                            </p>
                                            <p>
                                                <b>Tip</b>: Choose planters with proper drainage and UV resistance for long-term use.
                                            </p>
                                        </div>

                                        <div className="blog-details-top-text">
                                            <h4 className="blog-details-left-title">🛁 Bathroom – Humidity-Loving & Compact</h4>
                                        </div>
                                        <div className="blog-details-left-content">
                                            <p>
                                                Surprisingly, bathrooms are great for plants! Use compact ceramic planters that match your bathroom palette. Place them on window sills or open shelves. Good plant choices include ferns, aloe vera, or pothos.
                                            </p>
                                            <p>
                                                <b>Tip</b>: Use water-resistant materials and place them away from direct splash zones.
                                            </p>
                                        </div>

                                        <div className="blog-details-top-text">
                                            <h4 className="blog-details-left-title">🚪 Entryway – First Impression Planters</h4>
                                        </div>
                                        <div className="blog-details-left-content">
                                            <p>
                                            The entrance sets the tone. Use tall, symmetrical planters in pairs on either side of your door or console. Go for neutral tones or something bold if your door is plain. Plants like areca palm or rubber plants work well here.
                                            </p>
                                            <p>
                                                <b>Tip</b>: This is a great space to go custom with your planter—get something that reflects your personality or brand.
                                            </p>
                                        </div>

                                        <div className="blog-details-top-text">
                                            <h4 className="blog-details-left-title">🌿 Material Matters</h4>
                                        </div>
                                        <div className="blog-details-left-content">
                                            <ul>
                                                <li>
                                                    <b>FRP (Fibre Reinforced Plastic)</b>: Lightweight, durable, weatherproof—great for all spaces, especially outdoors.
                                                </li>
                                                <li><b>Ceramic</b>: Elegant, premium, and best for indoor use.</li>
                                                <li><b>Concrete</b>: Raw, minimal, and ideal for modern or industrial themes.</li>
                                                <li><b>Terracotta</b>: Warm and earthy, great for rustic or bohemian styles.</li>
                                                <li><b>Metal & Rattan Mixes</b>: Trendy, stylish, and good for contemporary interiors.</li>
                                            </ul>
                                        </div>
                                    </div>

                                    
                                </div>


                                <div
                                    className="blog-details-thumb-box tp_fade_bottom "
                                    style={{
                                        translate: "none",
                                        rotate: "none",
                                        scale: "none",
                                        opacity: 1,
                                        transform: "translate(0px, 0px)"
                                    }}
                                >
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="blog-details-thumb">
                                                <img
                                                    className="mb-20"
                                                    src="https://html.hixstudio.net/liko-prev/liko/assets/img/inner-blog/blog-details-without-sidebar/blog-details-1.jpg"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="blog-details-thumb">
                                                <img
                                                    className="mb-20"
                                                    src="https://html.hixstudio.net/liko-prev/liko/assets/img/inner-blog/blog-details-without-sidebar/blog-details-2.jpg"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row justify-content-center">
                                    <div className="col-xl-8">
                                        <div
                                            className="blog-details-left-content tp_fade_bottom  py-5" 
                                            style={{
                                                translate: "none",
                                                rotate: "none",
                                                scale: "none",
                                                opacity: 1,
                                                transform: "translate(0px, 0px)"
                                            }}
                                        >
                                            <h4 className="blog-details-left-title">
                                                🎯 Final Thoughts
                                            </h4>
                                            <p>
                                                The right planter doesn’t just serve the plant—it serves the space, the vibe, and you. With thoughtful selection, your planters can elevate your interiors, define your outdoors, and reflect your taste in the subtlest yet most powerful ways.
                                            </p>
                                            <p>
                                                At Yuccabe, we help you find planters that don’t just fit—but feel right. And if we can’t find one, we make it for you.
                                            </p>
                                        </div>
                                        <div className="blog-details-share-wrap mb-40">
                                            <div className="row">
                                                <div className="col-xl-8">
                                                    <div className="blog-details-tag">
                                                        <span>
                                                            <svg
                                                                width={17}
                                                                height={17}
                                                                viewBox="0 0 17 17"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M15.371 9.92961L9.7597 15.5409C9.61433 15.6865 9.44171 15.8019 9.25169 15.8807C9.06168 15.9595 8.858 16 8.6523 16C8.44661 16 8.24293 15.9595 8.05292 15.8807C7.8629 15.8019 7.69027 15.6865 7.54491 15.5409L0.822266 8.82613V1H8.64839L15.371 7.72264C15.6626 8.01591 15.8262 8.41262 15.8262 8.82613C15.8262 9.23964 15.6626 9.63634 15.371 9.92961Z"
                                                                    stroke="black"
                                                                    strokeWidth="1.5"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                />
                                                                <path
                                                                    d="M4.73633 4.91333H4.74467"
                                                                    stroke="black"
                                                                    strokeWidth="1.5"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                />
                                                            </svg>
                                                        </span>
                                                        <a href="#">Creative</a>
                                                        <a href="#">Photography</a>
                                                        <a href="#">Lifestyle</a>
                                                    </div>
                                                </div>
                                                <div className="col-xl-4">
                                                    <div className="blog-details-share text-md-end text-start">
                                                        <span>
                                                            <svg
                                                                width={15}
                                                                height={16}
                                                                viewBox="0 0 15 16"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M11.5004 5.2C12.6602 5.2 13.6004 4.2598 13.6004 3.1C13.6004 1.9402 12.6602 1 11.5004 1C10.3406 1 9.40039 1.9402 9.40039 3.1C9.40039 4.2598 10.3406 5.2 11.5004 5.2Z"
                                                                    stroke="#19191A"
                                                                    strokeWidth="1.5"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                />
                                                                <path
                                                                    d="M3.1 10.0999C4.2598 10.0999 5.2 9.1597 5.2 7.9999C5.2 6.8401 4.2598 5.8999 3.1 5.8999C1.9402 5.8999 1 6.8401 1 7.9999C1 9.1597 1.9402 10.0999 3.1 10.0999Z"
                                                                    stroke="#19191A"
                                                                    strokeWidth="1.5"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                />
                                                                <path
                                                                    d="M11.5004 14.9998C12.6602 14.9998 13.6004 14.0596 13.6004 12.8998C13.6004 11.74 12.6602 10.7998 11.5004 10.7998C10.3406 10.7998 9.40039 11.74 9.40039 12.8998C9.40039 14.0596 10.3406 14.9998 11.5004 14.9998Z"
                                                                    stroke="#19191A"
                                                                    strokeWidth="1.5"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                />
                                                                <path
                                                                    d="M4.91211 9.05688L9.69311 11.8429"
                                                                    stroke="#19191A"
                                                                    strokeWidth="1.5"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                />
                                                                <path
                                                                    d="M9.68611 4.15674L4.91211 6.94274"
                                                                    stroke="#19191A"
                                                                    strokeWidth="1.5"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                />
                                                            </svg>
                                                        </span>
                                                        <a href="#">Share Post</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="blog-details-author d-flex mb-60">
                                            <div className="blog-details-author-img">
                                                <img
                                                    src="https://html.hixstudio.net/liko-prev/liko/assets/img/inner-blog/blog-details/avatar/avatar-1.jpg"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="blog-details-author-content-wrap">
                                                <div className="blog-details-author-social text-end">
                                                    <a href="#">
                                                        <i className="fab fa-facebook-f" />
                                                    </a>
                                                    <a href="#">
                                                        <i className="fab fa-twitter" />
                                                    </a>
                                                    <a href="#">
                                                        <i className="fab fa-linkedin-in" />
                                                    </a>
                                                </div>
                                                <div className="blog-details-author-content">
                                                    <h4 className="blog-details-author-title">Lea Cohen</h4>
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                                        sed diam nonumy eirmod tempor.!
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="blog-details-navigation-style mb-120">
                                            <div className="project-details-1-navigation d-flex justify-content-between align-items-center">
                                                <a
                                                    className="project-details-1-prev"
                                                    href="blog-details-without-sidebar.html"
                                                >
                                                    <i className="fa-sharp fa-regular fa-arrow-left" />
                                                    <span>Prev</span>
                                                </a>
                                                <a href="#">
                                                    <span>
                                                        <svg
                                                            width={20}
                                                            height={20}
                                                            viewBox="0 0 20 20"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <circle cx={17} cy={3} r={3} fill="#19191A" />
                                                            <circle cx={3} cy={3} r={3} fill="#19191A" />
                                                            <circle cx={3} cy={17} r={3} fill="#19191A" />
                                                            <circle cx={17} cy={17} r={3} fill="#19191A" />
                                                        </svg>
                                                    </span>
                                                </a>
                                                <a
                                                    className="project-details-1-next"
                                                    href="blog-details-without-sidebar.html"
                                                >
                                                    <span>Next</span>
                                                    <i className="fa-sharp fa-regular fa-arrow-right" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="postbox__comment mb-100">
                                            <h3 className="postbox__comment-title">3 Comments</h3>
                                            <ul>
                                                <li>
                                                    <div className="postbox__comment-box d-flex">
                                                        <div className="postbox__comment-info ">
                                                            <div className="postbox__comment-avater mr-20">
                                                                <img
                                                                    src="https://html.hixstudio.net/liko-prev/liko/assets/img/inner-blog/blog-details/avatar/avatar-3.jpg"
                                                                    alt=""
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="postbox__comment-text">
                                                            <div className="postbox__comment-name d-flex justify-content-between align-items-center">
                                                                <h5>Farhan Firoz</h5>
                                                                <span className="post-meta">
                                                                    {" "}
                                                                    April 8, 2022 at 7:38 am
                                                                </span>
                                                            </div>
                                                            <p>
                                                                Quisque est tortor, condimentum eget faucibus vel,
                                                                condimentum quis felis. Nunc non orci augue.
                                                                Pellentesque elementum gravida arcu.
                                                            </p>
                                                            <div className="postbox__comment-reply">
                                                                <a href="#">Reply</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="children">
                                                    <div className="postbox__comment-box d-flex">
                                                        <div className="postbox__comment-info ">
                                                            <div className="postbox__comment-avater mr-20">
                                                                <img
                                                                    src="https://html.hixstudio.net/liko-prev/liko/assets/img/inner-blog/blog-details/avatar/avatar-4.jpg"
                                                                    alt=""
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="postbox__comment-text">
                                                            <div className="postbox__comment-name d-flex justify-content-between align-items-center">
                                                                <h5>Anne Marie</h5>
                                                                <span className="post-meta">
                                                                    {" "}
                                                                    April 8, 2022 at 7:38 am
                                                                </span>
                                                            </div>
                                                            <p>
                                                                Quisque est tortor, condimentum eget faucibus vel,
                                                                condimentum quis felis. Nunc non orci augue.
                                                            </p>
                                                            <div className="postbox__comment-reply">
                                                                <a href="#">Reply</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="postbox__comment-box d-flex">
                                                        <div className="postbox__comment-info ">
                                                            <div className="postbox__comment-avater mr-20">
                                                                <img
                                                                    src="https://html.hixstudio.net/liko-prev/liko/assets/img/inner-blog/blog-details/avatar/avatar-3.jpg"
                                                                    alt=""
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="postbox__comment-text">
                                                            <div className="postbox__comment-name d-flex justify-content-between align-items-center">
                                                                <h5>Justin Case</h5>
                                                                <span className="post-meta">
                                                                    {" "}
                                                                    April 8, 2022 at 7:38 am
                                                                </span>
                                                            </div>
                                                            <p>
                                                                Quisque est tortor, condimentum eget faucibus vel,
                                                                condimentum quis felis. Nunc non orci augue.
                                                                Pellentesque elementum gravida arcu.
                                                            </p>
                                                            <div className="postbox__comment-reply">
                                                                <a href="#">Reply</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="tp-postbox-details-form">
                                            <h3 className="tp-postbox-details-form-title">Leave a Reply</h3>
                                            <p>
                                                Your email address will not be published. Required fields are
                                                marked *
                                            </p>
                                            <div className="tp-postbox-details-form-wrapper">
                                                <div className="tp-postbox-details-form-inner">
                                                    <form action="#">
                                                        <div className="row">
                                                            <div className="col-xl-12">
                                                                <div className="tp-postbox-details-input-box">
                                                                    <div className="tp-postbox-details-input">
                                                                        <textarea
                                                                            id="msg"
                                                                            placeholder="Write your message here..."
                                                                            defaultValue={""}
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-6">
                                                                <div className="tp-postbox-details-input-box">
                                                                    <div className="tp-postbox-details-input">
                                                                        <input type="text" placeholder="Farhan Firoz" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-6">
                                                                <div className="tp-postbox-details-input-box">
                                                                    <div className="tp-postbox-details-input">
                                                                        <input type="email" placeholder="liko@mail.com" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-12">
                                                                <div className="tp-postbox-details-input-box">
                                                                    <div className="tp-postbox-details-input">
                                                                        <input type="text" placeholder="Website" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div className="tp-postbox-details-suggetions mb-20">
                                                    <div className="tp-postbox-details-remeber d-flex align-items-start">
                                                        <input id="remeber" type="checkbox" />
                                                        <label htmlFor="remeber">
                                                            Save my name, email, and website in this browser for the
                                                            next time I comment.
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="tp-postbox-details-input-box">
                                                    <button className="tp-btn-border-lg" type="submit">
                                                        Post Comment
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="blog-details-realated-area grey-bg-2 pt-90 pb-40">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8">
                            <div className="blog-details-realated-title-box text-center mb-50">
                                <h3 className="blog-details-realated-title">Related posts</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {Category.map((data) => (
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
                                        <h4 className="tp-blog-title-sm fs-4" style={{ lineHeight: 1.1 }}>
                                            <a href={data.Blog_Link}>{data.Blog_Title}</a>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`.footer-bg-color { background-color: #d9d4c5!important; margin-bottom:20px; }`}</style>
            <Footer />
        </>
    );
}
