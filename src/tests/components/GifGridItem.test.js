import { shallow } from 'enzyme'
import { GifGridItem } from '../../components/GifGridItem'
import React from 'react'

describe('Pruebas en <GifGridItem />', () => {

    const title = 'un título'
    const url = 'https://localhost/image.png'
    const wrapper = shallow(<GifGridItem title={title} url={url} /> )

    test('Debe mostrar el componente correctamente', () => {
        expect(wrapper).toMatchSnapshot()
    })

    test('Debe mostrar un párrafo con el titulo', () => {
        const p = wrapper.find('p')
        expect( p.text().trim() ).toBe(title)
    })

    test('Debe tener la imagen igual al url y alt de los props', () => {
        const img = wrapper.find('img')
        // console.log(img.props())
        expect(img.prop('src')).toBe(url)
        expect(img.prop('alt')).toBe(title)
    })
    
    test('Debe tener la clase animate__flipInX', () => {
        const div = wrapper.find('div')
        // console.log(div.prop('className'))
        const className = div.prop('className')
        expect(className.includes('animate__flipInX')).toBe(true)
    })
})
