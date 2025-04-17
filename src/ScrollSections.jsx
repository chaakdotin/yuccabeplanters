import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger, ScrollToPlugin } from "gsap/all";
import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function ScrollSections({refs}) {
  const panelsRef = useRef([]);
  const navsRef = useRef([]);
  
  useEffect(() => {
      
    const panels = panelsRef.current;
    const navs = navsRef.current;
    panels.forEach((panel, i) => {
      let trigger = ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        scrub:true,
        pin: true,
        pinSpacing: true,
      });

    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  const styles = {
    slide: {
        width: "100%",
        // height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "2rem",
        borderRadius: "10px",
    },
    rectStyle: {
        color: "rgba(0, 0, 0, 0.2)",
        top: "-50px",
        backgroundColor: "transparent",
        right: "-3700px",
        position: "absolute",
    }
};
  return (
    <>

      <section
        key={'bg-color-1'}
        style={styles.slide}
        ref={(el) => {panelsRef.current[0] = el; refs.why.current = el;}}
        id="one"
        className={`panel zn-1`} >
        <div className='d-flex gap-5 align-items-end justify-content-center h-100vh  py-5 position-relative z-1'>
            <div className="col-6 py-5">
                <h1 className='text-white secrion-5-font poppins-medium'>We believe that everyone should be able to co-create their own decor solution that perfectly matches their space and functionality they need.</h1>
            </div>
        </div>
      </section>
      <section
        key={'bg-color'}
        style={styles.slide}
        ref={(el) =>  {panelsRef.current[1] = el; refs.catalogue.current = el;}}
        id="two"
        className={`panel zn-1`} >
        <div className='d-flex gap-5 align-items-end justify-content-center h-100vh  py-5 position-relative z-1'>
          <div className="col-6 py-5">
              <h1 className='text-white secrion-4-font poppins-medium'>We believe that everyone should be able to co-create their own decor solution that perfectly matches their space and functionality they need.</h1>
          </div>
        </div>
      </section>
    </>
  );
}
