import "./style.css"

const Contact = () => {
    return (
        <div className="contact">
        <h1>Contact me!</h1>

        <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d252166.39753871926!2d7.254267964001987!3d9.054646210491764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e745f4cd62fd9%3A0x53bd17b4a20ea12b!2sAbuja!5e0!3m2!1sen!2sng!4v1621591763826!5m2!1sen!2sng"
        title="abujaMap"
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
        loading="lazy"
        >
        </iframe>

        <h4>Whatsapp</h4>
        <a href = "https://wa.link/enmows" 
        target= "_blank" 
        rel="noreferrer">
        <img src="https://img.icons8.com/color/452/whatsapp--v1.png" 
        alt="whatsapp-icon" 
        /> 
        </a>


        <h4>Email</h4>
        <p>ikwuegbuanthony@gmail.com</p>

        <h4>Address</h4>
        <p>Federal Capital Territory, Abuja</p>
            
        </div>
    )
}

export default Contact;
