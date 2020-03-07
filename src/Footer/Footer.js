import React from 'react';
import './Footer.css';

class Footer extends React.Component {
    render() {
        return (
            <footer id='footer' className='footer'>
                <div className='footer-bottom'>
                    <div className='container'>
                        <div className='flex-container'>
                            <div className='flex-item'>
                                <h1 className='footer-title'>
                                    Exchange Rates
                                </h1>
                                <p>All Rights Reserverd</p>
                            </div>

                            <div className='flex-item'>
                                <div className='module-body'>
                                    <ul className="list-unstyled">
                                        <li><a href='/'>Site map</a></li>
                                        <li><a href='/'>Google Sitemap</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className='flex-item'>
                                <div className='module-body'>
                                    <ul className="list-unstyled">
                                        <li><a href='/'>Contacts</a></li>
                                        <li><a href='/'>License</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }

}

export default Footer;
