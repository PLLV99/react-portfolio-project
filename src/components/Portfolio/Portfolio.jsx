import React from 'react'
import styles from './Portfolio.module.css'
import Tilt from 'react-parallax-tilt'

function Portfolio() {
    return (
        <div className={styles.port_con}>
            <h3 className={styles.port_title}>Portfolio</h3>
            <div className={styles.port_list}>
                <div className={styles.port_items}>
                    <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                        <img src="https://images.unsplash.com/photo-1610989001873-03968eed0f08?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww" />
                    </Tilt>
                    <p>Project Title</p>
                </div>
                <div className={styles.port_items}>
                    <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                        <img src="https://images.unsplash.com/photo-1610989001873-03968eed0f08?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww" />
                    </Tilt>
                    <p>Project Title</p>
                </div>
                <div className={styles.port_items}>
                    <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                        <img src="https://images.unsplash.com/photo-1610989001873-03968eed0f08?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww" />
                    </Tilt>
                    <p>Project Title</p>
                </div>
                <div className={styles.port_items}>
                    <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                        <img src="https://images.unsplash.com/photo-1610989001873-03968eed0f08?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww" />
                    </Tilt>
                    <p>Project Title</p>
                </div>
                <div className={styles.port_items}>
                    <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                        <img src="https://images.unsplash.com/photo-1610989001873-03968eed0f08?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww" />
                    </Tilt>
                    <p>Project Title</p>
                </div>
                <div className={styles.port_items}>
                    <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                        <img src="https://images.unsplash.com/photo-1610989001873-03968eed0f08?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww" />
                    </Tilt>
                    <p>Project Title</p>
                </div>
            </div>
        </div >
    )
}

export default Portfolio
