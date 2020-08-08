import  React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import { GifGrid } from './../../components/GifGrid';
import { useFetchGifs } from './../../hooks/useFetchGifs';
jest.mock('./../../hooks/useFetchGifs');

describe('Pruebas en GifGrid', () => {

    const category = 'One Punch Man'

    test('debe renderizar el componente en su estado inicial', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
        const wrapper = shallow(<GifGrid category={category}/>);
        expect(wrapper).toMatchSnapshot();
        
    })
    
    test('debe de mostrar items cuando se cargan imagenes con useFetchGifs', () => {
        
        const imgs = [{
            id: '12dsad3',
            title: 'Probando Gifs',
            url: 'https://safs.asdsad.com'
        },
        {
            id: '12dsa213d3',
            title: 'Probando Gifs2',
            url: 'https://safs.asdsdsad.com'
        }
        ]
        
        useFetchGifs.mockReturnValue({
            data: imgs,
            loading: false
        });

        const {id, title, url}=imgs[0];
        console.log(id)
        const wrapper = shallow(<GifGrid category={category}/>);

        expect(wrapper.find('p').exists()).toBe(false)
        expect(wrapper.find('GifGridItem').length).toBe(imgs.length)
       
    })
    
})
