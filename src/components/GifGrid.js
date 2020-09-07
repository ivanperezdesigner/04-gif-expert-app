import React from 'react'
import { apiKeyG } from '../keys/keys.js'

export const GifGrid = ({ category }) => {

    const getGift = async() =>{
        const url = `https://api.giphy.com/v1/gifs/search?q=Fight club&limit=10&api_key=${apiKeyG}`
        const resp = await fetch(url)
        const {data} = await resp.json()
        
        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })

        console.log(gifs)
    }

    getGift()

    return (
        <div>
            <h3>{ category }</h3>
        </div>
    )
}
