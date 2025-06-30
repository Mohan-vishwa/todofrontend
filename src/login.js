import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login({ setToken }) {
  const [authError, setAuthError] = useState("");
  const [authLoading, setAuthLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async (username, password) => {
    setAuthLoading(true);
    setAuthError("");

    try {
      const response = await fetch(
        "https://todobackend-s1o5.onrender.com/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, password }),
        }
      );

      const data = await response.json();
      console.log("Login response:", data);

      setAuthLoading(false);

      if (data.token) {
        setToken(data.token);
        localStorage.setItem("token", data.token);

        // ✅ Pick the best possible username from the response
        const name =
          data.user?.name ||
          data.user?.username ||
          data.name ||
          data.username ||
          "User";

        localStorage.setItem("username", name);
        navigate("/");
      } else {
        setAuthError(data.message || "Login failed");
      }
    } catch (error) {
      setAuthLoading(false);
      setAuthError("An error occurred. Please try again.");
      console.error("Login error:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-16 p-8 bg-blue-500 rounded-lg border border-orange-200">
      <h2 className="text-3xl font-extrabold mb-6 text-center text-yellow-500">
        Login
      </h2>
      {authError && (
        <div className="mb-3 text-center text-red-600 font-semibold">
          {authError}
        </div>
      )}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          login(username, password);
        }}
      >
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-3 border-2 border-orange-300 rounded w-full mb-4 focus:outline-none focus:ring-2 focus:ring-orange-400"
          placeholder="Username"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-3 border-2 border-orange-300 rounded w-full mb-4 focus:outline-none focus:ring-2 focus:ring-orange-400"
          placeholder="Password"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-green-500 hover:bg-blue-600 text-white rounded w-full transition-color duration-200"
        >
          {authLoading ? "Logging in..." : "Login"}
        </button>
      </form>
      <div className="mt-5 text-center text-gray-700">
        Don't have an account?{" "}
        <Link to="/signup">
          <span className="text-red-500 hover:underline font-semibold">
            Signup
          </span>
        </Link>
      </div>
    </div>
  );
}
