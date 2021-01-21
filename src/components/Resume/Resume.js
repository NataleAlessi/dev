import './Resume.css';
import { getDictionary } from '../../languages'
import pdf from './resources/Natale_Alessi_Resume.pdf'
import cv_img from './resources/Natale_Alessi_Resume.jpg'

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
					<div className="column is-4 is-offset-2">
						<img src={cv_img}/>
					</div>
					<div className="column is-3 has-text-centered is-offset-1">
					<h2 className="subtitle">
						{ dictionary.subtitle.a }<br/><br/>
						{ dictionary.subtitle.b }<br/><br/>
						{ dictionary.subtitle.c }<br/><br/>
					</h2>
					<form action="#">
						<div className='download-button-area'>
							<div className="point-icon-area">
								<i className="point-to-button far fa-hand-point-down fa-lg" />
							</div>
							<a className="button" href={pdf} download target="_blank" rel="_noreferrer">
							{dictionary.download}&emsp;<i className="fad fa-download fa-lg"></i>
							</a>
						</div>
					</form>
					</div>
					<div className="column is-2"></div>
				</div>
				</div>			
		</div>
	);
}

export default Resume;
