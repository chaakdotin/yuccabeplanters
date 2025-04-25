import React from 'react'
import css from './about-us.css?raw'
import 'swiper/css';
import Footer from './Footer';
export default function AboutUs() {
    return (
        <>
            <style>{css}</style>
            <div
                className="ab-inner-hero-area ab-inner-hero-bg position-relative"
                data-background="/img/about1.jpg"
                style={{ backgroundImage: 'url("/img/about1.jpg")' }} >
                <div className="breadcurmb-site d-none">
                    <h6>About Us</h6>
                </div>
                <div className="ab-inner-hero-scroll smooth">
                    <a href="#about-info">
                        <span>
                            Scroll to explore
                            <svg
                                width={15}
                                height={30}
                                viewBox="0 0 15 30"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg" >
                                <rect x="6.26001" width="1.5" height={30} fill="currentcolor" />
                                <path
                                    d="M14.0464 22.9768C10.1644 22.9768 7.02312 26.118 7.02312 30"
                                    stroke="currentcolor"
                                    strokeWidth="1.5"
                                    strokeMiterlimit={10}
                                />
                                <path
                                    d="M7.02322 30C7.02322 26.118 3.88198 22.9768 -4.06724e-05 22.9768"
                                    stroke="currentcolor"
                                    strokeWidth="1.5"
                                    strokeMiterlimit={10}
                                />
                            </svg>
                        </span>
                    </a>
                </div>
                <div className="container container-1480">
                    <div className="row">
                        <div className="col-xl-8">
                            <div
                                className="ab-inner-hero-title-box"
                                data-lag="0.2"
                                data-stagger="0.08"
                                style={{
                                    translate: "none",
                                    rotate: "none",
                                    scale: "none",
                                    transform: "translate(0px, 0px)",
                                    willChange: "transform"
                                }}
                                data-speed={1} >
                                <span className="ab-inner-hero-subtitle">
                                    Premium <br />Planter Craftsmanship
                                </span>
                                <h1
                                    className="ab-inner-hero-title tp-char-animation"
                                    style={{ perspective: 300 }} >
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
                                            }} >
                                            The
                                        </div>
                                    </div>
                                    <br />
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
                                            }} >
                                            Yuccabe
                                        </div>
                                    </div>
                                    <br />
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
                                            }} >
                                            Vibe
                                        </div>
                                    </div>
                                </h1>
                                <p>Planters That Breathe Life Into Spaces.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-end">
                        <div className="col-xl-5 col-lg-8">
                            <div
                                className="ab-inner-hero-content"
                                data-lag="0.2"
                                data-stagger="0.08"
                                style={{
                                    translate: "none",
                                    rotate: "none",
                                    scale: "none",
                                    transform: "translate(0px, 0px)",
                                    willChange: "transform"
                                }}
                                data-speed={1} >
                                <p>
                                    Our journey began with a simple idea to bring nature closer to the spaces we live and work in, through design that speaks of elegance and endurance.
                                </p>
                                <a className="tp-btn-white-sm border-style" href="#">
                                    Our Story
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ab-about-area ab-about-mt pb-90 z-index-5">
                <div className="container container-1480">
                    <div className="ab-about-thumb-wrap mb-180">
                        <div className="row align-items-end">
                            <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="ab-about-left-thumb">
                                    <img
                                        data-speed=".7"
                                        src="/img/photu2.jpg"
                                        alt=""
                                        style={{
                                            translate: "none",
                                            rotate: "none",
                                            scale: "none",
                                            transform: "translate(0px, -134.551px)",
                                            willChange: "transform",
                                        }}
                                        data-lag={0}
                                    />
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="ab-about-right-thumb position-relative">
                                    <img
                                        data-speed="1.1"
                                        className="inner-img z-index-5"
                                        src="/img/photu4.jpg"
                                        alt=""
                                        style={{
                                            translate: "none",
                                            rotate: "none",
                                            scale: "none",
                                            transform: "translate(0px, 41.5px)",
                                            willChange: "transform"
                                        }}
                                        data-lag={0}
                                    />
                                    <img
                                        data-speed="0.9"
                                        src="/img/Photu3.jpg"
                                        alt=""
                                        style={{
                                            translate: "none",
                                            rotate: "none",
                                            scale: "none",
                                            transform: "translate(0px, -47.3503px)",
                                            willChange: "transform"
                                        }}
                                        data-lag={0}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="about-info" className="row">
                        <div className="col-xxl-9">
                            <div className="ab-about-content position-relative">
                                <span>
                                    <svg
                                        width={41}
                                        height={46}
                                        viewBox="0 0 41 46"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg" >
                                        <path
                                            d="M20.2573 44.0238C18.1761 44.6511 15.9722 44.4264 14.0462 43.3853C12.1202 42.3442 10.7078 40.6126 10.071 38.51C9.97643 38.2014 9.64869 38.0224 9.34016 38.117C9.03163 38.2116 8.85256 38.5393 8.94717 38.8479C9.67222 41.2447 11.2902 43.2269 13.486 44.413C15.6922 45.6031 18.2126 45.8664 20.5992 45.1374C20.9005 45.0459 21.0868 44.715 20.9922 44.4065C20.8904 44.1011 20.5658 43.9292 20.2573 44.0238ZM37.6132 22.6896C37.311 22.7985 37.1526 23.1342 37.2615 23.4363L38.2557 26.2265C39.2905 29.1269 39.0625 32.3414 37.6261 35.0506C36.2696 37.6131 33.9997 39.4875 31.234 40.3255C28.4684 41.1634 25.5401 40.8678 22.9896 39.4804L11.3416 33.1806C11.0583 33.0245 10.7037 33.1311 10.5476 33.4144C10.3915 33.6977 10.4981 34.0522 10.7814 34.2083L22.4294 40.5081C25.2569 42.0373 28.5088 42.3684 31.5687 41.4422C34.6072 40.5255 37.1523 38.4431 38.6545 35.5934C40.2439 32.5937 40.4907 29.0372 39.3542 25.8315L38.3599 23.0413C38.2511 22.7392 37.9154 22.5807 37.6132 22.6896ZM19.4432 41.3502C16.603 42.2127 13.5811 40.5734 12.713 37.7015C12.6184 37.3929 12.2906 37.2139 11.9821 37.3085C11.6736 37.4031 11.4945 37.7308 11.5891 38.0394C12.6464 41.5283 16.3207 43.5187 19.7851 42.4637C20.0865 42.3723 20.2727 42.0414 20.1781 41.7328C20.0866 41.4315 19.7518 41.2556 19.4432 41.3502ZM25.3749 0.522791C25.0664 0.617395 24.8873 0.945141 24.9819 1.25367C25.0765 1.5622 25.4043 1.74127 25.7128 1.64666C30.0171 0.346022 34.5897 2.8173 35.9062 7.15732C36.0008 7.46585 36.3285 7.64492 36.6371 7.55031C36.9385 7.45889 37.1247 7.12796 37.0301 6.81944C35.5212 1.85522 30.2963 -0.967056 25.3749 0.522791ZM27.7399 8.08209C26.9214 8.39518 26.4635 9.24906 26.652 10.1144L28.1973 17.2348L14.2749 9.70684C12.6671 8.82337 10.6168 9.46252 9.76828 11.0719C9.38242 11.7996 9.29014 12.6104 9.46278 13.3631L5.93535 11.4528C4.31647 10.5828 2.27337 11.2188 1.41768 12.8313C0.55802 14.4541 1.17336 16.4893 2.79542 17.3664L3.45091 17.7246C2.70699 18.013 2.09889 18.5489 1.72413 19.2631C0.864475 20.8859 1.47664 22.914 3.09869 23.7911L5.19531 24.9273C4.45139 25.2157 3.84329 25.7516 3.46853 26.4658C2.61205 28.0958 3.22739 30.131 4.84627 31.0009L8.3737 32.9113C8.657 33.0673 9.01153 32.9608 9.16763 32.6775C9.32372 32.3942 9.21719 32.0397 8.93388 31.8836L5.40646 29.9733C4.34783 29.4012 3.94556 28.0751 4.51048 27.0196C5.05717 25.9809 6.38725 25.5683 7.42842 26.1396L17.3044 31.4751C17.5877 31.6312 17.9494 31.5215 18.0983 31.2414C18.2544 30.9581 18.1479 30.6035 17.8646 30.4474L3.65888 22.7634C2.60025 22.1913 2.19798 20.8652 2.76291 19.8098C3.3096 18.771 4.63967 18.3584 5.68084 18.9297L19.8866 26.6137C20.1699 26.7698 20.5244 26.6633 20.6805 26.38C20.8366 26.0967 20.73 25.7421 20.4467 25.586L17.555 24.0085L6.23467 17.8877L3.35242 16.3316C2.2938 15.7595 1.89153 14.4334 2.45645 13.378C3.00314 12.3392 4.33322 11.9266 5.37439 12.4979L19.5801 20.1819L22.4655 21.7452C22.7488 21.9013 23.1105 21.7916 23.2595 21.5115C23.4155 21.2281 23.309 20.8736 23.0257 20.7175L11.6991 14.5825C10.6404 14.0104 10.2382 12.6843 10.8031 11.6289C11.3498 10.5901 12.6799 10.1775 13.721 10.7488L28.1934 18.5707C28.1427 18.7643 28.0715 18.9499 27.9764 19.1206C27.0668 20.8426 26.5493 22.7921 26.4863 24.7444C26.4233 26.6967 26.8173 28.6765 27.6149 30.468L27.723 30.7107C27.8533 31.0033 28.204 31.138 28.4966 31.0077C28.7893 30.8774 28.9239 30.5267 28.7936 30.234L28.6856 29.9913C27.9539 28.3672 27.6044 26.5642 27.6596 24.7864C27.7148 23.0087 28.1856 21.2425 29.0183 19.6744C29.4383 18.8888 29.5598 17.9708 29.3752 17.0952L27.8101 9.8725C27.7464 9.57585 27.9025 9.29254 28.1801 9.18606C29.1088 8.83244 30.1219 8.86033 31.0265 9.2786C31.9486 9.69764 32.6416 10.4667 32.9833 11.4263L36.3555 20.8635C36.4643 21.1657 36.8 21.3241 37.1022 21.2152C37.4043 21.1063 37.5628 20.7707 37.4539 20.4685L34.0818 11.0314C33.6312 9.76953 32.7174 8.77375 31.5113 8.21607C30.3019 7.65124 28.9676 7.61245 27.7399 8.08209ZM26.1787 3.19248C25.8701 3.28708 25.6911 3.61483 25.7857 3.92336C25.8803 4.23188 26.208 4.41095 26.5165 4.31635C29.3639 3.45059 32.3858 5.08993 33.254 7.96187C33.3486 8.27039 33.6763 8.44946 33.9848 8.35486C34.2862 8.26343 34.4724 7.93251 34.3778 7.62398C33.3173 4.12786 29.6391 2.14783 26.1787 3.19248Z"
                                            fill="currentcolor"
                                            stroke="currentcolor"
                                            strokeWidth="0.2"
                                        />
                                    </svg>
                                    Hi!
                                </span>
                                <p
                                    className="tp-dropcap tp_fade_bottom"
                                    style={{
                                        translate: "none",
                                        rotate: "none",
                                        scale: "none",
                                        opacity: 1,
                                        transform: "translate(0px, 0px)"
                                    }} >
                                    We’re Yuccabe.  We don’t just <br/> design planters—we craft experiences that grow with you. Rooted in a passion for form and functionality, Yuccabe Planters brings together timeless craftsmanship, sustainable materials, and design that elevates every space it touches.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row d-none">
                        <div className="col-xl-9">
                            <div className="row">
                                <div className="col-xl-5 col-lg-5 col-md-4 mb-40">
                                    <div className="ab-about-category-title-box position-relative">
                                        <h4 className="ab-about-category-title">
                                            Something <br />
                                            <span>WHAT I DO</span>
                                        </h4>
                                        <img
                                            className="ab-about-shape-1 d-none d-md-block"
                                            src="https://algos.chaak.in/cdn/shop/files/5_59875ccd-c4cd-41c9-8914-4559e833e154.jpg?v=12457141878794322571"
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className="col-xl-7 col-lg-7 col-md-8">
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6 col-md-6 mb-40">
                                            <div
                                                className="ab-about-category-list category-space-1 tp_fade_bottom"
                                                style={{
                                                    translate: "none",
                                                    rotate: "none",
                                                    scale: "none",
                                                    opacity: 1,
                                                    transform: "translate(0px, 0px)"
                                                }} >
                                                <ul>
                                                    <li>Art direction</li>
                                                    <li>Branding</li>
                                                    <li>Content Production</li>
                                                    <li>User Interface Design</li>
                                                    <li>Animation</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 mb-40">
                                            <div
                                                className="ab-about-category-list category-space-2 tp_fade_bottom"
                                                style={{
                                                    translate: "none",
                                                    rotate: "none",
                                                    scale: "none",
                                                    opacity: 1,
                                                    transform: "translate(0px, 0px)"
                                                }} >
                                                <ul>
                                                    <li>Brand Identity</li>
                                                    <li>User Interface</li>
                                                    <li>User Experience</li>
                                                    <li>Responsive Design</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tp-team-area pb-120 fix active">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="tp-team-slider-wrapper">
                                <div className="swiper-container tp-team-slider-active swiper-initialized swiper-horizontal swiper-backface-hidden">
                                    <div className="swiper-wrapper">
                                        <div
                                            className="swiper-slide swiper-slide-active"
                                            style={{ width: "375.167px", marginRight: 30 }}
                                            data-swiper-slide-index={0}>
                                            <div
                                                className="tp-team-item tp-hover-btn-wrapper marque fix mb-30"
                                                style={{
                                                    translate: "none",
                                                    rotate: "none",
                                                    scale: "none",
                                                    transform: "translate(25%, 0px)"
                                                }}>
                                                <div className="tp-hover-btn-item">
                                                    <img
                                                        src="https://algos.chaak.in/cdn/shop/files/5_59875ccd-c4cd-41c9-8914-4559e833e154.jpg?v=12457141878794322571"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="tp-team-content d-none">
                                                    <span>Art direction</span>
                                                    <h4 className="tp-team-title-sm">
                                                        <a href="#">JANE MILLS</a>
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="swiper-slide swiper-slide-next"
                                            style={{ width: "375.167px", marginRight: 30 }}
                                            data-swiper-slide-index={1} >
                                            <div
                                                className="tp-team-item tp-hover-btn-wrapper marque fix mb-30"
                                                style={{
                                                    translate: "none",
                                                    rotate: "none",
                                                    scale: "none",
                                                    transform: "translate(25%, 0px)"
                                                }}
                                            >
                                                <div className="tp-hover-btn-item">
                                                    <img
                                                       src="https://algos.chaak.in/cdn/shop/files/5_59875ccd-c4cd-41c9-8914-4559e833e154.jpg?v=12457141878794322571"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="tp-team-content d-none">
                                                    <span>Art direction</span>
                                                    <h4 className="tp-team-title-sm">
                                                        <a href="#">JIMathis</a>
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="swiper-slide"
                                            style={{ width: "375.167px", marginRight: 30 }}
                                            data-swiper-slide-index={2}
                                        >
                                            <div
                                                className="tp-team-item tp-hover-btn-wrapper marque fix mb-30"
                                                style={{
                                                    translate: "none",
                                                    rotate: "none",
                                                    scale: "none",
                                                    transform: "translate(25%, 0px)"
                                                }}
                                            >
                                                <div className="tp-hover-btn-item">
                                                    <img
                                                        src="https://algos.chaak.in/cdn/shop/files/5_59875ccd-c4cd-41c9-8914-4559e833e154.jpg?v=12457141878794322571"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="tp-team-content d-none">
                                                    <span>Art direction</span>
                                                    <h4 className="tp-team-title-sm">
                                                        <a href="#">Randolph</a>
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="swiper-slide"
                                            style={{ width: "375.167px", marginRight: 30 }}
                                            data-swiper-slide-index={3}
                                        >
                                            <div
                                                className="tp-team-item tp-hover-btn-wrapper marque fix mb-30"
                                                style={{
                                                    translate: "none",
                                                    rotate: "none",
                                                    scale: "none",
                                                    transform: "translate(25%, 0px)"
                                                }}
                                            >
                                                <div
                                                    className="tp-hover-btn-item"
                                                    style={{
                                                        translate: "none",
                                                        rotate: "none",
                                                        scale: "none",
                                                        transform: "translate(0px, 0px)"
                                                    }}
                                                >
                                                    <img
                                                        src="https://algos.chaak.in/cdn/shop/files/5_59875ccd-c4cd-41c9-8914-4559e833e154.jpg?v=12457141878794322571"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="tp-team-content d-none">
                                                    <span>Art direction</span>
                                                    <h4 className="tp-team-title-sm">
                                                        <a href="#">Mullins</a>
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="swiper-slide"
                                            style={{ width: "375.167px", marginRight: 30 }}
                                            data-swiper-slide-index={4}
                                        >
                                            <div
                                                className="tp-team-item tp-hover-btn-wrapper marque fix mb-30"
                                                style={{
                                                    translate: "none",
                                                    rotate: "none",
                                                    scale: "none",
                                                    transform: "translate(25%, 0px)"
                                                }}
                                            >
                                                <div className="tp-hover-btn-item">
                                                    <img
                                                        src="https://algos.chaak.in/cdn/shop/files/5_59875ccd-c4cd-41c9-8914-4559e833e154.jpg?v=12457141878794322571"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="tp-team-content d-none">
                                                    <span>Art direction</span>
                                                    <h4 className="tp-team-title-sm">
                                                        <a href="#">Minor</a>
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="swiper-slide"
                                            style={{ width: "375.167px", marginRight: 30 }}
                                            data-swiper-slide-index={5}
                                        >
                                            <div
                                                className="tp-team-item tp-hover-btn-wrapper marque fix mb-30"
                                                style={{
                                                    translate: "none",
                                                    rotate: "none",
                                                    scale: "none",
                                                    transform: "translate(25%, 0px)"
                                                }}
                                            >
                                                <div className="tp-hover-btn-item">
                                                    <img
                                                        src="https://algos.chaak.in/cdn/shop/files/5_59875ccd-c4cd-41c9-8914-4559e833e154.jpg?v=12457141878794322571"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="tp-team-content d-none">
                                                    <span>Art direction</span>
                                                    <h4 className="tp-team-title-sm">
                                                        <a href="#">Lucas</a>
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ab-funfact-area pb-40 d-none">
                <div className="container container-1480">
                    <div className="row">
                        <div className="col-xl-4">
                            <div className="ab-funfact-title-box">
                                <span className="ab-inner-subtitle mb-25">
                                    <svg
                                        width={12}
                                        height={12}
                                        viewBox="0 0 12 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M12 0C12 3.0432 9.53292 5.5102 6.48975 5.5102C6.48975 2.46701 8.95677 0 12 0Z"
                                            fill="currentcolor"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M0.0231934 0.0231209C3.06639 0.0231209 5.5334 2.49015 5.5334 5.53333C2.4902 5.53333 0.0231934 3.0663 0.0231934 0.0231209Z"
                                            fill="currentcolor"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M6.48975 6.4898C9.53294 6.4898 12 8.95682 12 12C8.95675 12 6.48975 9.53297 6.48975 6.4898Z"
                                            fill="currentcolor"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M5.5102 6.48981C5.5102 9.533 3.04318 12 0 12C0 8.95681 2.46703 6.48981 5.5102 6.48981Z"
                                            fill="currentcolor"
                                        />
                                    </svg>
                                    Fun Facts
                                </span>
                                <h4
                                    className="ab-inner-funfact-title tp_title_anim"
                                    style={{ perspective: 400 }}
                                >
                                    <div
                                        style={{
                                            display: "block",
                                            textAlign: "start",
                                            position: "relative",
                                            translate: "none",
                                            rotate: "none",
                                            scale: "none",
                                            transformOrigin: "234.664px 27px",
                                            transform: "translate3d(0px, 0px, 0px)",
                                            opacity: 1
                                        }}
                                    >
                                        Agency{" "}
                                    </div>
                                    <div
                                        style={{
                                            display: "block",
                                            textAlign: "start",
                                            position: "relative",
                                            translate: "none",
                                            rotate: "none",
                                            scale: "none",
                                            transformOrigin: "234.664px 27px",
                                            transform: "translate3d(0px, 0px, 0px)",
                                            opacity: 1
                                        }}
                                    >
                                        Snapshots
                                    </div>
                                </h4>
                            </div>
                        </div>
                        <div className="col-xl-8">
                            <div className="ab-funfact-wrap">
                                <div className="row gx-75">
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="ab-funfact-item mb-90">
                                            <span>
                                                <i
                                                    data-purecounter-duration={0}
                                                    data-purecounter-end={200}
                                                    className="purecounter"
                                                >
                                                    200
                                                </i>
                                                +
                                            </span>
                                            <p>PROJECTS COMPLETED</p>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="ab-funfact-item mb-90">
                                            <span>
                                                <i
                                                    data-purecounter-duration={0}
                                                    data-purecounter-end={17}
                                                    className="purecounter"
                                                >
                                                    17
                                                </i>
                                                +
                                            </span>
                                            <p>YEARS OF EXPERIENCE</p>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="ab-funfact-item mb-90">
                                            <span>
                                                <i
                                                    data-purecounter-duration={0}
                                                    data-purecounter-end={9}
                                                    className="purecounter"
                                                >
                                                    9
                                                </i>
                                                +
                                            </span>
                                            <p>TEAM MEMBERS</p>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="ab-funfact-item mb-90">
                                            <span>
                                                <i
                                                    data-purecounter-duration={0}
                                                    data-purecounter-end={194}
                                                    className="purecounter"
                                                >
                                                    194
                                                </i>
                                                %
                                            </span>
                                            <p>GROWING AGENCY</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="ab-brand-area pt-120 pb-120 black-bg-2 d-none"
                data-background="assets/img/inner-about/brand/brand-bg-shape.png"
                style={{
                    backgroundImage: 'url("assets/img/inner-about/brand/brand-bg-shape.png")'
                }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="ab-brand-title-box mb-100">
                                <h4 className="ab-brand-title">Our clients</h4>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="ab-brand-wrapper mb-80">
                                <div className="swiper-container ab-brand-slide-active swiper-initialized swiper-horizontal swiper-backface-hidden">
                                    <div
                                        className="swiper-wrapper ab-brand-slide-wrap"
                                        style={{
                                            transitionDuration: "2000ms",
                                            transform: "translate3d(-872.5px, 0px, 0px)"
                                        }}
                                    >
                                        <div
                                            className="swiper-slide"
                                            style={{ width: 129, marginRight: 220 }}
                                            data-swiper-slide-index={4}
                                        >
                                            <div className="ab-brand-item">
                                                <img src="{{'brand-1.png' | asset_url}}" alt="" />
                                            </div>
                                        </div>
                                        <div
                                            className="swiper-slide"
                                            style={{ width: 129, marginRight: 220 }}
                                            data-swiper-slide-index={5}
                                        >
                                            <div className="ab-brand-item">
                                                <img src="{{'brand-1.png' | asset_url}}" alt="" />
                                            </div>
                                        </div>
                                        <div
                                            className="swiper-slide"
                                            data-swiper-slide-index={6}
                                            style={{ width: 129, marginRight: 220 }}
                                        >
                                            <div className="ab-brand-item">
                                                <img src="{{'brand-1.png' | asset_url}}" alt="" />
                                            </div>
                                        </div>
                                        <div
                                            className="swiper-slide swiper-slide-prev"
                                            style={{ width: 129, marginRight: 220 }}
                                            data-swiper-slide-index={0}
                                        >
                                            <div className="ab-brand-item">
                                                <img src="{{'brand-1.png' | asset_url}}" alt="" />
                                            </div>
                                        </div>
                                        <div
                                            className="swiper-slide swiper-slide-active"
                                            style={{ width: 129, marginRight: 220 }}
                                            data-swiper-slide-index={1}
                                        >
                                            <div className="ab-brand-item">
                                                <img src="{{'brand-1.png' | asset_url}}" alt="" />
                                            </div>
                                        </div>
                                        <div
                                            className="swiper-slide swiper-slide-next"
                                            style={{ width: 129, marginRight: 220 }}
                                            data-swiper-slide-index={2}
                                        >
                                            <div className="ab-brand-item">
                                                <img src="{{'brand-1.png' | asset_url}}" alt="" />
                                            </div>
                                        </div>
                                        <div
                                            className="swiper-slide"
                                            style={{ width: 129, marginRight: 220 }}
                                            data-swiper-slide-index={3}
                                        >
                                            <div className="ab-brand-item">
                                                <img src="{{'brand-1.png' | asset_url}}" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-7 col-lg-9">
                            <div
                                className="ab-brand-content tp_title_anim"
                                style={{ perspective: 400 }}
                            >
                                <div
                                    style={{
                                        display: "block",
                                        textAlign: "start",
                                        position: "relative",
                                        translate: "none",
                                        rotate: "none",
                                        scale: "none",
                                        transformOrigin: "338px 54.5859px",
                                        transform: "translate3d(0px, 0px, 0px)",
                                        opacity: 1
                                    }}
                                >
                                    <p>
                                        {" "}
                                        We belive in creating partnerships based on honesty and true
                                        connection. That's why some of the biggest companies stayed with
                                        us for years.{" "}
                                    </p>
                                </div>
                                <div
                                    style={{
                                        display: "block",
                                        textAlign: "start",
                                        position: "relative",
                                        translate: "none",
                                        rotate: "none",
                                        scale: "none",
                                        transformOrigin: "338px 13px",
                                        transform: "translate3d(0px, 0px, 0px)",
                                        opacity: 1
                                    }}
                                >
                                    <span>More about us</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tp-award-area ab-award-style pt-120 pb-120 d-none">
                <div className="container container-1480">
                    <div className="row">
                        <div className="col-xxl-6 col-xl-7">
                            <div className="ab-award-title-sm">
                                <span>
                                    <svg
                                        width={12}
                                        height={12}
                                        viewBox="0 0 12 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M12 0C12 3.0432 9.53292 5.5102 6.48975 5.5102C6.48975 2.46701 8.95677 0 12 0Z"
                                            fill="currentcolor"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M0.0231934 0.0231209C3.06639 0.0231209 5.5334 2.49015 5.5334 5.53333C2.4902 5.53333 0.0231934 3.0663 0.0231934 0.0231209Z"
                                            fill="currentcolor"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M6.48975 6.4898C9.53294 6.4898 12 8.95682 12 12C8.95675 12 6.48975 9.53297 6.48975 6.4898Z"
                                            fill="currentcolor"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M5.5102 6.48981C5.5102 9.533 3.04318 12 0 12C0 8.95681 2.46703 6.48981 5.5102 6.48981Z"
                                            fill="currentcolor"
                                        />
                                    </svg>
                                    Our Awards
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-12">
                            <div className="tp-award-list-thumb-wrap position-relative">
                                <div id="tp-award-thumb" className="tp-award-list-thumb-1">
                                    <img
                                        className="tp-award-list-thumb-1"
                                        src="{{ 'award-1.png' | asset_url }}"
                                        alt=""
                                    />
                                    <img
                                        className="tp-award-list-thumb-2"
                                        src="{{ 'award-2.png' | asset_url }}"
                                        alt=""
                                    />
                                    <img
                                        className="tp-award-list-thumb-3"
                                        src="{{ 'award-3.png' | asset_url }}"
                                        alt=""
                                    />
                                    <img
                                        className="tp-award-list-thumb-4"
                                        src="{{ 'award-4.png' | asset_url }}"
                                        alt=""
                                    />
                                    <img
                                        className="tp-award-list-thumb-5"
                                        src="{{ 'award-5.png' | asset_url }}"
                                        alt=""
                                    />
                                    <img
                                        className="tp-award-list-thumb-6"
                                        src="{{ 'award-6.png' | asset_url }}"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-12">
                            <div className="tp-award-list-wrap">
                                <div
                                    className="tp-award-list-item d-flex align-items-center justify-content-between active tp_fade_bottom"
                                    rel="tp-award-list-thumb-1"
                                    style={{
                                        translate: "none",
                                        rotate: "none",
                                        scale: "none",
                                        opacity: 1,
                                        transform: "translate(0px, 0px)"
                                    }}
                                >
                                    <div className="tp-award-list-content-left d-flex align-items-center">
                                        <span>x2</span>
                                        <p>FWA, Site of the Day</p>
                                    </div>
                                    <div className="tp-award-list-content-right">
                                        <span>Jun 24, 2024</span>
                                    </div>
                                </div>
                                <div
                                    className="tp-award-list-item d-flex align-items-center justify-content-between tp_fade_bottom"
                                    rel="tp-award-list-thumb-2"
                                    style={{
                                        translate: "none",
                                        rotate: "none",
                                        scale: "none",
                                        opacity: 1,
                                        transform: "translate(0px, 0px)"
                                    }}
                                >
                                    <div className="tp-award-list-content-left d-flex align-items-center">
                                        <span>x3</span>
                                        <p>Awwwards Interior Excellence</p>
                                    </div>
                                    <div className="tp-award-list-content-right">
                                        <span>Nov 24, 2022</span>
                                    </div>
                                </div>
                                <div
                                    className="tp-award-list-item d-flex align-items-center justify-content-between tp_fade_bottom"
                                    rel="tp-award-list-thumb-3"
                                    style={{
                                        translate: "none",
                                        rotate: "none",
                                        scale: "none",
                                        opacity: 1,
                                        transform: "translate(0px, 0px)"
                                    }}
                                >
                                    <div className="tp-award-list-content-left d-flex align-items-center">
                                        <span>x1</span>
                                        <p>Loki boundary pushing year in Review 2022</p>
                                    </div>
                                    <div className="tp-award-list-content-right">
                                        <span>Jun 11, 2012</span>
                                    </div>
                                </div>
                                <div
                                    className="tp-award-list-item d-flex align-items-center justify-content-between tp_fade_bottom"
                                    rel="tp-award-list-thumb-4"
                                    style={{
                                        translate: "none",
                                        rotate: "none",
                                        scale: "none",
                                        opacity: 1,
                                        transform: "translate(0px, 0px)"
                                    }}
                                >
                                    <div className="tp-award-list-content-left d-flex align-items-center">
                                        <span>x2</span>
                                        <p>The New Liko Tools Website is Live.</p>
                                    </div>
                                    <div className="tp-award-list-content-right">
                                        <span>Sep 26, 2021</span>
                                    </div>
                                </div>
                                <div
                                    className="tp-award-list-item d-flex align-items-center justify-content-between tp_fade_bottom"
                                    rel="tp-award-list-thumb-5"
                                    style={{
                                        translate: "none",
                                        rotate: "none",
                                        scale: "none",
                                        opacity: 1,
                                        transform: "translate(0px, 0px)"
                                    }}
                                >
                                    <div className="tp-award-list-content-left d-flex align-items-center">
                                        <span>x2</span>
                                        <p>Digital Agencies Worldwide</p>
                                    </div>
                                    <div className="tp-award-list-content-right">
                                        <span>Jun 24, 2021</span>
                                    </div>
                                </div>
                                <div
                                    className="tp-award-list-item d-flex align-items-center justify-content-between tp_fade_bottom"
                                    rel="tp-award-list-thumb-6"
                                    style={{
                                        translate: "none",
                                        rotate: "none",
                                        scale: "none",
                                        opacity: 1,
                                        transform: "translate(0px, 0px)"
                                    }}
                                >
                                    <div className="tp-award-list-content-left d-flex align-items-center">
                                        <span>x1</span>
                                        <p>FWA, Site of the Day</p>
                                    </div>
                                    <div className="tp-award-list-content-right">
                                        <span>Aug 21, 2021</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style>{`.footer-bg-color { background-color: #d9d4c5!important; margin-bottom:20px; }`}</style>
                  <Footer />
        </>

    )
}
