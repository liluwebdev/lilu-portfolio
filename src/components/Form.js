import { useState } from "react";
import "../styles/Form.scss";

function Form() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [loading, setLoading] = useState(false);
    const [responseMessage, setResponseMessage] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setResponseMessage("");

        try {
            const response = await fetch("http://lilumedia.com:5000/api/submit-form", {  // Change to your backend URL
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            setLoading(false);
            setResponseMessage(data.message);
        } catch (error) {
            setLoading(false);
            setResponseMessage("An error occurred. Please try again.");
        }
    };

    return (
        <div className="contact">
            <form className="php-email-form" onSubmit={handleSubmit}>
                {responseMessage && (
                    <div className={responseMessage.includes("success") ? "sent-message" : "error-message"}>
                        {responseMessage}
                    </div>
                )}

                <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                <textarea name="message" placeholder="Your message" onChange={handleChange} required></textarea>

                <button type="submit" disabled={loading}>
                    {loading ? "Submitting..." : "Submit"}
                </button>
            </form>
        </div>
    );
}

export default Form;
