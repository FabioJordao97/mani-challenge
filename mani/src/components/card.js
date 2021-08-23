import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToPlaylistFromSearch } from '../redux/actions/trackActions'
import { goToHome } from '../router/coordinator'
import { useHistory } from 'react-router-dom'
import format from '../functions/timeFormat'

const Card = () => {
    const dispatch = useDispatch()
    const result = useSelector((state) => state.allTracks.result)
    const history = useHistory()
    
    const renderResults = result.length === 0 ? <p>Sua busca não encontrou nenhum resultado</p> : result.map((results) =>{
        const duration = results.duration
        return (
            <div key={results.id}>
                 <p>{results.title}</p>
                 <img src={results.album.cover_small} alt='capa do álbum' />
                 <p>{format(duration)} minutos</p>
                 <p>{results.artist.name}</p>
                 <p>{results.link}</p>
                 <audio controls>
                    <source src={results.preview}></source>
                 </audio>
                 <button onClick={() => dispatch(addToPlaylistFromSearch(results.id))}>Adicione a sua playlist</button>
             </div>
        )
    })
    return (
        <div>
            <button onClick={() => history.go(0)}>Home</button>
        {renderResults}
        </div>
    )
}

export default Card