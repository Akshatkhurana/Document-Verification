import Data from "../Components/Data"
import ResumeForm from "../Components/Resume"
import Aadhar from "../Components/Aadhar"
import StudentId from "../Components/StudentId"

const CandidateApplication = () => {
  return (
    <>
      {" "}
      <div className=" bg-gray-900  h-full w-full">
        <h1 className="text-4xl font-bold text-white mb-10 text-center">
          Candidate Application
        </h1>

        <Data />
        <ResumeForm />
        <Aadhar />
        <StudentId />
        {/* icon  of small next at the bottom of the page that links  to a new page */}

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300 justify-center items-center flex mx-auto mt-10"
        >
          Submit
        </button>
      </div>
    </>
  )
}

export default CandidateApplication