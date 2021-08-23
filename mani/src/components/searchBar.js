import React from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { searchBar, setSearchResult} from '../redux/actions/trackActions'
import { SearchBarDiv, SearchBarStyled, SearchTitle } from '../styles/searchBarStyles'


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
        <SearchBarDiv>
            <SearchTitle>Encontre suas músicas favoritas aqui:</SearchTitle>
            <form onSubmit={onSubmit}>
                <SearchBarStyled
                    type='text'
                    name='search'
                    value={search}
                    onChange={onChange}
                />
                <input type='submit' value='Search' />
            </form>
        </SearchBarDiv>
    )
}

export default SearchBar