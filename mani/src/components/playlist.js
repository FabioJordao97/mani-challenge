import React from 'react'
import { removeFromPaylist } from '../redux/actions/trackActions'
import { useDispatch, useSelector } from 'react-redux'
import { goToHome } from '../router/coordinator'
import { useHistory } from 'react-router-dom'

const Playlist = () => {

    const songs = useSelector((state)=> state.allTracks.playlist)
    const history = useHistory()
    const dispatch = useDispatch()
    const renderList = songs.map((song)=>{
        return (
            <div key={song.id}>
                <p>{song.position}</p>
                 <p>{song.title}</p>
                 <img src={song.album.cover_small} alt='capa do álbum' />
                 <p>{song.duration}</p>
                 <p>{song.artist.name}</p>
                 <p>{song.link}</p>
                 <audio controls>
                    <source src={song.preview}></source>
                 </audio>
                 <button onClick={() => dispatch(removeFromPaylist(song.id))}>Remova da sua playlist</button>
             </div>
        )
    })
    
    return (
        <div>
            <button onClick={() => goToHome(history)}>Home</button>
            {renderList}
        </div>
    )
}

export default Playlist