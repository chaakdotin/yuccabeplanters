import React, { useEffect, useState, Suspense } from 'react';
import Footer from './Footer';
import css from './BlogsDetails.css?raw';
import { useParams } from 'react-router-dom';
import NotFound from './NotFound';

export default function BlogsDetails() {

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
                                            Top 10 Stylish Planters to Elevate Your Home Decor in 2025
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
                                    <span>Mark Hopkins</span>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="blog-details-top-meta text-center">
                                    <span>01 October, 2022</span>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="blog-details-top-meta text-center">
                                    <span>7 mins</span>
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
                                        <div className="blog-details-top-text">
                                            <h4 className="blog-details-left-title">🌿 1. Matte Black FRP Cylindrical Planter</h4>
                                        </div>
                                        <div className="blog-details-left-content">
                                            <p>
                                            Why it works: Clean, modern, and endlessly versatile. Matte black finishes are on-trend and make a powerful contrast against lush green foliage.<br/>
                                            Perfect for: Monstera, fiddle leaf fig, or rubber plants in living rooms and home offices.<br/>
                                            Pro tip: Pair with light wooden furniture or marble floors for a bold, monochrome look.
                                            </p>
                                        </div>

                                        {/* 2. Textured Concrete Bowl Planter */}
                                        <div className="blog-details-top-text">
                                            <h4 className="blog-details-left-title">🪨 2. Textured Concrete Bowl Planter</h4>
                                        </div>
                                        <div className="blog-details-left-content">
                                            <p>
                                            Why it works: The raw, industrial finish of concrete adds a rugged yet artistic touch. The bowl shape feels sculptural and inviting.<br/>
                                            Perfect for: Succulent arrangements, snake plants, or bonsai centerpieces on coffee tables or outdoor patios.<br/>
                                            Pro tip: Choose one with a smooth base or metallic rim for a balanced contrast.
                                            </p>
                                        </div>

                                        {/* 3. Glossy Ceramic in Sage Green */}
                                        <div className="blog-details-top-text">
                                            <h4 className="blog-details-left-title">🍃 3. Glossy Ceramic in Sage Green</h4>
                                        </div>
                                        <div className="blog-details-left-content">
                                            <p>
                                            Why it works: Sage green is dominating color trends this year—offering a fresh, calming tone that suits both minimal and eclectic interiors.<br/>
                                            Perfect for: Ferns, peace lilies, or trailing ivy on shelves or bedroom corners.<br/>
                                            Pro tip: Go with a rounded shape for a soft, spa-like ambiance in personal spaces.
                                            </p>
                                        </div>

                                        {/* 4. Dual-Tone Metallic Planter with Stand */}
                                        <div className="blog-details-top-text">
                                            <h4 className="blog-details-left-title">✨ 4. Dual-Tone Metallic Planter with Stand</h4>
                                        </div>
                                        <div className="blog-details-left-content">
                                            <p>
                                            Why it works: Metallic finishes like bronze, copper, and champagne gold add a hint of luxury, while stands elevate the planter—both literally and visually.<br/>
                                            Perfect for: Statement plants like bird of paradise, areca palm, or rubber plant in lounges and entrances.<br/>
                                            Pro tip: Choose contrasting legs—black or matte gold—for a bolder impact.
                                            </p>
                                        </div>

                                        {/* 5. Sculptural Terracotta Planter */}
                                        <div className="blog-details-top-text">
                                            <h4 className="blog-details-left-title">🌾 5. Sculptural Terracotta Planter</h4>
                                        </div>
                                        <div className="blog-details-left-content">
                                            <p>
                                            Why it works: Natural and timeless, terracotta brings an earthy grounding energy to interiors. The sculptural silhouette modernizes this traditional material.<br/>
                                            Perfect for: Cactus, alocasia, or even dried pampas arrangements in boho or rustic-themed spaces.<br/>
                                            Pro tip: Mix with woven textures and linen fabrics for a true nature-inspired setup.
                                            </p>
                                        </div>

                                        {/* 6. FRP Tall Tapered Planter in Ivory White */}
                                        <div className="blog-details-top-text">
                                            <h4 className="blog-details-left-title">🏛 6. FRP Tall Tapered Planter in Ivory White</h4>
                                        </div>
                                        <div className="blog-details-left-content">
                                            <p>
                                            Why it works: Tall and sleek, this planter adds vertical elegance without overwhelming the space. The ivory finish adds a sense of calm and purity.<br/>
                                            Perfect for: Corners, entryways, and narrow passageways with plants like areca palm or dracaena.<br/>
                                            Pro tip: Place in pairs for symmetry near doorways or open living spaces.
                                            </p>
                                        </div>

                                        {/* 7. Geometric Fiberglass Planter in Charcoal */}
                                        <div className="blog-details-top-text">
                                            <h4 className="blog-details-left-title">🔲 7. Geometric Fiberglass Planter in Charcoal</h4>
                                        </div>
                                        <div className="blog-details-left-content">
                                            <p>
                                            Why it works: Geometry is trending in both furniture and decor. This planter’s edgy design and dark charcoal tone offer a perfect modern contrast.<br/>
                                            Perfect for: Low-maintenance plants like ZZ plant or sansevieria in modern or industrial homes.<br/>
                                            Pro tip: Use on stair landings or against concrete walls for high visual impact.
                                            </p>
                                        </div>

                                        {/* 8. Rattan-Wrapped Indoor Planter */}
                                        <div className="blog-details-top-text">
                                            <h4 className="blog-details-left-title">🌿 8. Rattan-Wrapped Indoor Planter</h4>
                                        </div>
                                        <div className="blog-details-left-content">
                                            <p>
                                            Why it works: Rattan brings in warmth, texture, and a natural touch—perfect for cozy homes and organic modern interiors.<br/>
                                            Perfect for: Snake plant, rubber plant, or bamboo palm in bedrooms, sunrooms, or reading corners.<br/>
                                            Pro tip: Blend with soft fabrics, beige tones, and diffused lighting for a serene space.
                                            </p>
                                        </div>

                                        {/* 9. Gloss White Ripple Planter */}
                                        <div className="blog-details-top-text">
                                            <h4 className="blog-details-left-title">💧 9. Gloss White Ripple Planter</h4>
                                        </div>
                                        <div className="blog-details-left-content">
                                            <p>
                                            Why it works: Gloss finishes reflect light and add elegance, while ripple patterns give subtle texture that plays with depth.<br/>
                                            Perfect for: Orchids, calathea, or philodendron in bathrooms or dressing areas.<br/>
                                            Pro tip: Use in minimal interiors with glass or chrome accents for a soft, upscale effect.
                                            </p>
                                        </div>

                                        {/* 10. Yuccabe Signature Custom Planter */}
                                        <div className="blog-details-top-text">
                                            <h4 className="blog-details-left-title">🛠 10. Yuccabe Signature Custom Planter</h4>
                                        </div>
                                        <div className="blog-details-left-content">
                                            <p>
                                            Why it works: A custom-designed planter tailored to your space, style, and plant choice ensures the perfect harmony of form and function.<br/>
                                            Perfect for: Literally any room, project, or layout—from residential to hospitality.<br/>
                                            Pro tip: Yuccabe’s team helps you design the planter from scratch—material, shape, finish, and placement included.
                                            </p>
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
                                <div className="row justify-content-center d-none">
                                    <div className="col-xl-8">
                                        <div
                                            className="blog-details-left-content tp_fade_bottom"
                                            style={{
                                                translate: "none",
                                                rotate: "none",
                                                scale: "none",
                                                opacity: 1,
                                                transform: "translate(0px, 0px)"
                                            }}
                                        >
                                            <h4 className="blog-details-left-title">
                                                Relationship &amp; Communication
                                            </h4>
                                            <p>
                                                But, like most politicians, he promised more than he could
                                                deliver. Why not indeed! Daylight and everything. And then the
                                                battle’s not so bad? Hello, little man. I will destroy you!
                                                No, I’m Santa Claus! Kif might! Man, I’m sore all over. I feel
                                                like I just went ten rounds with mighty Thor. I found what I
                                                need. And it’s not friends, it’s things. Then we’ll go with
                                                that data file!
                                            </p>
                                        </div>
                                        <div
                                            className="blog-details-blockquote tp_fade_bottom"
                                            style={{
                                                translate: "none",
                                                rotate: "none",
                                                scale: "none",
                                                opacity: 1,
                                                transform: "translate(0px, 0px)"
                                            }}
                                        >
                                            <blockquote>
                                                <span className="quote-icon">
                                                    <svg
                                                        width={90}
                                                        height={66}
                                                        viewBox="0 0 90 66"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M0 42.6672C0 27.2282 7.2986 14.2644 21.8957 3.77586C25.3156 1.25862 27.8597 0 29.528 0C30.6957 0 31.2796 0.755172 31.2796 2.26552C31.2796 3.69195 31.0294 4.7408 30.5289 5.41207C30.1118 5.99943 29.5697 6.54483 28.9024 7.04828C28.2351 7.55172 27.5678 8.01322 26.9005 8.43276C26.2332 8.8523 25.4408 9.48161 24.5232 10.3207C16.3488 17.369 12.2616 24.2494 12.2616 30.9621C12.2616 34.5701 13.7213 36.3741 16.6408 36.3741C28.9024 36.3741 35.0332 41.4506 35.0332 51.6034C35.0332 55.5471 33.5317 58.9034 30.5289 61.6724C27.5261 64.3575 24.2313 65.7 20.6445 65.7C14.055 65.7 8.96682 63.1408 5.3801 58.0224C1.79337 52.8201 0 47.7017 0 42.6672ZM55.0919 42.6672C55.0919 26.9764 62.182 14.1385 76.3621 4.15345C79.6986 1.38448 82.2009 0 83.8692 0C85.5374 0 86.3716 0.755172 86.3716 2.26552C86.3716 3.69195 86.1213 4.69885 85.6208 5.28621C85.2038 5.87356 84.6616 6.46092 83.9943 7.04827C83.327 7.55172 82.6597 8.01322 81.9924 8.43276C81.3251 8.8523 80.5744 9.48161 79.7403 10.3207C71.3156 17.8724 67.1033 24.7529 67.1033 30.9621C67.1033 34.5701 68.6464 36.3741 71.7327 36.3741C83.9109 36.3741 90 41.4086 90 51.4776C90 55.3374 88.4986 58.6937 85.4957 61.5465C82.5763 64.3155 79.2815 65.7 75.6114 65.7C69.1886 65.7 64.1422 63.1828 60.472 58.1483C56.8853 53.0299 55.0919 47.8695 55.0919 42.6672Z"
                                                            fill="#19191A"
                                                            fillOpacity="0.1"
                                                        />
                                                    </svg>
                                                </span>
                                                <p>Don't watch the clock; do what it does. keep going.</p>
                                                <span className="blockquote-info">Sam Levenson</span>
                                            </blockquote>
                                        </div>
                                        <div
                                            className="blog-details-left-content tp_fade_bottom"
                                            style={{
                                                translate: "none",
                                                rotate: "none",
                                                scale: "none",
                                                opacity: 1,
                                                transform: "translate(0px, 0px)"
                                            }}
                                        >
                                            <p>
                                                With any accomplished project, great time management is an
                                                essential component. We business owners hire product
                                                designers, they expect them to not only perform well, but also
                                                on time. At Stan Vision, we provide you with an experienced
                                                design team, led by an expert PM who knows how to prioritise
                                                your platform and product.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog-details-thumb-box d-none">
                                    <div className="row">
                                        <div className="col-xl-12">
                                            <div className="blog-details-thumb">
                                                <img
                                                    className="w-100"
                                                    src="https://html.hixstudio.net/liko-prev/liko/assets/img/inner-blog/blog-details/blog-details-4.jpg"
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
                                                ✨ Final Thoughts
                                            </h4>
                                            <p>
                                                Planters in 2025 are no longer just pots—they’re functional sculptures that reflect your style, support your plants, and shape the vibe of your home. Whether you’re after bold, luxurious statements or soft, natural textures, there’s a perfect planter waiting to elevate your space.
                                            </p>
                                            <p>
                                                Choose pieces that don’t just fit—but feel right. Let your greens thrive, and let your home breathe design.
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
