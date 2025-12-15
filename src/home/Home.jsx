import React, { useContext } from 'react'
import { context } from '../context/AuthContext'

export default function Home() {
  const { user } = useContext(context)

  return (
    <>
      <h1>Hi {user?.name}</h1>
    </>
  )
}
