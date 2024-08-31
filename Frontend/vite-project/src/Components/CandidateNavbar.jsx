import { useState } from "react"
import { FaUserCircle } from "react-icons/fa"

const CandidateNavbar = () => {
  const [photo, setPhoto] = useState(null)

  const handlePhotoUpload = (e) => {
    const uploadedPhoto = URL.createObjectURL(e.target.files[0])
    setPhoto(uploadedPhoto)
  }

  const openFileInput = () => {
    document.getElementById("fileInput").click()
  }

  return (
    <>
      <nav className="bg-gray-800 p-4 text-white">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">My App</h1>
          <div onClick={openFileInput} className="cursor-pointer">
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

      <input
        type="file"
        id="fileInput"
        accept="image/*"
        style={{ display: "none" }}
        onChange={handlePhotoUpload}
      />
    </>
  )
}

export default CandidateNavbar
