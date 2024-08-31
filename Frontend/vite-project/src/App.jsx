import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./Pages/Dashboard" // Ensure Home is correctly imported
import CandidateApplication from "./Pages/CandidateApplication"
import LoginSignup from "./Components/loginSignup" // Ensure correct import
import InterviewerToken from "./Pages/InterviewerToken"
import InfoInterviewer from "./Pages/InfoInterviewer"
import Candidateschedule from "./Pages/Candidateschedule"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Application" element={<CandidateApplication />} />
        <Route path="/InterviewerToken" element={<InterviewerToken />} />
        <Route path="/login-signup" element={<LoginSignup />} />
        <Route path="/InfoInterviewer" element={<InfoInterviewer />} />
        <Route path="/candidateschedule" element={<Candidateschedule />} />
      </Routes>
    </Router>
  )
}

export default App
