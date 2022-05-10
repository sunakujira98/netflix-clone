import React, { useContext, useEffect, useState } from 'react'

import { Loading } from '../components'
import { FirebaseContext } from '../context/firebase'

import { SelectProfileContainer } from './profile'

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

  return profile.displayName ? (
    loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />
  ) : (<SelectProfileContainer user={user} setProfile={setProfile} />)
}