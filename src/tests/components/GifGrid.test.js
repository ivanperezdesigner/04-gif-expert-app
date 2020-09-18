import React from 'react';
import { shallow } from "enzyme"
import { GifGrid } from "../../components/GifGrid"
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs') // Fingir la llamada al archivo

describe('Probando el componente GifGrid', () => {
    const category = 'Amelie'
    test('Debe mostrarse correctamente', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        })
        const wrapper = shallow(<GifGrid category={category} />)
        expect(wrapper).toMatchSnapshot()
    })
    test('Debe mostrar items cuando se cargan las imágenes usando useFetchGifs', () => {
        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/imagen.png',
            title: 'Prueba'
        }]
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        })
        const wrapper = shallow(<GifGrid category={category} />)
        expect(wrapper).toMatchSnapshot()
    })
})
