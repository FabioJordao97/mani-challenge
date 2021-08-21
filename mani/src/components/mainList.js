import React, {useState} from 'react'
import axios from 'axios'
import { addToPlaylist } from '../redux/actions/trackActions'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { goToPlaylist } from '../router/coordinator'
import SearchBar from './searchBar'


const MainList = () => {

    const dispatch = useDispatch()
    const history = useHistory()
    const songs = useSelector((state)=> state.allTracks.tracks)

    const [search, setSearch] = useState('')
    const [result, setResult] = useState([])
    const [showResult, setShowResult] = useState(false)

    const getSearchedSongs = () => {
        axios
        .get(`https://api.deezer.com/search?q=${search}`, {
            headers: {
                Authorization: 'fr1o8qLvhemvtQGNTmMzGk7Gt9CE6Hfc89ArMEVbbePplYFSoU3'
            }
        })
        .then((response) => {
            setResult(response.data.data)
        })
        .catch((error) => {
            console.log(error)
        })
    }
    console.log(result)

    const onChange = event => setSearch(event.target.value)
    const onSubmit = event => {
        event.preventDefault()
        getSearchedSongs()
        setShowResult(true)
    }

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

    const renderSearchList = result.map((result) => {
        return (
            <div key={result.id}>
            <p>{result.position}</p>
             <p>{result.title}</p>
             <img src={result.album.cover_small} alt='capa do álbum' />
             <p>{result.duration}</p>
             <p>{result.artist.name}</p>
             <p>{result.link}</p>
             <audio controls>
                <source src={result.preview}></source>
             </audio>
             <button onClick={() => dispatch(addToPlaylist(result.id))}>Adicione a sua playlist</button>
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