import React from 'react'
import { addToPlaylist } from '../redux/actions/trackActions'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { goToPlaylist } from '../router/coordinator'
import SearchBar from './searchBar'


const MainList = () => {

    const dispatch = useDispatch()
    const history = useHistory()
    const songs = useSelector((state)=> state.allTracks.tracks)

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
                 <button onClick={() => dispatch(addToPlaylist(song.id))}>Adicione a sua playlist</button>
             </div>
        )
    })

    return (
        <div>
            <button onClick={() => goToPlaylist(history)}>Playlist</button>
            <SearchBar />
           {renderList}
        </div>
    )
}

export default MainList