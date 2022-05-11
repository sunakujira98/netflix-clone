import React, {useState} from 'react'
import { Link as ReactRouterLink } from 'react-router-dom'

import { 
  Background, 
  ButtonLink, 
  Container, 
  Dropdown,
  Feature, 
  FeatureCallOut, 
  Group, 
  Link, 
  Logo, 
  Picture, 
  Profile,
  Search,
  SearchIcon,
  SearchInput,
  Text, 
} from './styles/header'
export default function Header ({ bg = true, children, ...restProps }) {
  return bg ? <Background {...restProps}>{children}</Background> : children
}

Header.Feature = function HeaderFeature({ children, ...restProps }) {
  return <Feature {...restProps}>{children}</Feature>
}

Header.Profile = function HeaderProfile({ children, ...restProps }) {
  return <Profile {...restProps}>{children}</Profile>
}

Header.Group = function HeaderGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>
}

Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
  return <Dropdown {...restProps}>{children}</Dropdown>
} 

Header.FeatureCallOut = function HeaderFeatureCallOut({ children, ...restProps }) {
  return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>;
};

Header.Picture = function HeaderPicture({ src, ...restProps }) {
  return <Picture {...restProps} src={`/images/users/${src}.png`} />;
};

Header.Search = function HeaderPicture ({ searchTerm, setSearchTerm, ...restProps}) {
  const [searchActive, setSearchActive] = useState(false)

  return (
    <Search {...restProps}>
      <SearchIcon onClick={() => setSearchActive(searchActive => !searchActive)}>
        <img src='/images/icons/search.png' alt='Search' />
      </SearchIcon>
      <SearchInput 
        value={searchTerm} 
        onChange={({ target }) => setSearchTerm(target.value)}  
        placeholder='Search films and series' 
        active={searchActive} 
      />
    </Search>
  )
}

Header.Text = function HeaderText({ children, ...restProps }) {
  return <Text>{children}</Text>
}

Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
  return <Link>{children}</Link>
}

Header.Frame = function HeaderFrame ({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

Header.ButtonLink = function HeaderButtonLink ({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>
}

Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
    <ReactRouterLink to={to}>
      <Logo {...restProps} />
    </ReactRouterLink>
  )
}