import React from 'react'
import { addToPlaylist } from '../redux/actions/trackActions'
import { useDispatch, useSelector } from 'react-redux'
import format from '../functions/timeFormat'
import { MainListDivStyled, SongImg, SongTitle, SongPosition, SongArtist, SongDuration, SongPreview } from '../styles/mainListStyles'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';

const MainList = () => {
    
    const dispatch = useDispatch()
    const songs = useSelector((state) => state.allTracks.tracks)

    const renderList = songs.map((song) => {
        const duration = song.duration
        const link = song.link
        return (
            <div key={song.id}>
                <SongPosition>{song.position}.</SongPosition>
                <SongImg src={song.album.cover_medium} alt='capa do álbum' /> 
                <button onClick={() => window.open(link, "_blank")}>Ouça no Deezer</button>
                <SongTitle>{song.title}</SongTitle>                               
                <SongArtist>{song.artist.name}</SongArtist>
                <SongDuration>Duração: {format(duration)} minutos</SongDuration>       
                <SongPreview controls>
                    <source src={song.preview}></source>
                </SongPreview>
                <button onClick={() => dispatch(addToPlaylist(song.id))}>Adicione a sua playlist</button>
            </div>
        )
    })

    return (
        <MainListDivStyled>
            <h3>Conheça o Top 10 do Manizer!</h3>
            {renderList}
        </MainListDivStyled>
    )
}

export default MainList