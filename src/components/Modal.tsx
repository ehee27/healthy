// This goes on the parent comp
// import ModalProfPic from '../features/players/ModalProfPic'
// const [openProfPic, setOpenProfPic] = useState(false)
// ;<ModalProfPic
//   openProfPic={openProfPic}
//   setOpenProfPic={!setOpenProfPic}
//   onClose={() => setOpenProfPic(!openProfPic)}
//   playerInfo={playerInfo}
// />

import { useState } from 'react'
import Loading from '../../components/Loading'
import { toast } from 'react-toastify'

const ModalProfPic = ({ openProfPic, onClose, playerInfo }) => {
  const [imageUpload, setImageUpload] = useState(null)

  const [profilePic, setProfilePic] = useState('')

  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 flex justify-center items-center transition-colors ? ${
        openProfPic ? 'visible bg-black/20' : 'invisible'
      }`}
    >
      {/* ACTUAL MODAL CONTENT */}
      {isLoading ? (
        <Loading />
      ) : (
        <div
          onClick={e => e.stopPropagation()}
          className={`bg-white/90 rounded-xl shadow p-6 w-2/3 transition-all ${
            openProfPic ? 'scale-100 opacity-100' : 'scale-125 opacity-0'
          }`}
        >
          <button
            onClick={onClose}
            className="bg-green-300 absolute top-2 right-2 p-1 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-gray-600"
          >
            Close
          </button>
          <input
            className="text-sm"
            type="file"
            onChange={e => setImageUpload(e.target.files[0])}
          />
          <button
            className="transition ease-in-out delay-50 bg-green-600 w-[100px] h-[27px] hover:scale-105 text-xs text-white p-1 rounded hover:bg-green-500"
            onClick={handleUpload}
          >
            Upload Image
          </button>
        </div>
      )}
    </div>
  )
}

export default ModalProfPic
