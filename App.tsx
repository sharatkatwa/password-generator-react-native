import {View, Text} from 'react-native'
import React, {useEffect, useState} from 'react'

// Form Validation
import * as Yup from 'yup'

const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, 'Should be min of 4 charecters')
    .max(16, 'Should be max 16 charecters')
    .required('Password length cannot be empty'),
})

const App = () => {
  const [password, setPassword] = useState('No password generated')
  const [isPassGenerated, setIsPassGenerated] = useState(false)

  const [lowerCase, setLowerCase] = useState(true)
  const [upperCase, setUpperCase] = useState(false)
  const [numbers, setNumbers] = useState(false)
  const [symbols, setSymbols] = useState(false)

  const generatePasswordString = (passwordLength: number) => {
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz'
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const numberChars = '0123456789'
    const symbolsChars = '@#$%^&*-+!'

    let allCharecters: string = ''

    if (lowerCase) {
      allCharecters += lowerCaseChars
    }
    if (upperCase) {
      allCharecters += upperCaseChars
    }
    if (numbers) {
      allCharecters += numberChars
    }
    if (symbols) {
      allCharecters += symbolsChars
    }

    const passwordResult = createPassword(allCharecters, passwordLength)
    useEffect(() => {
      setIsPassGenerated(true)
      setPassword(passwordResult)
    }, [])
  }
  const createPassword = (charecters: string, passwordLength: number) => {
    let result = ''
    for (let i = 0; i < passwordLength; i++) {
      const charecterIndex = Math.round(Math.random() * charecters.length)
      result += charecters.charAt(charecterIndex)
    }
    return result
  }
  const resetPasswordState = () => {
    setPassword('')
    setIsPassGenerated(false)
    setLowerCase(true)
    setUpperCase(false)
    setNumbers(false)
    setSymbols(false)
  }
  generatePasswordString(10)
  return (
    <View>
      <Text>{`This is your password ${password}`}</Text>
    </View>
  )
}

export default App
