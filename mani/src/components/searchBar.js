import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { searchBar, setSearchResult } from '../redux/actions/trackActions'

const SearchBar = () => {

    const dispatch = useDispatch()
    const search = useSelector((state) => state.allTracks.search)

    const getSearchedSongs = () => {
        axios
            .get(`https://api.deezer.com/search?q=${search}`, {
                headers: {
                    Authorization: 'fr1o8qLvhemvtQGNTmMzGk7Gt9CE6Hfc89ArMEVbbePplYFSoU3'
                }
            })
            .then((response) => {
                dispatch(setSearchResult((response.data.data)))
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const onChange = (event) => dispatch(searchBar(event.target.value))
    const onSubmit = (event) => {
        event.preventDefault();
        getSearchedSongs();
    }


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