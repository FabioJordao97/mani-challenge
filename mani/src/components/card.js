import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToPlaylistFromSearch } from '../redux/actions/trackActions'
import format from '../functions/timeFormat'
import { AddToPlaylistDiv, SongArtist, SongCard, SongDuration, SongImg, SongPreview, SongTitle } from '../styles/mainListStyles'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import { ButtonResultDiv, SearchResultsDiv } from '../styles/searchResultStyles'

const Card = () => {
    const dispatch = useDispatch()
    const result = useSelector((state) => state.allTracks.result)

    const renderResults = result.length === 0 ? <p>Sua busca não encontrou nenhum resultado</p> : result.map((results) => {
        const duration = results.duration
        const link = results.link
        return (
            <SongCard key={results.id}>
                <SongImg src={results.album.cover_medium} alt='capa do álbum' />
                <ButtonResultDiv>
                    <PlayCircleFilledIcon fontSize="large" color='secondary' onClick={() => window.open(link, "_blank")} />
                    <AddToPlaylistDiv>
                        <PlaylistAddIcon fontSize="large" color="secondary" onClick={() => dispatch(addToPlaylistFromSearch(results.id))} />
                    </AddToPlaylistDiv>
                </ButtonResultDiv>

                <SongTitle>{results.title}</SongTitle>
                <SongArtist>{results.artist.name}</SongArtist>
                <SongDuration>{format(duration)} minutos</SongDuration>                
                <SongPreview controls>
                    <source src={results.preview}></source>
                </SongPreview>
            </SongCard>
        )
    })
    return (
        <SearchResultsDiv>
            {renderResults}
        </SearchResultsDiv>
    )
}

export default Card