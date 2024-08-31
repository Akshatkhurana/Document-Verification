import CandidateNavbar from "../Components/CandidateNavbar"

const Candidateschedule = () => {
  const candidateName = "Kriti Mahajan"
  const interviewerName = "John Doe"
  const interviewDate = "07/09/2024"
  const interviewTime = "10:00 AM"
  const meetingLink = "https://zoom.us/meeting-link"

  return (
    <>
      <CandidateNavbar />
      <div className="p-6 mt-12 max-w-6xl mx-auto bg-gray-900 text-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold text-center text-gray-100">
          Welcome {candidateName}
        </h1>
        <div className="mt-6 text-center">
          <p className="text-md text-gray-300">
            You are successfully verified and qualified for the interview round.
          </p>
          <p className="text-md mt-4 text-gray-300">
            Your interview is scheduled with{" "}
            <span className="text-gray-100 font-medium">{interviewerName}</span>
            .
          </p>
          <p className="text-md mt-2 text-gray-300">
            Date:{" "}
            <span className="text-gray-100 font-medium">{interviewDate}</span>
          </p>
          <p className="text-md mt-2 text-gray-300">
            Time:{" "}
            <span className="text-gray-100 font-medium">{interviewTime}</span>
          </p>
          <p className="text-md mt-4 text-blue-500 underline">
            <a href={meetingLink} target="_blank" rel="noopener noreferrer">
              Join Zoom Meeting
            </a>
          </p>
          <h1 className="text-2xl mt-4 font-semibold text-center text-gray-100">
            All the best!
          </h1>
        </div>
      </div>
    </>
  )
}

export default Candidateschedule
