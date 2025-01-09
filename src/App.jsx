import { gql, useQuery } from '@apollo/client'
import { useState } from 'react'
import Persons from './Persons'
import ALL_PERSONS from './queries/allPersons'
import PersonForm from './PersonForm'
import Notify from './Notify'
import EditNumber from './EditNumber'

const App = () => {
  const [errorMessage, setErrorMessage] = useState(null)
  const result = useQuery(ALL_PERSONS)

  const notify = (message) => {
    setErrorMessage(message)
    setTimeout(()=>{
      setErrorMessage(null)
    }, 5000)
  }

  if (result.loading) {
    return <div>loading...</div>
  }

  return (
    <div>
      <Notify errorMessage={errorMessage}/>
      <Persons persons={result.data.allPersons}/>
      <PersonForm setError={notify}/>
      <EditNumber notify={notify} />
    </div>
  )
}

export default App