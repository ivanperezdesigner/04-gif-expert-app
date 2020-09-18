import { renderHook } from "@testing-library/react-hooks"
import { useFetchGifs } from "../../hooks/useFetchGifs"

describe('pruebas en el hook useFetchGifs', () => {
    test('Debe retornar el estado inicial', async() => {
        const {result, waitForNextUpdate} = renderHook(() => useFetchGifs('Fight Club'))
        const {data, loading} = result.current
        await waitForNextUpdate()
        expect(data).toEqual([])
        expect(loading).toBe(true)
    })
    
    test('Debe retornar un arreglo de imágenes y el loading en false', async() => {
        const {result, waitForNextUpdate} = renderHook(() => useFetchGifs('Fight Club'))
        await waitForNextUpdate()
        const {data, loading} = result.current
        expect(data.length).toBe(10)
        expect(loading).toBe(false)
    })
})
