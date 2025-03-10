import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {Link} from 'react-router-dom';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
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
    <h1> Selected Projects </h1>
      <Carousel
        swipeable={false}
        draggable={true}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoplay={true}
        autoPlaySpeed={1000}
        keyBoardControl={false}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <div>
          <img src="https://picsum.photos/400" alt="placeholder" />
          <p>Item 1</p>
        </div>

        <div>
          <img src="https://picsum.photos/400" alt="placeholder" />
          <p>Item 2</p>
        </div>

        <div>
          <img src="https://picsum.photos/400" alt="placeholder" />
          <p>Item 3</p>
        </div>

        <div>
          <img src="https://picsum.photos/400" alt="placeholder" />
          <p>Item 4</p>
        </div>
      </Carousel>
      
      <button className="more-button" Link to="/projects"> More projects</button>
      
    </>
  );
}
