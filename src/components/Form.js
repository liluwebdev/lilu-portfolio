import { useState } from "react";
import "../styles/Form.scss";

function Form() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [successMessage, setSuccessMessage] = useState("");  // State for success message
    const [errorMessage, setErrorMessage] = useState("");  // State for error message
    const [loading, setLoading] = useState(false);  // State for loading indicator

    const API_URL = process.env.REACT_APP_API_URL || "http://52.24.214.70:5000"; // Change this to your actual server IP

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSuccessMessage(""); // Reset messages
        setErrorMessage("");
        setLoading(true); // Show loading state
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
            {successMessage && <p className="sent-message">{successMessage}</p>}
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            {loading && <p className="loading">Submitting...</p>}

            <input type="text" name="name" placeholder="Name" onChange={handleChange} value={formData.name} required />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} value={formData.email} required />
            <textarea name="message" placeholder="Your message" onChange={handleChange} value={formData.message} required></textarea>
            <button type="submit" disabled={loading}>Submit</button>
        </form>
    );
}

export default Form;
