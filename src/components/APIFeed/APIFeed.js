import { useState, useEffect } from 'react';
import './APIFeed.css';
import axios from 'axios';

const api = axios.create({
	baseURL: `https://api.github.com/users`,
	headers: {
		"Content-type": "application/json"
	}
})

const APIFeed = () => {

	const [response, setResponse] = useState({})

	useEffect(() => {
		api.get('/NataleAlessi')
			.then(res => {
				setResponse(res.data)
				console.log(res.data)
			})
			.catch(e => {
				console.log(e)
			})
	}, [])

	api.get('/NataleAlessi').then(res => {
		console.log(res.data)
	})

	return (
		<div className='APIFeed'>
			<p> APIFeed here! </p>
			<img alt='avatar' className='CardAvatar' src={response.avatar_url}/>
			<div>
				<p className='CardName'> {response.name} </p>
				{response.hireable 
					? <p className='CardName'> Hireable </p>
					: <p className='CardName'> Employed </p> 
				}
			</div>
		</div>
	);
}

export default APIFeed;