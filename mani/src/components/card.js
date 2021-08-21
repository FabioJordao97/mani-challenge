import React from 'react'
import { useDispatch } from 'react-redux'
import { addToPlaylist } from '../redux/actions/trackActions'

const Card = (props) => {
    const dispatch = useDispatch()
    return (
        <div>
            <div key={props.id}>
                <p>{props.position}</p>
                 <p>{props.title}</p>
                 <img src={props.artist.cover_small} alt='capa do álbum' />
                 <p>{props.duration}</p>
                 <p>{props.name}</p>
                 <p>{props.link}</p>
                 <audio controls>
                    <source src={props.preview}></source>
                 </audio>
                 <button onClick={() => dispatch(addToPlaylist(props.id))}>Adicione a sua playlist</button>
             </div>
        </div>
    )
}

export default Card