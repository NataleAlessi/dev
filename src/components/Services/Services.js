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

						<div className="column is-12">
							<h2 className="subtitle has-text-centered">
								{dictionary.subtitle}
							</h2>
							<br />
						</div>

						<div className="columns">
							<div className="column is-1"></div>
							<div className="column is-4 has-text-centered">
								<i className="fas fa-paint-brush fa-3x"></i>
								<span className='service-label is-uppercase'>front-end</span>
								<hr />
								<h2 className='service-description'>
								{dictionary.front_end}
								</h2>
							</div>
							<div className="column is-1"></div>
							<div className="column is-1"></div>
							<div className="column is-4 has-text-centered">
								<i className="fas fa-upload fa-3x"></i>
								<span className='service-label is-uppercase'>back-end</span>
								<hr />
								<h2 className='service-description'>
								{dictionary.back_end}
								</h2>
							</div>
							<div className="column is-1"></div>
						</div>

						<div className="columns">
							<div className="column is-1"></div>
							<div className="column is-4 has-text-centered">
								<i className="fas fa-code fa-3x"></i>
								<span className='service-label is-uppercase'>scripting</span>
								<hr />
								<h2 className='service-description'>
								{dictionary.scripting}
								</h2>
							</div>
							<div className="column is-1"></div>
							<div className="column is-1"></div>
							<div className="column is-4 has-text-centered">
								<i className="fas fa-link fa-3x"></i>
								<span className='service-label is-uppercase'>blockchain</span>
								<hr />
								<h2 className='service-description'>
								{dictionary.blockchain}
								</h2>
							</div>
							<div className="column is-1"></div>
						</div>
						<div className="columns">
							<div className="column is-1"></div>
							<div className="column is-4 has-text-centered">
								<i className="fas fa-rocket fa-3x"></i>
								<span className='service-label is-uppercase'>drive</span>
								<hr />
								<h2 className='service-description'>
								{dictionary.drive}
								</h2>
							</div>
							<div className="column is-1"></div>
							<div className="column is-1"></div>
							<div className="column is-4 has-text-centered">
								<i className="fas fa-brain fa-3x"></i>
								<span className='service-label is-uppercase'>just-in-time knowledge</span>
								<hr />
								<h2 className='service-description'>
								{dictionary.just_in_time}
								</h2>
							</div>
							<div className="column is-1"></div>
						</div>
					</div>
					</div>
		</div>
	);
}

export default Services;
