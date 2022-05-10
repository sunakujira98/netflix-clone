import React, { useContext, useState } from 'react'
import { SelectProfileContainer } from './profile'
import { FirebaseContext } from '../context/firebase'
import { useEffect } from 'react/cjs/react.development'

export function BrowseContainer({ slides }) {
  const [profile, setProfile] = useState({})
  const [loading, setLoading] = useState({})
  const { firebase } = useContext(FirebaseContext)
  const user = firebase.auth().currentUser || {}

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [profile.displayName])

  return <SelectProfileContainer user={user} setProfile={setProfile} />
}