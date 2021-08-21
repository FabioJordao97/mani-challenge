import React, { useEffect, useState} from 'react'
import axios from 'axios'
import { setTracks } from '../redux/actions/trackActions'
import { useDispatch} from 'react-redux'
import MainList from '../components/mainList'
import SearchBar from '../components/searchBar'
import Card from '../components/card'

const HomePage = () => {
    const dispatch = useDispatch();

    const getSongs = () => {
        axios
            .get('https://api.deezer.com/chart/0/tracks', {
                headers: {
                    Authorization: 'fr1o8qLvhemvtQGNTmMzGk7Gt9CE6Hfc89ArMEVbbePplYFSoU3'
                }
            })

            .then((response) => {
                dispatch(setTracks(response.data.data))
            })

            .catch((error) => {
                console.log(error.message)
            })
    }

    useEffect(() => {
        getSongs()
    }, [])

    return (
        <div>
            <MainList />
        </div>
    )
}

export default HomePage