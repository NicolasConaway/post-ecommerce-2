import React from 'react';
import './Contacts.css'

const originalState = {
    name: "",
    email: "",
    phone: "",
    comments: "",
    nameError: "",
    emailError: "",
    phoneError: "",
    commentsError: ""
}

class Contacts extends React.Component {

    state = originalState;

    handleChange = event => {
        const isCheckbox = event.target.type === "checkbox" ;
        this.setState({
            [event.target.name]: isCheckbox
            ? event.target.checked
            : event.target.value
        });
    };

     validate = () => {
        let nameError = "";
        let emailError = "";
        let phoneError = "";
        let commentsError = "";

        if (!this.state.name) {
            nameError = 'Name must be included!'
        }
        if (!this.state.email.includes('@')) {
            emailError = 'Invalid email!';
        }
        if (!this.state.phone) {
            phoneError = 'Invalid phone number!'
        }
        if (!this.state.comments) {
            commentsError = 'Must include a message!'
        }
        
        if (emailError || nameError || phoneError || commentsError) {
            this.setState({emailError, nameError, phoneError, commentsError});
            return false;
        }

        return true;
    };

    handleSubmit = event => {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            this.setState(originalState);
        }
    }

    render(){
        return(
            <>

                <h2 className="contact__title">Contact our offices</h2>

                <div className="contact__container">
                    <section className="contact__info">
                        <h2>Contact Information</h2>
                        <ul>
                            <li className="contact__list">Phone: 999-999-9999</li>
                            <li className="contact__list">Email: ayouthheart@gmail.com</li>
                            <li className="contact__list">Hours: 9AM - 5PM, Mon - Fri</li>
                            <li>Mailing:</li>
                            <li>A Youth Heart Charlotte</li>
                            <li>P.O. Box 74846</li>
                            <li>Charlotte, NC 78332-7418</li>
                        </ul>
                    </section>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3259.863186052908!2d-80.82300538503299!3d35.20987668030687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88569ffa74a8daf7%3A0xb9d45ca9a56416e4!2sAtrium%20Health%20Mercy!5e0!3m2!1sen!2sus!4v1585506385847!5m2!1sen!2sus" 
                    width="400" height="300" allowFullScreen="" aria-hidden="false" tabindex="0"></iframe>
                </div>

                <div className="form__container">
                    <form onSubmit={this.handleSubmit}> 
                        <label for="name">Full Name:</label>
                        <input 
                        name="name" 
                        value={this.state.name}
                        onChange={this.handleChange} 
                        id="name"/>
                        <div className="errorMessage">{this.state.nameError}</div>

                        <label for="email">Email:</label>
                        <input 
                        name="email" 
                        value={this.state.email}
                        onChange={this.handleChange}
                        id="email"/>
                        <div className="errorMessage">{this.state.emailError}</div>

                        <label for="phone">Cell Phone:</label>
                        <input 
                        name="phone" 
                        value={this.state.phone}
                        onChange={this.handleChange} 
                        id="phone"/>
                        <div className="errorMessage">{this.state.phoneError}</div>

                        <label for="comments">Comments:</label>
                        <textarea 
                        name="comments"
                        value={this.state.comments} 
                        onChange={this.handleChange}
                        id="comments"></textarea>
                        <div className="errorMessage">{this.state.commentsError}</div>

                        <div className="contact__button__container">
                            <button type="submit" className="contact__button">Submit</button>
                        </div>
                    </form>
                </div>

            </>
        )
    }
}

export default Contacts