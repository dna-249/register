require("dotenv").config()
import React from 'react'

const UseEnv = () => {
    const url = process.env.env
  return url
}

export default UseEnv