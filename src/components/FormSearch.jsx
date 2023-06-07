import { useRef, useState } from "react"
import './styles/formSearchCard.css'


const FormSearch = ({ setIdLocation }) => {

    const idLocationValue = useRef()

    const [inputEmpty, setInputEmpty] = useState(false)

    const handleSubmit = e => {
        e.preventDefault()
        const inputValue = idLocationValue.current.value.trim()


          if(inputValue === '') {
            setInputEmpty(true)
              setTimeout(() => {
                setInputEmpty(false)
              }, 3000)   
          } else {
            setIdLocation(inputValue)
          }

    }

  return (
    <>
      <form onSubmit={handleSubmit} className="formSearch">
          <input
            className="form__input"
            placeholder="ID NUMBER"
            type="text"
            ref={idLocationValue} />
          <button className="form__btn">Search</button>
          <div className="form__popover">
            <a href="#">
              <h4 className="form__help">?</h4>
            </a>
            <div className="form__popover-content">
              <p className="form__popover-message">ID are from 1 to 126</p>
            </div>
          </div>
      </form>
      {
        inputEmpty && <h3 className="alert-none">This field is required.❗</h3>
      }

    </>
  )
}

export default FormSearch