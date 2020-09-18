import { shallow } from 'enzyme'
import { AddCategory } from '../../components/AddCategory'
import React from 'react'
import '@testing-library/jest-dom'

describe('Pruebas en el componente', () => {
    const setCategories = jest.fn()
    let wrapper = shallow(<AddCategory setCategories={ setCategories } />)

    beforeEach(() => {
        jest.clearAllMocks()
        wrapper = shallow(<AddCategory setCategories={ setCategories } />)
    })
    
    test('Debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot()
    })

    test('evaluar los cambios en la caja de texto', () => {
        const input = wrapper.find('input')
        const value = 'Hola mundo'
        input.simulate('change', {target: {value}})
        expect (wrapper.find('p').text().trim()).toBe(value)
    })

    test('No debe postear la información con submit', () => {
        wrapper.find('form').simulate('submit', {preventDefault(){}})
        expect(setCategories).not.toHaveBeenCalled()
    })
    
    test('debe llamar el setCategories y limpiar la caja de texto', () => {
        const value = 'Hola mundo'

        // 1. Simular el input change
        wrapper.find('input').simulate('change', {target:{value}})

        // 2. Simular el Submit
        wrapper.find('form').simulate('submit', {preventDefault(){}})

        // 3. setCategories se debe haber llamado
        expect(setCategories).toHaveBeenCalled()
        expect(setCategories).toHaveBeenCalledTimes(1)
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function))

        // 4. El valor del input debe estar vacío
        expect(wrapper.find('input').prop('value')).toBe('')
    })
})
