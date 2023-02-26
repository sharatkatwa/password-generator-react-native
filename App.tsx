import {View, Text} from 'react-native'
import React, {useState} from 'react'

// Form Validation
import * as Yup from 'yup'

const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, 'Should be min of 4 charecters')
    .max(16, 'Should be max 16 charecters')
    .required('Password length cannot be empty'),
})

const App = () => {
  const [password, setPassword] = useState('')
  const [isPassGenerated, setIsPassGenerated] = useState(false)

  const [lowerCase, setLowerCase] = useState(true)
  const [upperCase, setUpperCase] = useState(false)
  const [numbers, setNumbers] = useState(false)
  const [symbols, setSymbols] = useState(false)

  const generatePasswordString = (passwordLength: number) => {
    //
  }
  const createPassword = (charecters: string, passwordLength: number) => {
    //
  }
  const resetPasswordState = () => {
    //
  }

  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

export default App
