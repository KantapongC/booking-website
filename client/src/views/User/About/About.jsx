import React, { Component } from 'react';
import { Row, Col, Typography, Button } from 'antd';
import MediaQuery from 'react-responsive';

import portrait from './img/barber_compressed.jpg';
// import './About.css';

const { Title, Paragraph } = Typography;

export default class About extends Component {
  render() {
    return (
      <div>
        <MediaQuery query='(min-width: 426px)'>
          <Row>
            <Col md={8}>
              <div className='about-portrait'>
                <img src={portrait} alt="K. Mol\'s portrait" />
              </div>
            </Col>
            <Col md={16}>
              <div className='about-content'>
                <div className='about-content-wrapper'>
                  <Title className='about-header'>About us</Title>
                  <Paragraph className='about-text'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore eaque quae nostrum necessitatibus recusandae alias quia! Molestiae, consequuntur quasi perferendis aliquam vero
                    eius accusantium? Debitis voluptatem excepturi molestiae nostrum illum ex quisquam doloremque pariatur. Dolorum in debitis molestias maxime at.
                  </Paragraph>
                  <Paragraph className='about-text'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, animi tenetur! Ullam consequuntur doloribus rerum adipisci optio corporis! Dolores aut eos, similique eius ut
                    amet culpa neque aliquid sed libero.
                  </Paragraph>
                  <div className='contact-btn'>
                    <Button type='primary' icon='phone' size='large'>
                      Contact Us
                    </Button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </MediaQuery>
        <MediaQuery query='(max-width: 425px)'>
          <div className='about-responsive'>
            <img src={portrait} alt="K. Mol\'s portrait" />
            <div className='about-content-responsive'>
              <Title className='about-header-responsive'>About us</Title>
              <Paragraph className='about-text-responsive'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore eaque quae nostrum necessitatibus recusandae alias quia! Molestiae, consequuntur quasi perferendis aliquam vero eius
                accusantium? Debitis voluptatem excepturi molestiae nostrum illum ex quisquam doloremque pariatur. Dolorum in debitis molestias maxime at.
              </Paragraph>
              <Paragraph className='about-text-responsive'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, animi tenetur! Ullam consequuntur doloribus rerum adipisci optio corporis! Dolores aut eos, similique eius ut amet
                culpa neque aliquid sed libero.
              </Paragraph>
              <div className='contact-btn-responsive'>
                <Button type='primary' icon='phone' size='large'>
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </MediaQuery>
      </div>
    );
    // 		<MediaQuery minDeviceWidth={700}>
    //   {(matches) => {
    //     if (matches) {
    //       return <div>Media query matches!</div>;
    //     } else {
    //       return <div>Media query does not match!</div>;
    //     }
    //   }}
    // </MediaQuery>
    // <MediaQuery minDeviceWidth={1770}>
    // 	{matches => {
    // 		console.log(matches);
    // 		if (matches) {
    // 			return (
    // 				<div className='about-portrait-responsive'>
    // 					<img src={portrait} alt="K. Mol\'s portrait" />
    // 					<div className='about-content-responsive'>
    // 						<Title className='about-header'>About us</Title>
    // 						<Paragraph className='about-text'>
    // 							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore eaque quae nostrum necessitatibus
    // 							recusandae alias quia! Molestiae, consequuntur quasi perferendis aliquam vero eius accusantium?
    // 							Debitis voluptatem excepturi molestiae nostrum illum ex quisquam doloremque pariatur. Dolorum in
    // 							debitis molestias maxime at.
    // 						</Paragraph>
    // 						<Paragraph className='about-text'>
    // 							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, animi tenetur! Ullam consequuntur
    // 							doloribus rerum adipisci optio corporis! Dolores aut eos, similique eius ut amet culpa neque aliquid
    // 							sed libero.
    // 						</Paragraph>
    // 						<div className='contact-btn'>
    // 							<Button type='primary' icon='phone' size='large'>
    // 								Contact Us
    // 							</Button>
    // 						</div>
    // 					</div>
    // 				</div>
    // 			);
    // 		} else {
    // 			return (
    // 				<Row>
    // 					<Col md={8}>
    // 						<div className='about-portrait'>
    // 							<img src={portrait} alt="K. Mol\'s portrait" />
    // 						</div>
    // 					</Col>
    // 					<Col md={16}>
    // 						<div className='about-content'>
    // 							<Title className='about-header'>About us</Title>
    // 							<Paragraph className='about-text'>
    // 								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore eaque quae nostrum necessitatibus
    // 								recusandae alias quia! Molestiae, consequuntur quasi perferendis aliquam vero eius accusantium?
    // 								Debitis voluptatem excepturi molestiae nostrum illum ex quisquam doloremque pariatur. Dolorum in
    // 								debitis molestias maxime at.
    // 							</Paragraph>
    // 							<Paragraph className='about-text'>
    // 								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, animi tenetur! Ullam
    // 								consequuntur doloribus rerum adipisci optio corporis! Dolores aut eos, similique eius ut amet culpa
    // 								neque aliquid sed libero.
    // 							</Paragraph>
    // 							<div className='contact-btn'>
    // 								<Button type='primary' icon='phone' size='large'>
    // 									Contact Us
    // 								</Button>
    // 							</div>
    // 						</div>
    // 					</Col>
    // 				</Row>
    // 			);
    // 		}
    // 	}}
    // </MediaQuery>;
  }
}
