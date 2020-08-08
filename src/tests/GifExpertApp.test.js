import  React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import GiftExpertApp from './../GiftExpertApp';
import { GifGrid } from './../components/GifGrid';

describe('Pruebas en el componente principal GifExpertApp', () => {
    test('debe hacer math con el snapshot, renderizar ok', () => {
        
        const wrapper =shallow(<GiftExpertApp/>)

        expect(wrapper).toMatchSnapshot();
    })

    test('debe crear tantos GifGrid como tantos elemento hayan en categories,', () => {
        const categorias = ['Kimetsu no Yaiba', 'Dragon Ball'];

        const wrapper =shallow(<GiftExpertApp defaulCategories={categorias}/>)
        
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categorias.length);
    })
    
    
})
