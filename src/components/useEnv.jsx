require("dotenv").confiq()
import React from 'react'

const UseEnv = () => {
    const env = process.env.env
  return env
}

export default UseEnv