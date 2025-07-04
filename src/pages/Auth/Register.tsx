import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';

const Register: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle register logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f4f6fa]">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-md p-8 w-full max-w-md flex flex-col gap-6"
      >
        <h2 className="text-center text-xl font-semibold mb-2 text-gray-900">Create your account</h2>
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#002855]"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">Email address</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#002855]"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
          <div className="relative">
            <input
              id="password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              autoComplete="new-password"
              required
              value={form.password}
              onChange={handleChange}
              placeholder="Choose your password"
              className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#002855] pr-10"
            />
            <button
              type="button"
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700"
              onClick={() => setShowPassword((v) => !v)}
              tabIndex={-1}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="confirm" className="text-sm font-medium text-gray-700">Confirm Password</label>
          <div className="relative">
            <input
              id="confirm"
              name="confirm"
              type={showConfirm ? 'text' : 'password'}
              autoComplete="new-password"
              required
              value={form.confirm}
              onChange={handleChange}
              placeholder="Confirm your password"
              className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#002855] pr-10"
            />
            <button
              type="button"
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700"
              onClick={() => setShowConfirm((v) => !v)}
              tabIndex={-1}
            >
              {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-[#002855] text-white font-semibold rounded-md py-2 mt-2 hover:bg-[#001a3d] transition-colors duration-200"
        >
          Register
        </button>
        <Link to="/" className="block text-center text-xs text-gray-500 hover:text-[#002855] mt-4 underline">
          Back to Home
        </Link>
      </form>
    </div>
  );
};

export default Register; 