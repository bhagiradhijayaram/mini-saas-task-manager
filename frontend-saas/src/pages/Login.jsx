import { useState, useContext } from "react";
import { api } from "../services/api";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!form.email || !form.password) {
        alert("All fields are required");
        return;
      }

      const res = await api("/auth/login", "POST", form);
      console.log("login data:", res)
      login(res.token, res.user);       
      navigate("/dashboard"); 
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="bg-white p-6 w-100">
        <h2 className="text-3xl mb-4 text-center font-semibold">Log in</h2>

        <p className="text-center text-md mb-4">
          Welcome back! Please enter your details.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="email"
            placeholder="Email"
            className="w-full border rounded-full px-6 py-2"
            value={form.email}
            onChange={handleChange}
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            className="w-full border rounded-full px-6 py-2"
            value={form.password}
            onChange={handleChange}
          />

          <button
            type="submit"
            className="w-full bg-[#1F6F5F] hover:bg-[#1a5d4f] text-white p-2 rounded-full mb-3"
          >
            Login
          </button>

          <p className="text-sm text-center">
            Don’t have an account?{" "}
            <span
              onClick={() => navigate("/signup")}
              className="text-blue-600 cursor-pointer hover:underline"
            >
              Signup
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}
