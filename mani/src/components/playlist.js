import React from 'react'
import { removeFromPaylist } from '../redux/actions/trackActions'
import { useDispatch, useSelector } from 'react-redux'
import Header from './header'
import Footer from './footer'
import { DeleteDiv, PlaylistEmpty, PlaylistEmptyP } from '../styles/playlistStyles'
import format from '../functions/timeFormat'
import { ButtonDiv, MainListDivStyled, SongArtist, SongCard, SongDuration, SongImg, SongPreview, SongTitle } from '../styles/mainListStyles'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import DeleteIcon from '@material-ui/icons/Delete';

const Playlist = () => {

    const songs = useSelector((state) => state.allTracks.playlist)
    const dispatch = useDispatch()

    const renderList = songs.length === 0

        ?
        <PlaylistEmpty>
            <PlaylistEmptyP>Lista vazia</PlaylistEmptyP>
        </PlaylistEmpty>
        :

        songs.map((song) => {
            const duration = song.duration;
            const link = song.link
            return (
                <SongCard key={song.id}>
                    <DeleteDiv>
                    <DeleteIcon onClick={() => dispatch(removeFromPaylist(song.id))}/>
                    </DeleteDiv>                    
                    <SongImg src={song.album.cover_medium} alt='capa do álbum' />
                    <ButtonDiv>
                    <PlayCircleFilledIcon fontSize="large" color='secondary' onClick={() => window.open(link, "_blank")}/>
                    </ButtonDiv>
                    <SongTitle>{song.title}</SongTitle>
                    <SongArtist>{song.artist.name}</SongArtist>
                    <SongDuration>Duração: {format(duration)} minutos</SongDuration>
                    <SongPreview controls>
                        <source src={song.preview}></source>
                    </SongPreview>
                </SongCard>
            )
        })

    return (
        <MainListDivStyled>
            <Header />
            {renderList}
            <Footer />
        </MainListDivStyled>
    )
}

export default Playlist