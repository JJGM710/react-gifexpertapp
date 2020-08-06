import React from 'react'
import { GifGridItem } from './GifGridItem';
//import { getGifs } from './../helpers/getGifs';
import { useFetchGifs } from './../hooks/useFetchGifs';

export const GifGrid = ({category}) => {

    // const [images, setimages] = useState([]);

    // // genera una dependecia con category, es decir, que cada vez que el valor de esa propiedad cambie va a renderizar ese component
    // useEffect(() => {
    //     getGifs(category)
    //         .then(imgs => setimages(imgs));
    // }, [category])

    const {data : images, loading} = useFetchGifs(category);


    //getGifs();
    return (
        <>
        <h3 className="animate__animated animate__flash animate__slow">{category}</h3>

        {loading && <h2 className="animate__animated animate__flash animate__slower">Loading...</h2>}

        <div className= 'card-grid'>
            
            {images.map((img) => (
                 <GifGridItem 
                    key = {img.id}
                    {...img} />
            ))
            }

        </div>
        </>
    );
};
