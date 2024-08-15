import React from 'react'
import styles from './Testimonials.module.css'

function Testimonials() {
    return (
        <div className={styles.testi_con}>
            <h3 className={styles.testi_title}>Testimonials</h3>
            <div className={styles.testi_list}>
                <div className={styles.testi_items}>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet in optio architecto expedita amet possimus laudantium. Magni eaque soluta voluptas.</p>
                    <img src="https://images.unsplash.com/photo-1503001358144-8d7f2c1db9f5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVufGVufDB8fDB8fHww" />
                    <h4>Jonh Doe</h4>
                    <p className={styles.bio}>Web Developer</p>
                </div>
                <div className={styles.testi_items}>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet in optio architecto expedita amet possimus laudantium. Magni eaque soluta voluptas.</p>
                    <img src="https://plus.unsplash.com/premium_photo-1661400600986-b7493240cae2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWVufGVufDB8fDB8fHww" />
                    <h4>Jame Doe</h4>
                    <p className={styles.bio}>Web Developer</p>
                </div>
                <div className={styles.testi_items}>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet in optio architecto expedita amet possimus laudantium. Magni eaque soluta voluptas.</p>
                    <img src="https://plus.unsplash.com/premium_photo-1664015982598-283bcdc9cae8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWVufGVufDB8fDB8fHww" />
                    <h4>Jo Doe</h4>
                    <p className={styles.bio}>Web Developer</p>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
