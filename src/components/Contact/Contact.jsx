import { useState } from 'react'
import styles from './Contact.module.css'
import { FaPhone, FaEnvelope } from 'react-icons/fa6'

function Contact() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Basic validation
        if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
            alert('Please fill in all fields');
            return;
        }
        // Here you would typically send the data to a server
        console.log('Form submitted:', formData);
        alert('Thank you for your message! (This is a demo - no data is actually sent)');
        // Reset form
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            message: ''
        });
    };

    return (
        <div className={styles.contact_wrapper}>
            <div className={styles.contact_con}>
                <div className={styles.contact_info}>
                    <h3>Get in touch</h3>
                    <p className={styles.contact_desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga eius eligendi in laboriosam delectus ipsum inventore alias dolorem ducimus aliquid.</p>
                    <p className={styles.contact_address}>123 Main Street
                        Bangkok, Thailand</p>
                    <p><FaPhone />(+66) 98 555 1234</p>
                    <p><FaEnvelope />support@site.com</p>
                </div>
                <div className={styles.contact_form}>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.input_group}>
                            <div>
                                <label htmlFor="firstName">First Name</label>
                                <input 
                                    type="text" 
                                    id="firstName"
                                    name="firstName"
                                    placeholder='eg. John'
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="lastName">Last Name</label>
                                <input 
                                    type="text" 
                                    id="lastName"
                                    name="lastName"
                                    placeholder='eg. Doe'
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <label htmlFor="email">Email Address</label>
                        <input 
                            type="email" 
                            id="email"
                            name="email"
                            placeholder='eg. johndoe@gmail.com'
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="message">Your message</label>
                        <textarea 
                            id="message"
                            name="message"
                            cols="30" 
                            rows="10"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                        <button type='submit'>Submit</button>
                    </form>
                </div>
            </div>

        </div >
    )
}

export default Contact
