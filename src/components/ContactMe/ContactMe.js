import './ContactMe.css'
import { useReducer, useState } from 'react'
import { getDictionary } from '../../languages'
import axios from 'axios'


const formReducer = (state, event) => {
	return {
		...state,
		[event.name]: event.value
	}
}

const ContactMe = (props) => {
	let dictionary = getDictionary(props.language)
	dictionary = dictionary.contactMeSection

	const sendPost = () => {
		axios({
			method: 'post',
			url: 'https://app.99inbound.com/api/e/y5m2voYy',
			headers: {
			  'Content-Type': 'application/json',
			  'Accept': 'application/json'
			},
			data: { ...formData }
		  }).then((response) => { console.log(response); })
	}

	const [formData, setFormData] = useReducer(formReducer, {});
	const [submitting, setSubmitting] = useState(false);


	const handleSubmit = event => {
		event.preventDefault();
		setSubmitting(true);
		sendPost()
		setTimeout(() => {
			setSubmitting(false)			
		}, 3000);
	}

	const handleChange = event => {
		setFormData({
			name: event.target.name,
			value: event.target.value
		})
	}
	


	return (
 		<div className="ContactMe">
			<div className="container">
				<div className="columns is-multiline"
					data-aos="fade-in-up"
					data-aos-easing="linear">
				
					<div className="column is-12 about-me">
						<h1 className="title has-text-centered section-title">
							{dictionary.title}
						</h1>
					</div>

					<div className="column is-8 is-offset-2">
					<form onSubmit={handleSubmit}>

						<div className="field">
						<label className="label">{dictionary.name.label}</label>
						<div className="control has-icons-left">
							<input
							onChange={handleChange}
							className="input"
							type="text"
							placeholder={dictionary.name.placeholder}
							name="Name"
							/>
							<span className="icon is-small is-left">
							<i className="fas fa-user"></i>
							</span>
						</div>
						</div>

						<div className="field">
						<label className="label">{dictionary.email.label}</label>
						<div className="control has-icons-left">
							<input
							onChange={handleChange}
							className="input"
							type="email"
							placeholder={dictionary.email.placeholder}
							name="Email"
							/>
							<span className="icon is-small is-left">
							<i className="fas fa-envelope"></i>
							</span>
						</div>
						</div>

						<div className="field">
						<label className="label">{dictionary.message.label}</label>
						<div className="control">
							<textarea
							onChange={handleChange}
							className="textarea"
							placeholder={dictionary.message.placeholder}
							name="Message"
							></textarea>
						</div>
						</div>

						<div className="field">
						<div className="control">
							<button className="button submit-button is-fullwidth" type='submit'>
							{submitting ? dictionary.button.submitting : dictionary.button.submit}
							<i className="fas fa-paper-plane"></i>
							</button>
						</div>
						</div>
					</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ContactMe;
