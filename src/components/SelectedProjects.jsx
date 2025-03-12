import { Link } from "react-router-dom";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Marquee from "react-fast-marquee";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function SelectedProjects() {
  return (
    <>
      <h4> My projects are: </h4>

      <div>
        <AnimationOnScroll animateIn="animate__fadeIn">
          <h1 className="selected-projects">Intuitive</h1>
        </AnimationOnScroll>

        <AnimationOnScroll animateIn="animate__fadeIn">
          <h1 className="selected-projects">User Centric</h1>
        </AnimationOnScroll>

        <AnimationOnScroll animateIn="animate__fadeIn">
          <h1 className="selected-projects">Responsive</h1>
        </AnimationOnScroll>

        <AnimationOnScroll animateIn="animate__fadeIn">
          <h1 className="selected-projects">Functional</h1>
        </AnimationOnScroll>

        <AnimationOnScroll animateIn="animate__fadeIn">
          <h1 className="selected-projects">Robust</h1>
        </AnimationOnScroll>
      </div>

      <Marquee pauseOnHover="true">
        <div>
          <img src="https://picsum.photos/400" alt="placeholder" />
        </div>

        <div>
          <img src="https://picsum.photos/400" alt="placeholder" />
        </div>

        <div>
          <img src="https://picsum.photos/400" alt="placeholder" />
        </div>

        <div>
          <img src="https://picsum.photos/400" alt="placeholder" />
        </div>

        <div>
          <img src="https://picsum.photos/400" alt="placeholder" />
        </div>

        <div>
          <img src="https://picsum.photos/400" alt="placeholder" />
        </div>
      </Marquee>
    </>
  );
}
