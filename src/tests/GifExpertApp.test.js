import React from 'react';
import { shallow } from 'enzyme'
import GifExpertApp from '../GifExpertApp'

describe('Probando el componenre <GifExpertApp', () => {
    test('debe cargar correctamente el componenete', () => {
        const wrapper = shallow(<GifExpertApp />)
        expect(wrapper).toMatchSnapshot()
    })
    
    test('Debe mostrar una lista de categorías', () => {
        const categories = ['figth club', 'Amelie']
        const wrapper = shallow(<GifExpertApp defaultCategories={categories} />)
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('GifGrid').length).toBe(categories.length)
    })
})
