import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
    return (
        <div className='about' id='about'>
            <div className="about-left">
                <img src={about_img} alt="" className='about-img' />
                <img src={play_icon} alt="" className='play-icon' />
            </div>
            <div className="about-right">
                <h3>ABOUT UNIVERSITY</h3>
                <h2>Nurturing Tommorrow's Leader Today</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, soluta eum quae sequi nesciunt, harum perspiciatis saepe hic iste aliquam placeat et ipsa possimus maiores optio excepturi amet accusamus officia doloribus adipisci, deserunt vel voluptatibus?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti accusamus sed, minus consequatur molestiae sequi laborum corporis deserunt qui, voluptatum illo ex eius cupiditate incidunt </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti accusamus sed, minus consequatur molestiae sequi laborum corporis deserunt qui, voluptatum illo ex eius cupiditate incidunt </p>
            </div>
        </div>
    )
}

export default About