import { useState, Fragment } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { FaUserCircle } from "react-icons/fa"

const InterviewerNavbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [specialization, setSpecialization] = useState("")
  const [freeSlot, setFreeSlot] = useState("")
  const [photo, setPhoto] = useState(null)

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  const handlePhotoUpload = (e) => {
    const uploadedPhoto = URL.createObjectURL(e.target.files[0])
    setPhoto(uploadedPhoto)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    toast.success("Form submitted successfully!")
    closeModal()
  }

  return (
    <div className="text-white">
      <div className="min-h-screen bg-gray-900 text-white">
        <nav className="bg-gray-800 p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">My App</h1>
            <div onClick={openModal} className="cursor-pointer">
              {photo ? (
                <img
                  src={photo}
                  alt="Profile"
                  className="w-10 h-10 rounded-full object-cover"
                />
              ) : (
                <FaUserCircle className="text-3xl" />
              )}
            </div>
          </div>
        </nav>

        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-50" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex items-center justify-center min-h-full p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-gray-800 p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-white"
                    >
                      Profile Information
                    </Dialog.Title>

                    <form onSubmit={handleSubmit} className="mt-4">
                      <div className="mb-4">
                        <label className="block text-sm mb-2 text-white">
                          Upload Photo
                        </label>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handlePhotoUpload}
                          className="w-full p-2 border border-gray-600 rounded-lg bg-gray-700 text-white text-sm focus:outline-none"
                        />
                      </div>

                      <div className="mb-4">
                        <label className="block text-sm mb-2 text-white">
                          Name
                        </label>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full p-2 border border-gray-600 rounded-lg bg-gray-700 text-white text-sm focus:outline-none"
                        />
                      </div>

                      <div className="mb-4">
                        <label className="block text-sm mb-2 text-white">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full p-2 border border-gray-600 rounded-lg bg-gray-700 text-white text-sm focus:outline-none"
                        />
                      </div>

                      <div className="mb-4">
                        <label className="block text-sm mb-2 text-white">
                          Specialization
                        </label>
                        <select
                          value={specialization}
                          onChange={(e) => setSpecialization(e.target.value)}
                          className="w-full p-2 border border-gray-600 rounded-lg bg-gray-700 text-white text-sm focus:outline-none"
                        >
                          <option value="" disabled>
                            Select Specialization
                          </option>
                          <option value="Web Development">
                            Web Development
                          </option>
                          <option value="Data Science">Data Science</option>
                          <option value="AI">Artificial Intelligence</option>
                        </select>
                      </div>

                      <div className="mb-4">
                        <label className="block text-sm mb-2 text-white">
                          Free Slot
                        </label>
                        <input
                          type="date"
                          value={freeSlot}
                          onChange={(e) => setFreeSlot(e.target.value)}
                          className="w-full p-2 border border-gray-600 rounded-lg bg-gray-700 text-white text-sm focus:outline-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-2 mt-3 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
                      >
                        Submit
                      </button>
                    </form>

                    <button
                      onClick={closeModal}
                      className="mt-4 w-full py-2 bg-gray-600 text-white text-sm font-semibold rounded-lg hover:bg-gray-700 transition duration-300"
                    >
                      Close
                    </button>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>

        <ToastContainer />
      </div>
    </div>
  )
}

export default InterviewerNavbar
