import React, { useState } from 'react'
import PropTypes from 'prop-types';

const AddCategory = ({setCategories, categories}) => {

    const [inputValue,setInputValue]= useState('')

    const handleInputChange = (e) => {
        //console.log(e.target.value);
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        let test = categories.find((ctg) => ctg.toLowerCase() === inputValue.trim().toLowerCase());
        if (inputValue.trim().length > 2 && test === undefined)
        {
            setCategories(ctg => [inputValue, ...ctg]);
            setInputValue('');
        }
       // console.log(categories);
        
    }
    return (
        <form onSubmit={handleSubmit}>
            <input 
                placeholder="Search.."
                className='box'
                type = "text" 
                value = { inputValue }
                onChange = {handleInputChange}
            ></input>
        </form>
    )
}

AddCategory.propTypes = {
    setCategories : PropTypes.func.isRequired,
    categories: PropTypes.array.isRequired
};

export default AddCategory;
