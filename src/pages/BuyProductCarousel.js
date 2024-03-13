import Carousel from 'react-bootstrap/Carousel';
import Watch1 from "../assets/plist/Model_1.png"
import Watch2 from "../assets/plist/Model_2.png"
import Watch3 from "../assets/plist/Model_3.png"
import "./Main.css";

function BuyProductCarousel() {
  return (
    <Carousel>
      <Carousel.Item className="buy-product-car">
        <div class="text-center">
          <img
            className="img-thumbnail"
            src={Watch1}
            alt="First slide"
          />
        </div>
        <Carousel.Caption>
          {/* <h3>First slide label</h3> */}

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="buy-product-car">
        <div class="text-center">
          <img
            className="img-thumbnail"
            src={Watch2}
            alt="Second slide"
          />
        </div>
        <Carousel.Caption>
          {/* <h3>Second slide label</h3> */}

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="buy-product-car">
        <div class="text-center">
          <img
            className="img-thumbnail"
            src={Watch3}
            alt="Third slide"

          />
        </div>
        <Carousel.Caption>
          {/* <h3>Third slide label</h3> */}

        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default BuyProductCarousel;