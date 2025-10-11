import React, { Component } from 'react';

class HeaderComponent extends Component {
    render() {
        return (
            <header>
                <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
                    <div className='container'>
                        <a className='navbar-brand mx-auto'>
                            Employee Management App
                        </a>
                    </div>
                </nav>
            </header>
        );
    }
}

export default HeaderComponent;