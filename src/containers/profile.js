import React from 'react'
import { Header, Profiles } from '../components'
import * as ROUTES from '../constants/routes'
import logo from '../logo.svg'

export function SelectProfileContainer({ user, setProfile }) {
  console.log("userrr", user)
  return (
    <>
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo to={ROUTES.HOME} src={logo} alt='netflix' />
        </Header.Frame>
      </Header>

      <Profiles>
        <Profiles.Title>Who's Watching</Profiles.Title>
        <Profiles.List>
          <Profiles.User>
            <Profiles.Picture src={user.photoURL}/>
            <Profiles.Name>{user.displayName}</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
      </Profiles>
    </>
  )
}