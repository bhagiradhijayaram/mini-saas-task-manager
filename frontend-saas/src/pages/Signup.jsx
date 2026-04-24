import { useState } from "react";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
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

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      if (!form.name || !form.email || !form.password) {
        alert("All fields are required");
        return;
      }

      await api("/auth/signup", "POST", form);

      alert("Signup successful. Please login.");
      navigate("/login");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="bg-white p-6 w-100">
        <h2 className="text-3xl mb-4 text-center font-semibold">Sign up</h2>
        <p className="text-center text-md mb-4">
          Hello, friend! Please fill in the details below to create an account.
        </p>

        <form onSubmit={handleSignup} className="space-y-4">
          <input
            name="name"
            placeholder="Name"
            className="w-full border rounded-full px-6 py-2"
            value={form.name}
            onChange={handleChange}
          />

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
            Signup
          </button>

          <p className="text-sm text-center">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-blue-600 cursor-pointer hover:underline"
            >
              Login
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}
