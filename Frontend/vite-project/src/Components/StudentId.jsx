import { useState } from "react"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const StudentId = () => {
  const [studentId, setStudentId] = useState(null)

  const onStudentIdChange = (e) => {
    setStudentId(e.target.files[0])
  }

 

  const onVerify = async (e) => {
    e.preventDefault()

    const formDataToSend = new FormData()
    if (studentId) {
      formDataToSend.append("studentId", studentId)
    }

    // Simulate successful submission
    toast.success("Student ID submitted successfully!")
  
  }

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg ml-[15%] mr-[15%]">
      <h2 className="text-xl font-bold text-white mb-4 text-center">
        Verify Student ID
      </h2>
      <form onSubmit={onVerify}>
        <div className="mb-3 flex items-center">
          <input
            type="file"
            name="studentId"
            onChange={onStudentIdChange}
            className="p-2 border border-gray-600 rounded-lg bg-gray-700 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500 mr-3"
            required
          />
          <button
            type="submit"
            className="py-2 px-4 bg-blue-600 text-sm text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300 ml-auto"
          >
            Verify SID
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  )
}

export default StudentId
