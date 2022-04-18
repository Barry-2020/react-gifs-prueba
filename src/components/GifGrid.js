import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    // const [images, seImages] = useState([])
    const { data:images, loading } = useFetchGifs( category );



    // encodeURI reemplaza espacios formato url
    return (
        <>
        <h3 className='animate__animated animate__fadeInLeft'>{category}</h3>
        { loading && <p className='animate__animated animate__flash'>Loading...</p>}
        <div className='card-grid'>
                {
                    images.map(( img ) =>(
                        <GifGridItem 
                            key={ img.id } 
                            { ...img }
                        />
                    ))
                }
   
        </div>
        </>
        
    )
}
