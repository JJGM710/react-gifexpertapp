import { useState, useEffect } from 'react';
import { getGifs } from './../helpers/getGifs';
// recibe los datos de imgs, para guardarlos en data y tambien se indica cuando termina de cargar los archivos
export const useFetchGifs = (category) => {
    const [state, setstate] = useState({
        data:[],
        loading: true,
    });

    //obterner cuando la categoria cambia, use effect  no puede ser async
    useEffect(() => {

            getGifs(category)
            .then(imgs =>{

                setstate({
                    data: imgs,
                    loading:false
                })
            })



    },[category])

    return state; //retorna el usesate como estado inciial
}