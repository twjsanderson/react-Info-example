import React , { Fragment } from 'react';
import Nav1 from './Navbar';
import { Container, Row, Col } from 'react-bootstrap';
// import video from '../assets/video.mp4';

// 

const Information3 = () => {
  return (
    <Fragment>
      <Nav1 />
      <Container>
        <Row className="p-3 justify-content-center align-items-center">
            <Col md={8} className="text-center">
                <h1 className="text-black">Main Title</h1>
                <p className="text-black pt-3">
                    fermentum iaculis eu non diam phasellus vestibulum lorem sed risus ultricies 
                    tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam 
                    eleifend mi in nulla posuere.
                </p>

            </Col>
        </Row>
        <Row className="h-100 p-3 justify-content-center align-items-center">
            <Container fluid className="videoContainer" style={{ paddingRight: 0, paddingLeft: 0 }}>
                {/* <video className="video" autoPlay loop muted>
                    <source src={video} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video> */}
            </Container>
        </Row>
        <Row className="p-3 justify-content-center align-items-center">
            <Col md={12} className="text-center">
                <p className="text-black pt-3">
                    Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus ultricies 
                    tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam 
                    eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a 
                    scelerisque purus semper eget duis.
                </p>

            </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default Information3;
