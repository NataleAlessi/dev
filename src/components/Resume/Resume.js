import './Resume.css';
import { getDictionary } from '../../languages'

const Resume = (props) => {
	let dictionary = getDictionary(props.language)
	dictionary = dictionary.resumeSection

	return (
 		<div className="Resume">
			<div className="container">
				<div
					className="columns is-multiline"
					data-aos="fade-in"
					data-aos-easing="linear"
				>
					<div className="column is-12 about-me">
					<h1 className="title has-text-centered section-title">
						{dictionary.title}
					</h1>
					</div>
					<div className="column is-10 has-text-centered is-offset-1">
					<h2 className="subtitle">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et doloremagna aliqua
					</h2>
					<form action="#">
						<a className="button" href='./resources/N_A_Resume.pdf' download>
						{dictionary.download}&emsp;<i className="fad fa-download fa-lg"></i>
						</a>
					</form>
					</div>
				</div>
				</div>			
		</div>
	);
}

export default Resume;
