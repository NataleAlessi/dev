import './Services.css';
import { getDictionary } from '../../languages'

const Services = (props) => {
	let dictionary = getDictionary(props.language)
	dictionary = dictionary.servicesSection

	return (
 		<div className="Services">
			<h1 className="title has-text-centered section-title">
				{dictionary.title}
			</h1>
				<div className="container">
					<div className="columns is-multiline">
						<div
						className="column is-12 about-me"
						data-aos="fade-in"
						data-aos-easing="linear"
						>
						<h2 className="subtitle has-text-centered">
							this section will contain a description of services and an API feed from linkedin and github
						</h2>
						<br />
						</div>
						<div className="columns is-12">
						<div
							className="column is-4 has-text-centered"
							data-aos="fade-in"
							data-aos-easing="linear"
						>
							<i className="fas fa-meteor fa-3x"></i>
							<span className='service-label is-uppercase'>unstoppableness</span>
							<hr />
							<h2 className='service-description'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
							do eiusmod tempor incididunt ut labore et dolore magna aliqua
							</h2>
						</div>
						<div
							className="column is-4 has-text-centered"
							data-aos="fade-in"
							data-aos-easing="linear"
						>
							<i className="fas fa-paint-brush fa-3x"></i>
							<span className='service-label is-uppercase'>front-end</span>
							<hr />
							<h2 className='service-description'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
							do eiusmod tempor incididunt ut labore et dolore magna aliqua
							</h2>
						</div>
						<div
							className="column is-4 has-text-centered"
							data-aos="fade-in"
							data-aos-easing="linear"
						>
							<i className="fas fa-rocket fa-3x"></i>
							<span className='service-label is-uppercase'>drive</span>
							<hr />
							<h2 className='service-description'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
							do eiusmod tempor incididunt ut labore et dolore magna aliqua
							</h2>
						</div>
						</div>
						<hr />
						<div className="columns is-12">
						<div
							className="column is-4 has-text-centered"
							data-aos="fade-in"
							data-aos-easing="linear"
						>
							<i className="fas fa-upload fa-3x"></i>
							<span className='service-label is-uppercase'>back-end</span>
							<hr />
							<h2 className='service-description'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
							do eiusmod tempor incididunt ut labore et dolore magna aliqua
							</h2>
						</div>
						<div
							className="column is-4 has-text-centered"
							data-aos="fade-in"
							data-aos-easing="linear"
						>
							<i className="fas fa-bus fa-3x"></i>
							<span className='service-label is-uppercase'>traveller</span>
							<hr />
							<h2 className='service-description'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
							do eiusmod tempor incididunt ut labore et dolore magna aliqua
							</h2>
						</div>
						<div
							className="column is-4 has-text-centered"
							data-aos="fade-in"
							data-aos-easing="linear"
						>
							<i className="fas fa-code fa-3x"></i>
							<span className='service-label is-uppercase'>coding</span>
							<hr />
							<h2 className='service-description'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
							do eiusmod tempor incididunt ut labore et dolore magna aliqua
							</h2>
						</div>
						</div>
					</div>
					</div>
		</div>
	);
}

export default Services;
