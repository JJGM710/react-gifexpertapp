import  React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import { useFetchGifs } from './../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('Prueba en el hook usefetchGifs', () => {
//pruebas en hooks

    test('debe retornar el estado inicial', async() => {
        const {result, waitForNextUpdate } = renderHook(()=> useFetchGifs('Kimetsu no Yaiba'));
        const {data, loading} =result.current;
        //aqui se esperar hasta la siguiente vez qeu se renderize un hook para que no se desmonte
        // se resuelve la promesa la siguiente vez que se renderize un hook!!!
        await waitForNextUpdate();
      //  console.log(data, loading)
        expect(data).toEqual([]);
        expect(loading).toBe(true);
        
    })


    test('debe de retornar un arreglo de imagenes y el loading en false', async() => {
        const {result, waitForNextUpdate } = renderHook(()=> useFetchGifs('Kimetsu no Yaiba'));

        // aqui esperar hasta el siguietne cambio para poder obtener los resultados actuales pero actualizados una vez que se
        //hace el fetch en donde se cambia el estado del hook setState
        await waitForNextUpdate();
        const {data, loading} =result.current;
      //  console.log(data, loading)
        expect(data.length).toEqual(5);
        expect(loading).toBe(false);

    })
    
    
    
})
