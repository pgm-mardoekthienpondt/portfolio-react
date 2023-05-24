import React from 'react';
import "./main.scss";
const Main = () => {
    return (
        <main>
            <section>
                <h2>I am most familiar with</h2>
                <ul>
                    <li>
                        <img src="/img/css-3-svgrepo-com.svg" alt="css logo" />
                    </li>
                    <li>
                        <img src="/img/html-5-svgrepo-com.svg" alt="html logo" />
                    </li>
                    <li>
                        <img src="/img/javascript-svgrepo-com.svg" alt="javascript logo" />
                    </li>
                    <li>
                        <img src="/img/react-javascript-js-framework-facebook-svgrepo-com.svg" alt="react logo" />
                    </li>
                </ul>
            </section>
            <section>
                <h2>Projects I have worked on</h2>
                <ul>
                    <li className='card' style={{width: 18 + 'rem'}}>
                        <img src="/img/schrauwen-groen.PNG" className="card-img-top" alt="Schauwen Groen logo"/>
                        <div className="card-body">
                            <p className="card-text">Website @work1</p>
                        </div>
                    </li>
                    <li className='card' style={{width: 18 + 'rem'}}>
                        <img src="/img/gentse-feesten.PNG" className="card-img-top" alt="Gentse Feesten logo"/>
                        <div className="card-body">
                            <p className="card-text">Website @work1</p>
                        </div>
                    </li>
                </ul>
            </section>
        </main>
    );
};

export default Main;