import { useState } from "react";
import { useNavigate } from "react-router"
import { registerUser } from "../services/auth";

function Register() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!fullName) {
      setError("please fill all the fields!");
      return
    }

    registerUser({ fullName }).then((result) => {
      console.log(result);
      navigate("/login");
    });
  }
  return (
    <main className="py-12 px-4">
      <div className="max-w-md mx-auto">
        <h1>
          create an account
        </h1>
        <form onSubmit={handleSubmit} className="rounded-xl shadow-2xl border border-gray-200 space-y-5">
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
              className="w-full rounded-lg border border-gray-300 py-2"
            />
          </label>
          <button type="submit">register</button>
        </form>
      </div>
    </main>
  )
}

export default Register