import { useState } from "react"
import { toast, ToastContainer } from "react-toastify"
import PropTypes from "prop-types" // Add this line to import PropTypes
import "react-toastify/dist/ReactToastify.css"

const InputField = ({ label, type, value, onChange }) => {
  InputField.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  }
  return (
    <div className="mb-3">
      <label className="block text-sm text-white mb-2 ">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="w-full p-2 border border-gray-600 rounded-lg bg-gray-700 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  )
}

const Data = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    toast.success("Form submitted successfully!")
    // Add your form submission logic here
  }

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6 ml-[15%] mr-[15%]">
      <h2 className="text-xl font-bold text-white mb-4 text-center">
        Data Form
      </h2>
      <form onSubmit={handleSubmit}>
        <InputField
          label="Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <InputField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          className="w-[20%] py-2 mt-3 bg-blue-600 text-sm text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Submit
        </button>
      </form>
      <ToastContainer />
    </div>
  )
}

export default Data