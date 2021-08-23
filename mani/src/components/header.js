import React from 'react'
import { useHistory } from 'react-router'
import { goToPlaylist } from '../router/coordinator'
import { HeaderDiv, PlaylistHeader, PlaylistIconStyle, PlaylistTitleStyle, StyledTitle } from '../styles/headerStyles'
import { goToHome } from '../router/coordinator'
import ListIcon from '@material-ui/icons/List';

const Header = () => {
    const history = useHistory()

    

    return (
        <HeaderDiv>
            {history.location.pathname === '/playlist' ? 

            <PlaylistHeader>
                 <StyledTitle onClick={() => goToHome(history)}>Manizer</StyledTitle>
                 <PlaylistTitleStyle>Minha Playlist</PlaylistTitleStyle>
            </PlaylistHeader>          

            :

            <HeaderDiv>
                <StyledTitle onClick={() => history.go(0)}>Manizer</StyledTitle>
                <PlaylistIconStyle>
                <ListIcon fontSize='large' onClick={() => goToPlaylist(history)} />
                </PlaylistIconStyle>           
            </HeaderDiv>
            
        }
            
        </HeaderDiv>
    )
}

export default Header