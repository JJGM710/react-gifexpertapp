import  React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import { getGifs } from './../../helpers/getGifs';

describe('Pruebas en el helper gesGifs', () => {
    test('debe traer los elementos', async () => {
        
        const gifs= await getGifs('One punch')

        expect(gifs.length).toBe(5);
        
    })


    test('debe enviar un array vacio', async () => {
        
        const gifs= await getGifs('')

        expect(gifs.length).toBe(0);
        console.log(gifs)
        
    })
    
    
})
