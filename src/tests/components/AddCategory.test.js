import  React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import AddCategory from './../../components/AddCategory';

describe('Pruebas en AddCategory', () => {
    const setCategories = jest.fn();
    let wrapper = shallow(< AddCategory setCategories={setCategories} categories={['One punch']}/>);
    
    beforeEach(()=>{
        // hace un clean de la funciones mock que hayamos inicializado
        jest.clearAllMocks();
        wrapper = shallow(< AddCategory setCategories={setCategories} categories={['One punch']}/>);

    });
    test('debe renderizar correctamente ', () => {


        expect(wrapper).toMatchSnapshot();
        
    })

    test('debe  cambiar la caja de texto', () => {

        const input = wrapper.find('input');
        const testinput = 'Hola Mundo';
        //dispara evento de una caja de texto  aka input
        input.simulate('change', {target : {value : testinput}});
       // console.log(wrapper.find('p').text().trim())
        expect(wrapper.find('p').text().trim()).toBe(testinput);
        
    })
    
    test('no debe de postear la informacion onSubmit', () => {

        wrapper.find('form').simulate('submit', {preventDefault(){}});

        expect(setCategories).not.toHaveBeenCalled();
        
    })
    
    test('debe de llamar el setCategories y limpiar la caja de text', () => {

        //simular el inputChange

        const input = wrapper.find('input');
        const testinput = 'Hola Mundo';
        input.simulate('change', {target : {value : testinput}});
        const test1= wrapper.find('p').text().trim()
        console.log(test1);
        // simular el submit
        wrapper.find('form').simulate('submit', {preventDefault(){}});
        // se debe haber llamado setCategories
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
        // el valor del input debe estar como un string vacio, dos  maneras 
        //1era
        const test2alt = wrapper.find('input').props().value;
        console.log(test2alt);
        expect(test2alt).toBe('');
        //2da
        const test2= wrapper.find('p').text().trim()
        expect(test2).toBe('');
        
    })
    
    
    
})
