import { useState, useEffect } from "react";

function AdminDashboard({ token }) {
    const [submissions, setSubmissions] = useState([]);

    useEffect(() => {
        const fetchSubmissions = async () => {
            const response = await fetch("/api/admin/submissions", {
                headers: { Authorization: `Bearer ${token}` },
            });

            if (response.ok) {
                const data = await response.json();
                setSubmissions(data);
            } else {
                alert("❌ Failed to load submissions.");
            }
        };

        fetchSubmissions();
    }, [token]);

    return (
        <div>
            <h2>Form Submissions</h2>
            <ul>
                {submissions.map((submission) => (
                    <li key={submission.id}>
                        <strong>{submission.name}</strong> ({submission.email}): {submission.message}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AdminDashboard;
