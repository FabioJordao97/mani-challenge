import React, { useEffect} from 'react'
import axios from 'axios'
import { setTracks } from '../redux/actions/trackActions'
import { useDispatch, useSelector} from 'react-redux'
import MainList from '../components/mainList'
import Card from '../components/card'
import Header from '../components/header'
import SearchBar from '../components/searchBar'
import Footer from '../components/footer'

const HomePage = () => {
    const dispatch = useDispatch();
    const show = useSelector((state) => state.allTracks.show)

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

    console.log(show)
    const showList = () => {
            if(show === false) {
                return (
                   <MainList />
                )
            } else{
                return (
                    <Card />
                )
            }
        }
  

    return (
        <div>
            <Header />
            <SearchBar />
            {showList()}
            <Footer />
        </div>
    )
}

export default HomePage