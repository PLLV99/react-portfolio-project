import React from 'react'
import styles from './Services.module.css'
import { FaCode, FaPaintbrush, FaDesktop } from 'react-icons/fa6'
function Services() {
    return (
        <div className={styles.services_con}>
            <h3 className={styles.services_title}>My Services</h3>
            <div className={styles.services_list}>
                <div className={styles.services_items}>
                    <FaCode />
                    <h4>Web Development</h4>
                    <p>
                        I specialize in building fast, responsive, and secure websites using modern web technologies like HTML, CSS, JavaScript, and React. Whether it's a small business site or a large-scale web app, I can deliver high-quality code to match your needs.
                    </p>
                </div>
                <div className={styles.services_items}>
                    <FaDesktop />
                    <h4>Web Design</h4>
                    <p>
                        I create visually appealing and user-friendly website designs that align with your brand. My designs focus on intuitive navigation, clean layouts, and ensuring an engaging user experience across all devices.
                    </p>
                </div>
                <div className={styles.services_items}>
                    <FaPaintbrush />
                    <h4>Front-end Consulting</h4>
                    <p>
                        I offer expert advice on how to enhance the usability, performance, and design of your website. From optimizing front-end code to improving accessibility, I provide practical solutions to help you deliver a better user experience.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Services
