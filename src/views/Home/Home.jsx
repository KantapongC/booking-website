import React, { Component } from 'react';
import { Carousel } from 'antd';
import './Home.css';
import img_5 from './img/img_5.jpg';
import img_6 from './img/img_6.jpg';
import img_7 from './img/img_7.jpg';
import img_8 from './img/img_8.jpg';

export default class Home extends Component {
	render() {
		return (
			<Carousel autoplay autoplaySpeed={4000}>
				{/* <Carousel> */}
				<div>
					<img src={img_5} alt='Display 1' />
					<div className='content'>
						<div className='title'>Lorem ipsum dolor</div>
						<div className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, assumenda</div>
					</div>
				</div>
				<div>
					<img src={img_6} alt='Display 2' />
					<div className='content'>
						<div className='title'>Et adipisci ratione </div>
						<div className='text'>necessitatibus soluta similique architecto veritatis pariatur autem fugiat</div>
					</div>
				</div>
				<div>
					<img src={img_7} alt='Display 3' />
					<div className='content'>
						<div className='title'>inventore adipisci odit</div>
						<div className='text'>
							corrupti architecto quas quo repudiandae natus cumque nostrum sunt inventore commodi
						</div>
					</div>
				</div>
				<div>
					<img src={img_8} alt='Display 4' />
					<div className='content'>
						<div className='title'>aspernatur impedit</div>
						<div className='text'>
							illum quasi cumque maxime ullam assumenda alias, quae, recusandae consequuntur a natus. Quasi repudiandae
							magni reiciendis
						</div>
					</div>
				</div>
			</Carousel>
		);
	}
}
