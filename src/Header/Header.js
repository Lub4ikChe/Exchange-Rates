import React from 'react';
import './Header.css'


class Header extends React.Component {
    render() {
        return (
            <header>
                <div className='main-header'>
                    <div className='container'>
                        <h1 className='site-titel'>Exchange Rates</h1>
                    </div>
                </div>
            </header>
        );
    }

}

export default Header;
