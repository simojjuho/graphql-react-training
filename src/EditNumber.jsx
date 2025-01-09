import { useMutation } from "@apollo/client"
import { useState, useEffect } from "react"
import EDIT_NUMBER from "./mutations/editNumber"

const EditNumber = ({ notify }) => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [ changeNumber, result ] = useMutation(EDIT_NUMBER)

  useEffect(() => {
    if(result.data && result.data.editNumber === null) {
      notify('Person not found')
    }
  }, result.data)

  const handlePhoneChange = (e) => {
    setPhone(e.target.value)
  }

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleClick = async (e) => {
    e.preventDefault()
    changeNumber({ variables: { name, phone }})
    setName('')
    setPhone('')
  }
  
  return (
    <div>
      <h2>Edit number:</h2>
      <div>
        <label htmlFor="updateName">Name</label>
        <input 
          id="updateName"
          name="Name"
          type="text"
          value={name}
          onChange={handleNameChange}  
        />
      </div>
      <div>
        <label htmlFor="updatePhone">Phone</label>
        <input 
          type="text" 
          name="Phone" 
          value={phone}
          id="updatePhone"
          onChange={handlePhoneChange}
        />
      </div>
      <button
        onClick={handleClick}
      >Edit number</button>
    </div>
  )
}

export default EditNumber