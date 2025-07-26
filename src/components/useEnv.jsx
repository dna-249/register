
import React from 'react'


const useEnv = () => {
    const url = import.meta.env.VITE_ENV
  return {url}
}

export default useEnv