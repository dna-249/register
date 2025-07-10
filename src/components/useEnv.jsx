
import React from 'react'
import "dotenv/config"

const useEnv = () => {
    const url = process.env.env
  return url
}

export default useEnv