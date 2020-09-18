import React from 'react'
import PropTypes from 'prop-types'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem.js'

export const GifGrid = ({ category }) => {
    const {data:images, loading} = useFetchGifs(category)

    // useEffect(() => {
    //     getGift(category)
    //         .then(imgs => setImages( imgs))
    // }, [category])

    return (
        <>
            <h3>{ category }</h3>
            {loading && <p>Loading...</p>}
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

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}