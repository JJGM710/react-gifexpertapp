import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import { GifGrid } from './components/GifGrid';

const GiftExpertApp = () => {

    //uso de useState para establecer categorias
    const [categories, setCategories] = useState([]);

    // const handleAdd = () => {
    //     setCategories( ctgs => [...ctgs,'Kimetsu no Yaiba']);

    // }


    return (
        <>
        <h1>{"<"}Buscador de gifs{">"}</h1>
        {/* conectar con el componente AddCategory  enviando dos propiedades para establecer mas catergorias */}
        <AddCategory setCategories={setCategories} categories={categories}></AddCategory>
        <br></br>
        <ol>
        {/* con el metodo map se la usa con el estado de categorias, la cual es un array
        y renderiza varios Gifgrid como elementos dentro de categories exista.
        Cuando se anaden nuevos, debido a como trabaja React solo se rederiza esa parte nueva del DOM
        y se anade solamente el GifGrid con el elemento que fue anadido a categories */}
            {categories.map(category => (
                <GifGrid 
                    category= {category}
                    key = {category} 
                />
            ))
            }
        </ol>

        </>
    );
};



export default GiftExpertApp
