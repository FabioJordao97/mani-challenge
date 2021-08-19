import React from 'react'
import { useSelector } from 'react-redux'


const MainList = () => {
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
             </div>
        )
    })
    return (
        <div>
           {renderList}
        </div>
    )
}

export default MainList