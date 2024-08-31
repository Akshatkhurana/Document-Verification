import { useState } from "react"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const Aadhar = () => {
  const [resume, setResume] = useState(null)

  const onResumeChange = (e) => {
    setResume(e.target.files[0])
  }

  

  const onVerify = (e) => {
    e.preventDefault()

    if (resume) {
      // Simulate successful submission
      toast.success("Aadhar submitted successfully!")
    
    } else {
      toast.error("Please upload a file.")
    }
  }

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6 ml-[15%] mr-[15%]">
      <h2 className="text-xl font-bold text-white mb-4 text-center">
        Verify Aadhar
      </h2>
      <form onSubmit={onVerify}>
        <div className="mb-3 flex items-center">
          <input
            type="file"
            name="resume"
            onChange={onResumeChange}
            className="p-2 border border-gray-600 rounded-lg bg-gray-700 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500 mr-3"
            required
          />
          <button
            type="submit"
            className="py-2 px-4 bg-blue-600 text-sm text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300 ml-auto"
          >
            Verify Aadhar
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  )
}

export default Aadhar
