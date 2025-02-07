import { useState, useEffect } from "react";
import AdminLogin from "../components/AdminLogin";
import AdminDashboard from "../components/AdminDashboard";

function Admin() {
    const [token, setToken] = useState(localStorage.getItem("adminToken"));

    useEffect(() => {
        // ✅ Check if user is already authenticated
        const savedToken = localStorage.getItem("adminToken");
        if (savedToken) {
            setToken(savedToken);
        }
    }, []);

    const handleLoginSuccess = (newToken) => {
        localStorage.setItem("adminToken", newToken); // ✅ Save token
        setToken(newToken);
    };

    const handleLogout = () => {
        localStorage.removeItem("adminToken"); // ✅ Remove token on logout
        setToken(null);
    };

    return (
        <div>
            <h1>Admin Panel</h1>
            {token ? (
                <>
                    <button onClick={handleLogout}>Logout</button>
                    <AdminDashboard token={token} />  {/* ✅ Show dashboard if logged in */}
                </>
            ) : (
                <AdminLogin onLoginSuccess={handleLoginSuccess} />  {/* ✅ Show login if not logged in */}
            )}
        </div>
    );
}

export default Admin;
