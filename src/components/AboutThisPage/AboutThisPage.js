import './AboutThisPage.css'

import { getDictionary } from '../../languages'

const AboutThisPage = (props) => {
    let dictionary = getDictionary(props.language)
    dictionary = dictionary.aboutThisPageSection
    
    return (
        <div className='AboutThisPage'
            id='AboutThisPage'
            data-aos="fade-in-up"
			data-aos-easing="linear">
            <h1 className="title has-text-centered section-title">
                {dictionary.title}
            </h1>
            <div className="columns">
            <div className="column is-10 is-offset-1">
                    
                <div className="pag-content">

                    <div className="pag-pane" style={{display: "block"}}>
                        <div className="content">
                            <h1>{dictionary.sec_1.title}</h1>
                                <p>{dictionary.sec_1.p_1}</p>
                                <p>{dictionary.sec_1.p_2}</p>
                                <p>{dictionary.sec_1.p_3}</p>
                                <p>{dictionary.sec_1.p_4}</p>
                            <h1>{dictionary.sec_2.title}</h1>
                                <p>
                                    {dictionary.sec_2.p_1.a}
                                    <a href={dictionary.sec_2.p_1.here.link}>
                                        {dictionary.sec_2.p_1.here.text}
                                    </a>
                                    {dictionary.sec_2.p_1.b}
                                </p>
                                <p>{dictionary.sec_2.p_2}</p>
                                <p>{dictionary.sec_2.p_3}</p>
                                <pre>{dictionary.sec_2.p_4}</pre>
                                <p>{dictionary.sec_2.p_5}</p>
                            <h1>{dictionary.sec_3.title}</h1>
                                <p>{dictionary.sec_3.p_1}</p>
                                <p>{dictionary.sec_3.p_2}</p>
                                <p>
                                    {dictionary.sec_3.p_3.a}
                                    <a href={dictionary.sec_3.p_3.this.link}>
                                        {dictionary.sec_3.p_3.this.text}
                                    </a>
                                    {dictionary.sec_3.p_3.b}
                                </p>
                            <h1>{dictionary.sec_4.title}</h1>
                                <p>{dictionary.sec_4.p_1}</p>
                                <p style={{backgroundColor: 'orange', color: 'purple'}}>{dictionary.sec_4.p_2}</p>
                                <p>{dictionary.sec_4.p_3}</p>
                            <p>{dictionary.sec_4.p_15}</p>
                        {/* <table>
                            <thead>
                                <tr>
                                    <th>One</th>
                                    <th>Two</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Three</td>
                                    <td>Four</td>
                                </tr>
                                <tr>
                                    <td>Five</td>
                                    <td>Six</td>
                                </tr>
                                <tr>
                                    <td>Seven</td>
                                    <td>Eight</td>
                                </tr>
                                <tr>
                                    <td>Nine</td>
                                    <td>Ten</td>
                                </tr>
                                <tr>
                                    <td>Eleven</td>
                                    <td>Twelve</td>
                                </tr>
                            </tbody>
                        </table> */}
                        {/* <div>
                            <img src="https://bulma.io/images/placeholders/256x256.png" alt="💯"/>
                            <img src="https://bulma.io/images/placeholders/256x256.png" alt="💯"/>
                            <figcaption>
                            Figure 1: Some beautiful placeholders
                            </figcaption>
                        </div> */}
                    </div>
                </div>
            </div>

            </div>
            </div>
        </div>
    );
}
 
export default AboutThisPage
