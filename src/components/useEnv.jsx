
import React from 'react'


const useEnv = () => {
    const url = import.meta.VITE_env
  return url
}

export default useEnv