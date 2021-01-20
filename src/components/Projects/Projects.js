import './Projects.css';
import APIFeed from '../APIFeed/APIFeed'
import { getDictionary } from '../../languages'

const Projects = (props) => {
	let dictionary = getDictionary(props.language)
	dictionary = dictionary.projectsSection

	return (
 		<div className="Projects">

			<h1 className="title has-text-centered section-title">
				{dictionary.title}
			</h1>

					<div className="container">
					<div
						className="columns is-multiline"
						data-aos="fade-in"
						data-aos-easing="linear"
					>
						<div className="column is-12 has-text-centered mb-6">
							<APIFeed language={props.language}/>
						</div>
						
						<div className="column is-3">
						<a href="#">
							<figure
							className="image is-2by1 work-item"
							style={{"backgroundImage": "url('https://picsum.photos/320/180?image=0')"}}
							></figure>
						</a>
						</div>
						<div className="column is-3">
						<a href="#">
							<figure
							className="image is-2by1 work-item"
							style={{"backgroundImage": "url('https://picsum.photos/320/180?image=10')"}}
							></figure>
						</a>
						</div>
						<div className="column is-3">
						<a href="#">
							<figure
							className="image is-2by1 work-item"
							style={{"backgroundImage": "url('https://picsum.photos/320/180?image=20')"}}
							></figure>
						</a>
						</div>
						<div className="column is-3">
						<a href="#">
							<figure
							className="image is-2by1 work-item"
							style={{"backgroundImage": "url('https://picsum.photos/320/180?image=30')"}}
							></figure>
						</a>
						</div>
						<div className="column is-3">
						<a href="#">
							<figure
							className="image is-2by1 work-item"
							style={{"backgroundImage": "url('https://picsum.photos/320/180?image=40')"}}
							></figure>
						</a>
						</div>
						<div className="column is-3">
						<a href="#">
							<figure
							className="image is-2by1 work-item"
							style={{"backgroundImage": "url('https://picsum.photos/320/180?image=50')"}}
							></figure>
						</a>
						</div>
						<div className="column is-3">
						<a href="#">
							<figure
							className="image is-2by1 work-item"
							style={{"backgroundImage": "url('https://picsum.photos/320/180?image=60')"}}
							></figure>
						</a>
						</div>
						<div className="column is-3">
						<a href="#">
							<figure
							className="image is-2by1 work-item"
							style={{"backgroundImage": "url('https://picsum.photos/320/180?image=70')"}}
							></figure>
						</a>
						</div>
					</div>
					</div>
  		</div>
	);
}
 
export default Projects
