import { useState } from "react";
import { useNavigate } from "react-router"
import { registerUser } from "../services/auth";

function Register() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!fullName || !email || !password) {
      setError("please fill all the fields!");
      return
    }

    registerUser({ fullName, email, password }).then((result) => {
      console.log(result);
      navigate("/login");
    });
  }
  return (
    <main className="py-12 px-4">
      <div className="max-w-md mx-auto">
        <div className="text-center">
          <h1 className="font-bold mb-2 text-2xl">
          Create an account
        </h1>
        </div>
        <form onSubmit={handleSubmit} className="p-5 rounded-xl shadow-2xl border border-gray-200 space-y-5">
          {
            error && (
              <p className="rounded-lg bg-red-300 text-red-700 py-2">{ error }</p>
            )
          }
          <label htmlFor="">
            <span className="block text-sm font-medium text-gray-700 mb-1">Full Name</span>
            <input type="text"
              value={fullName}
              onChange={(e) => { setFullName(e.target.value) }}
              className="w-full rounded-lg border border-gray-300 py-2 mb-5"
            />
          </label>

          <label htmlFor="">
            <span className="block text-sm font-medium text-gray-700 mb-1">Email</span>
            <input type="email"
              value={email}
              onChange={(e) => { setEmail(e.target.value) }}
              className="w-full rounded-lg border border-gray-300 py-2 mb-5"
            />
          </label>

          <label htmlFor="">
            <span className="block text-sm font-medium text-gray-700 mb-1">Password</span>
            <input type="password"
              value={password}
              onChange={(e) => { setPassword(e.target.value) }}
              className="w-full rounded-lg border border-gray-300 py-2 mb-5"
            />
          </label>
          <button type="submit" className="w-full bg-blue-700 text-white py-2 mt-4 rounded-2xl">Register</button>
        </form>
      </div>
    </main>
  )
}

export default Register