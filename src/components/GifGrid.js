import React, { useEffect, useState } from 'react'
import { GifGridItem } from './GifGridItem.js'
import { getGift } from '../helpers/getGifs.js'

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([])

    useEffect(() => {
        getGift(category)
            .then(imgs => setImages( imgs))
    }, [category])

    return (
        <>
            <h3>{ category }</h3>
            <div className='card-grid'>
                {
                    images.map(img => (
                    <GifGridItem 
                        key={img.id}
                        {...img}
                    />
                    ))
                }
            </div>
        </>
    )
}
