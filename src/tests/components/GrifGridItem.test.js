import  React from 'react';
import { GifGridItem } from '../../components/GifGridItem';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';

const category = ['One Punch Man']

const title = 'titulo';
const url = 'https://localhost/algo.jpg';
const id = '112334';

const wrapper = shallow(<GifGridItem title = {title} url = {url} id = {id}/>);

describe('Pruebas en GifGridItem', () => {
    test('debe renderizar correctamente', () => {

        expect(wrapper).toMatchSnapshot();
    })

    test('debe decir un parrafo con el title... revisar el valor del title ', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
        
    })

    test('debe decir una imagen... revisar url y alt de los props', () => {
        const img = wrapper.find('img');
        console.log(img.props().src);
        expect(img.props().src).toBe(url);
        expect(img.props().alt).toBe(title);
    })
    
    test('debe tener animate__fadeIn ', () => {
        //metodo dos para comparar class names
        // const div = wrapper.find('div').hasClass('animate__fadeIn');
        // console.log(div)
        // expect(div).toBe(true)

        const div = wrapper.find('div');
        const className = div.prop('className');

        expect(className.includes('animate__fadeIn')).toBe(true);
        
    })
    
    
    
    
})
