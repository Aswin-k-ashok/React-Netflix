
import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube'
import axios from '../../constants/axios'
import { API_KEY, imageUrl } from '../../constants/constants'
import './RowPost.css'

function RowPost(props) {
    const [movies, setmovies] = useState([])
    const [urlId, seturlId] = useState('')
    useEffect(() => {
        axios.get(props.url).then((response) => {
            console.log(response.data.results)
            setmovies(response.data.results)

        }).catch(err => {
            console.log("api key is missing")
        })
    }, [])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    const handleMovie = (id) => {
        console.log(id)
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response => {
            if (response.data.results.length !== 0) {
                seturlId(response.data.results[0])
            } else {
                console.log('array empty')
            }
        })
    }
    return (
        <div style={{ position: "relative" }}>
            <div className='row' >
                <h2 style={{ marginLeft: '1em' }} >{props.title}</h2>
                <div className="posters">
                    {movies.map((obj) => <img onClick={() => handleMovie(obj.id)} className={props.isSmall ? 'smallPoster' : 'poster'} alt='poster' src={`${imageUrl + obj.backdrop_path}`} />

                    )}
                </div>
                {urlId && < YouTube opts={opts} videoId={urlId.key} />}
            </div>
        </div>
    )
}

export default RowPost
