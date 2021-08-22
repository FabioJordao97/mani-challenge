import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToPlaylistFromSearch } from '../redux/actions/trackActions'

const Card = () => {
    const dispatch = useDispatch()

    const result = useSelector((state) => state.allTracks.result)
    
    const renderResults = result.map((results) =>{
        return (
            <div key={results.id}>
                 <p>{results.title}</p>
                 <img src={results.album.cover_small} alt='capa do álbum' />
                 <p>{results.duration}</p>
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
        {renderResults}
        </div>
    )
}

export default Card