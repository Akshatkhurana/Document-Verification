import { useNavigate } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Data from "../Components/Data"
import ResumeForm from "../Components/Resume"
import Aadhar from "../Components/Aadhar"
import StudentId from "../Components/StudentId"

const CandidateApplication = () => {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault() // Prevent the default link behavior

    // Perform validation checks here to ensure all fields are completed
    const allFieldsCompleted = true // Replace with actual validation logic

    if (allFieldsCompleted) {
      toast.success("Verified successfully!")

      // Redirect to the new page after 2 seconds
      setTimeout(() => {
        navigate("/candidateschedule")
      }, 2000)
    } else {
      toast.error("Please complete all required fields.")
    }
  }

  return (
    <>
      <div className="bg-gray-900 h-full w-full">
        <h1 className="text-4xl font-bold text-white mb-10 text-center">
          Candidate Application
        </h1>

        <Data />
        <ResumeForm />
        <Aadhar />
        <StudentId />

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300 justify-center items-center flex mx-auto mt-10"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
      <ToastContainer />
    </>
  )
}

export default CandidateApplication
