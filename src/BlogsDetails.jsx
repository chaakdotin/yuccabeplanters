import React, { useEffect, useState, Suspense } from 'react';
import Footer from './Footer';
import css from './BlogsDetails.css?raw';
import { useParams } from 'react-router-dom';
import NotFound from './NotFound';

export default function BlogsDetails() {
    const { title } = useParams();
    const [blogs, setBlogs] = useState([]);
    const [Category, setCategory] = useState([]);
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState(null);
    const [DynamicComponent, setDynamicComponent] = useState(null);

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
        const data = [
            {
                Blog_Link: "How-to-Choose-the Perfect-Planter-for Your-Space",
                file: "top_10_stylish_planters",
                title: "top_10_stylish_planters"
            }
        ];
        setBlogs(data);

        const matched = data.find((item) => item.Blog_Link === title);

        if (matched) {
            setBlog(matched);

            // Dynamic import
            import(`./${matched.file}.jsx`)
                .then((mod) => {
                    setDynamicComponent(() => mod.default);
                })
                .catch((err) => {
                    console.error('Dynamic import failed:', err);
                    setDynamicComponent(() => null);
                });
        }

        setLoading(false);
    }, [title]);

    if (loading) return <p>Loading...</p>;
    if (!blog || DynamicComponent === null) return <NotFound />;

    return (
        <>
            <style>{css}</style>

            <Suspense fallback={<p>Loading blog content...</p>}>
                <DynamicComponent />
            </Suspense>

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
