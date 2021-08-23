import styled from 'styled-components'

export const MainListDivStyled = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

export const SongPosition = styled.span`
color: #525A59;
`

export const SongTitle = styled.h2`
display: flex;
margin-left: 4vh;
color: #525A59;
`

export const SongArtist = styled.h3`
color: #525A59;
margin-left: 4vh;
`
export const SongDuration = styled.p`
color: #525A59;
margin-left: 4vh;
`

export const SongImg = styled.img`
margin-left: 1vw;
display: inline;
`

export const SongPreview = styled.audio`
margin-left: 3vh;
`

export const ButtonDiv = styled.div`
margin-top: -8vh;
margin-left: 4vh;
&:hover{
    cursor: pointer;
}

`

export const SongCard = styled.div`
border-bottom: 2vh double #525A59;
border-width: thin;
margin-bottom: 1vh;
`

export const AddToPlaylistDiv = styled.div`
margin-left: 35vh;
margin-top: -6vh;
&:hover{
    cursor: pointer;
}
`