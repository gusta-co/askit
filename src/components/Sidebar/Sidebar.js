import React from 'react'
import './Sidebar.css'

const Sidebar = () => 
{

    return (
        <div className='sidebar'>

            <div className='logo-holder'>
                <img className='logo' src='/img/nerd-logo.png' onClick={() => {
                const a = document.createElement('a');
                a.target = '_blank';
                a.href= 'https://github.com/gusta-co/askit'
                a.click();
                }}></img>
            </div>
            
            <a target='_blank' href='https://github.com/gusta-co/askit'><h1 className='title'>Askit</h1></a>

            <div className='footer'>
                <h5 className='text' onClick={() => {
                const a = document.createElement('a');
                a.target = '_blank';
                a.href= 'https://gustaco.dev'
                a.click();
                }}>Por: Gustavo Correia</h5>
            </div>

        </div>
    )
}

export default Sidebar
