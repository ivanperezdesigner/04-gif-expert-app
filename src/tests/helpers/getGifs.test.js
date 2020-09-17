import { getGifs } from '../../helpers/getGifs'

describe('Pruebas con getGifs Fetch', () => {
    test('Debe traer 10 elemetos', async() => {
        const gifs = await getGifs('august burns red')
        expect(gifs.length).toBe(10)
    })

    test('Debe traer 10 elemetos', async() => {
        const gifs = await getGifs('')
        expect(gifs.length).toBe(0)
    })
    
})

