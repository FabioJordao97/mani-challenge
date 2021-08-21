import React, { useState } from 'react'
import axios from 'axios'
import Card from '../components/card'
import { useDispatch } from 'react-redux'
import { addToPlaylist } from '../redux/actions/trackActions'

const SearchBar = () => {
    
    const [search, setSearch] = useState('')
    const [result, setResult] = useState([])
    const dispatch = useDispatch()

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
    }

    const results = result.map((result) => {
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
    })
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                type='text'
                name='search'
                value={search}
                placeholder='Search'
                onChange={onChange}
                />
                <input type='submit' value='Search' />
            </form>
        </div>
    )
}

export default SearchBar