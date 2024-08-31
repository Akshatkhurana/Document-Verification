import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./Pages/Dashboard" // Ensure Home is correctly imported
import CandidateApplication from "./Pages/CandidateApplication"
import LoginSignup from "./Components/loginSignup" // Ensure correct import
import InterviewerToken from "./Pages/Interviewer"
import InfoInterviewer from "./Pages/InfoInterviewer"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Candidate" element={<CandidateApplication />} />
        <Route path="/InterviewerToken" element={<InterviewerToken />} />
        <Route path="/login-signup" element={<LoginSignup />} />
        <Route path="/InfoInterviewer" element={<InfoInterviewer />} />
      </Routes>
    </Router>
  )
}

export default App
