import { useState } from "react";
import "../styles/Form.scss";

const API_URL = process.env.REACT_APP_API_URL || "https:/52.24.214.70:5000";

function Form() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState({ message: "", type: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ message: "Submitting...", type: "loading" });

        try {
            const response = await fetch(`${API_URL}/api/submit-form`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            if (response.ok) {
                setStatus({ message: "✅ Form submitted successfully!", type: "success" });
                setFormData({ name: "", email: "", message: "" });
            } else {
                setStatus({ message: "❌ Submission failed. Please try again.", type: "error" });
            }
        } catch (error) {
            setStatus({ message: "❌ Network error. Please try again later.", type: "error" });
        }
    };

    return (
        <form onSubmit={handleSubmit} className="php-email-form">
            {status.message && (
                <div className={`message ${status.type}`}>
                    {status.message}
                </div>
            )}
            <input type="text" name="name" placeholder="Name" onChange={handleChange} value={formData.name} required />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} value={formData.email} required />
            <textarea name="message" placeholder="Your message" onChange={handleChange} value={formData.message} required></textarea>
            <button type="submit">Submit</button>
        </form>
    );
}

export default Form;
