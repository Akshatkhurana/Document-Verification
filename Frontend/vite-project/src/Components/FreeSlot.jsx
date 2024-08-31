import { useState, useEffect } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import Select from "react-select"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const timeOptions = [
  { value: "09:00 AM", label: "09:00 AM" },
  { value: "10:00 AM", label: "10:00 AM" },
  { value: "11:00 AM", label: "11:00 AM" },
  { value: "12:00 PM", label: "12:00 PM" },
  { value: "01:00 PM", label: "01:00 PM" },
  { value: "02:00 PM", label: "02:00 PM" },
  { value: "03:00 PM", label: "03:00 PM" },
  { value: "04:00 PM", label: "04:00 PM" },
  { value: "05:00 PM", label: "05:00 PM" },
]

// Hardcoded interview questions for miscellaneous and website development
const interviewQuestions = [
  "Tell me about yourself and your background.",
  "Describe a challenging project you worked on and how you overcame the obstacles.",
  "What is the purpose of a responsive design? How do you implement it?",
  "How does the Document Object Model (DOM) work in a web browser?",
  "Can you explain the concept of asynchronous JavaScript and how Promises work?",
  "What are the key principles of responsive web design?",
  "Explain the difference between an array and a linked list.",
  "What is the time complexity of binary search? How does it compare to linear search?",
  "Can you explain what a hash table is and how it works?",
]

const FreeSlot = () => {
  const [selectedDates, setSelectedDates] = useState([])
  const [selectedTimes, setSelectedTimes] = useState([])
  const [loading, setLoading] = useState(false)
  const [candidateInfo, setCandidateInfo] = useState(null)
  const [questions, setQuestions] = useState([])

  const handleDateChange = (date) => {
    setSelectedDates([...selectedDates, date])
  }

  const handleTimeChange = (selectedOptions) => {
    setSelectedTimes(selectedOptions)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    toast.success("Free slots submitted successfully!")

    // Simulate fetching candidate info and interview questions
    setTimeout(() => {
      setLoading(false)
      setCandidateInfo({
        id: "12345",
        name: "Krititi Mahajan",
        resume: "resume_link",
        fieldOfInterest: "Website Development and Miscellaneous",
        date: selectedDates[0]?.toDateString() || "Not selected",
        time:
          selectedTimes.map((time) => time.label).join(", ") || "Not selected",
      })
      setQuestions(interviewQuestions)
    }, 3000)
  }

  useEffect(() => {
    if (candidateInfo) {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })
    }
  }, [candidateInfo])

  return (
    <div className="text-white p-6 bg-gray-900 min-h-screen">
      <div className="container mx-auto">
        {loading ? (
          <div className="flex flex-col items-center justify-center min-h-screen">
            <h2 className="text-2xl font-bold mb-6">
              Data is being fetched...
            </h2>
          </div>
        ) : candidateInfo ? (
          <div className="flex flex-col items-center mt-6">
            <h2 className="text-2xl font-bold mb-6">
              Hi JOE, you are assigned with the below candidate:
            </h2>
            <p className="text-lg mb-2">Name: {candidateInfo.name}</p>
            <p className="text-lg mb-2">ID: {candidateInfo.id}</p>
            <p className="text-lg mb-2">Date: {candidateInfo.date}</p>
            <p className="text-lg mb-2">Time: {candidateInfo.time}</p>
            <p className="text-lg mb-2">
              Resume:{" "}
              <a
                href={candidateInfo.resume}
                className="text-blue-400 hover:underline"
              >
                View Resume
              </a>
            </p>
            <p className="text-lg mb-2">
              Field of Interest: {candidateInfo.fieldOfInterest}
            </p>
            <div className="mt-6">
              <h3 className="text-xl font-bold mb-2">
                Interview Questions for Kriti:
              </h3>
              {questions.length > 0 ? (
                <ul className="list-disc pl-5">
                  {questions.map((question, index) => (
                    <li key={index} className="mb-2">
                      {question}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No questions available.</p>
              )}
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-sm mb-2 text-white">
                Select Dates
              </label>
              <DatePicker
                selected={null}
                onChange={handleDateChange}
                inline
                minDate={new Date()}
                className="rounded-lg shadow-lg bg-gray-800 text-white p-4"
                calendarClassName="bg-gray-800 text-white"
                dayClassName={(date) =>
                  selectedDates.includes(date)
                    ? "bg-blue-600 text-white"
                    : undefined
                }
              />
              <div className="mt-4 flex flex-wrap">
                {selectedDates.map((date, index) => (
                  <div
                    key={index}
                    className="bg-blue-600 text-white px-3 py-1 rounded-full mr-2 mb-2"
                  >
                    {date.toDateString()}
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm mb-2 text-white">
                Select Time Slots
              </label>
              <Select
                isMulti
                options={timeOptions}
                onChange={handleTimeChange}
                value={selectedTimes}
                className="basic-multi-select"
                classNamePrefix="select"
                theme={(theme) => ({
                  ...theme,
                  colors: {
                    ...theme.colors,
                    primary25: "#2d3748", // Background color on hover
                    primary: "#1a202c", // Highlight color
                    neutral0: "#1a202c", // Dark background color
                    neutral80: "#ffffff", // White text color
                    neutral50: "#a0aec0", // Placeholder text color
                    neutral20: "#718096", // Border color
                  },
                })}
              />
              <div className="mt-4 flex flex-wrap">
                {selectedTimes.map((time, index) => (
                  <div
                    key={index}
                    className="bg-green-600 text-white px-3 py-1 rounded-full mr-2 mb-2"
                  >
                    {time.label}
                  </div>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-2 mt-4 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Submit Free Slots
            </button>
          </form>
        )}

        <ToastContainer />
      </div>
    </div>
  )
}

export default FreeSlot
