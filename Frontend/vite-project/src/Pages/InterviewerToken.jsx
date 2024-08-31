import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const Interviewer = () => {
  const [token, setToken] = useState("")
  const navigate = useNavigate()

  const handleChange = (e) => {
    setToken(e.target.value)
  }

  const handleVerify = () => {
    if (token === "1234") {
      toast.success("Token Verified!")
      navigate("/InfoInterviewer") // Redirect to new page after verification
    } else {
      toast.error("Invalid Token. Please try again.")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          Interviewer Login
        </h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="mb-4">
            <label htmlFor="token" className="block text-white mb-2">
              Enter Token:
            </label>
            <input
              type="password"
              id="token"
              value={token}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-600 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="button"
            onClick={handleVerify}
            className="w-full py-3 mt-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Verify
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  )
}

export default Interviewer
