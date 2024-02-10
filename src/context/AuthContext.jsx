import { useState, createContext, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate instead of redirect

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Use useNavigate hook

  const apiUrl = import.meta.env.VITE_REACT_API_URL;

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await fetch(`${apiUrl}/users`, {
          method: "GET",
        });
        if (res.ok) {
          const data = await res.json();
          setUsers(data);
        } else {
          setError("Error fetching users");
        }
      } catch (err) {
        setError("Network error");
      }
    };

    getUsers();
  }, [apiUrl]);

  const login = ({ username, password }) => {
    const foundUser = users.find(
      (u) => u.username === username && u.password === password
    );
    if (foundUser) {
      localStorage.setItem("user", JSON.stringify(foundUser));
      console.log("yup");
      navigate("/dashboard"); // Use navigate for redirection
    } else {
      setError("Invalid username or password");
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ login, logout, error }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
