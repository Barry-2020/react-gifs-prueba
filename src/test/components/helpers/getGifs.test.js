import { getGifs } from "../../../helpers/getGifs";

describe('Pruebas con fetch getgifs', () => {

    test('Debe de traer 10 elmts', async() => {
        const gifs = await getGifs('One Punch');
        
        expect( gifs.length ).toBe( 10 );
    })
    
    // test('Debe as', async() => {
    //     const gifs = await getGifs('');
        
    //     expect( gifs.length ).toBe( 0 );
    // })
})