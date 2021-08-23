import React from 'react'
import { useHistory } from 'react-router'
import { goToPlaylist } from '../router/coordinator'
import { HeaderDiv, StyledTitle } from '../styles/headerStyles'

const Header = () => {
    const history = useHistory()
    return (
        <HeaderDiv>
            <StyledTitle>Manizer</StyledTitle>
            <button onClick={() => goToPlaylist(history)}>Playlist</button>
        </HeaderDiv>
    )
}

export default Header