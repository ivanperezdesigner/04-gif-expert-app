import { shallow } from 'enzyme'
import { AddCategory } from '../../components/AddCategory'
import React from 'react'

describe('Pruebas en el componente', () => {
    const setCategories = () => {}
    test('Debe mostrarse correctamente', () => {
        const wrapper = shallow(<AddCategory setCategories={ setCategories } />)
        expect(wrapper).toMatchSnapshot()
    })
    
})
