import { useEffect, useState, useRef } from 'react'

// isOpen true olduğunda Modalı açalım
export default function App() {
  const [isOpen, setOpen] = useState(false)

  function openModal() {
    setOpen(true)
  }

  function closeModal() {
    setOpen(false)
  }

  return (
    <>
      <button
        onClick={openModal}
        className="border-2 border-black bg-gray-400 text-white mt-4 py-2 px-4 rounded mx-auto block"
      >
        Modalı aç
      </button>
      {isOpen && (
        <Modal>
          <h1 className="pb-2 text-lg font-bold">Modal açık</h1>
          <button onClick={closeModal}>Kapalı</button>
        </Modal>
      )}
    </>
  )
}

function Modal({ children }) {
  // ref.showModal()
  const modalRef = useRef(null)

  useEffect(() => {
    if (modalRef.current) {
      modalRef.current.showModal()
    }
  }, [])

  return (
    <dialog ref={modalRef} className="border-2 border-black p-4">
      {children}
    </dialog>
  )
}
/*
 HTML <dialog> öğesinin kendisinin bir JavaScript API’sine sahip olması nedeniyle sadece JSX ile görünür hale getirilemedi. Yani, <dialog> elementini göstermek için ref.showModal() metodunu çağırmak gerekti.
 
 useRef Hook’u: Modal öğesine referans oluşturmak için useRef kullanıyoruz. modalRef.current.showModal() ile modalı açabiliyoruz.

 useEffect Hook’u: Modal render edildiğinde (ilk açıldığında) showModal() fonksiyonunu çağırmak için useEffect kullanıyoruz. 

 */
