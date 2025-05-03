import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import css from './BlogsDetails.css?raw';

export default function BlogsDetails5() {
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
                                            Balcony Makeover Ideas Using Yuccabe’s Modern Planter Designs
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
                                    <span>Devansh Kohli</span>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="blog-details-top-meta text-center">
                                    <span>26 February 2025</span>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="blog-details-top-meta text-center">
                                    <span>7 min</span>
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
                                                If you’ve been overlooking your balcony, you’re missing out on one of the most versatile and mood-shifting spaces in your home. With just a few intentional upgrades—starting with thoughtfully designed planters—you can transform your balcony into a green oasis, a reading nook, a morning chai zone, or a full-blown style statement.
                                                At Yuccabe, we believe that even a 3x5 space has design potential. All you need is the right combination of shape, size, placement, and plants—and your balcony makeover begins.
                                            </p>
                                            <p>
                                                Gone are the days when planters were an afterthought—tucked in corners or hidden on balconies. Today, they are carefully chosen, handcrafted, and proudly displayed in living rooms, foyers, lounges, and terraces. The shift is not accidental. It's part of a growing movement toward organic luxury, where nature, design, and craftsmanship come together seamlessly.
                                            </p>
                                        </div>

                                        <div className="blog-details-top-text">
                                            <h4 className="blog-details-left-title">🌿 Go Vertical to Maximize Space</h4>
                                        </div>
                                        <div className="blog-details-left-content">
                                            <p>
                                                For smaller balconies, vertical space is gold. Use Yuccabe’s tall, slim FRP planters along the walls or railing to add height and greenery without sacrificing floor space. You can also create a vertical garden using stackable or wall-mounted planters with trailing greens like money plant, ivy, or philodendron.
                                            </p>
                                        </div>

                                        <div className="blog-details-top-text">
                                            <h4 className="blog-details-left-title">🪟 Define Zones with Planters</h4>
                                        </div>
                                        <div className="blog-details-left-content">
                                            <p>
                                                If you have a slightly larger balcony, divide it into soft zones—like a seating area and a plant corner—using planters as natural partitions. Our dual-tone or geometric fiberglass planters are great for this; they’re visually striking and help section the space without making it feel cramped.
                                            </p>
                                        </div>

                                        <div className="blog-details-top-text">
                                            <h4 className="blog-details-left-title">🪴 Layer Heights for a Lush Look</h4>
                                        </div>
                                        <div className="blog-details-left-content">
                                            <p>
                                                Create a balcony-scape by mixing tall taper planters with short bowls and medium-height pots. This adds visual rhythm and avoids a flat, one-dimensional layout. Go with a theme—like all matte white or earth tones—to keep the look cohesive yet dynamic.
                                            </p>
                                        </div>

                                        <div className="blog-details-top-text">
                                            <h4 className="blog-details-left-title">🪑 Pair Planters with Lounge Vibes</h4>
                                        </div>
                                        <div className="blog-details-left-content">
                                            <p>
                                                A cozy chair, a small table, and a couple of planters—boom, you’ve got a weekend-ready reading corner. Yuccabe’s textured ceramic or rattan-wrapped planters bring softness and a warm natural feel that pairs beautifully with cane, wood, or fabric seating.
                                            </p>
                                        </div>

                                        <div className="blog-details-top-text">
                                            <h4 className="blog-details-left-title">🍃 Add Life to Railings</h4>
                                        </div>
                                        <div className="blog-details-left-content">
                                            <p>
                                                Use railing-mounted planters or place slender pots right against the edge to draw attention to the balcony boundary. This creates a subtle frame around the view and gives the illusion of more depth. Bonus: herbs like basil, mint, or lemongrass work great here!
                                            </p>
                                        </div>

                                        <div className="blog-details-top-text">
                                            <h4 className="blog-details-left-title">🪄 Use Planters as Art</h4>
                                        </div>
                                        <div className="blog-details-left-content">
                                            <p>
                                                Some of Yuccabe’s signature designer pots are made to be seen. Use one sculptural piece as a visual anchor. It could be a ribbed terracotta pot, a glossy ceramic dome, or a custom angular design—let it stand tall and do the talking.
                                            </p>
                                        </div>

                                        <div className="blog-details-top-text">
                                            <h4 className="blog-details-left-title">💡 Play with Light + Planters</h4>
                                        </div>
                                        <div className="blog-details-left-content">
                                            <p>
                                                Add soft lighting like fairy lights or lanterns near or inside your planter layout. Light bouncing off textured finishes like concrete or matte ceramic adds dimension and transforms your balcony at night.
                                            </p>
                                        </div>

                                        <div className="blog-details-top-text">
                                            <h4 className="blog-details-left-title">🌸 Match the Mood with the Material</h4>
                                        </div>
                                        <div className="blog-details-left-content">
                                            <ul className='px-5'>
                                                <li className='py-1'><b>For a minimal, modern balcony:</b> Go with FRP in monochromes</li>
                                                <li className='py-1'><b>For an earthy, boho vibe:</b> Use terracotta, concrete, and rattan textures</li>
                                                <li className='py-1'><b>For a luxe city escape:</b> Try metallics, glossy ceramics, and bold shapes</li>
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
                                                A balcony makeover doesn’t require breaking walls—it just needs the right elements placed with intent. With Yuccabe’s modern planter designs, you don’t just add greenery—you add style, warmth, and a touch of you.
                                            </p>
                                            <p>
                                                So take that balcony you’ve been ignoring and turn it into your favorite spot.
                                            </p>
                                            <p> Small space. Big transformation. One planter at a time.</p>
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
    )
}
