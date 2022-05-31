import { shallow } from "enzyme"
import '@testing-library/jest-dom';
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
// import { useFetchGifs } from '../hooks/useFetchGifs'
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas GifGrid', () => {

    const category = 'dragon ball';

    
    test('Debe de mostrar correctamente', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow( <GifGrid category = { category } />);
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar items cuando se carga imagenes useFetchGifs', () => {

        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/cualquier/cosa.jpg',
            title: 'Cualquier Cosa'
        },
        {
            id: '123',
            url: 'https://localhost/cualquier/cosa.jpg',
            title: 'Cualquier Cosa'
        }]

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow( <GifGrid category = {category} />);


        expect(wrapper).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe(false);
        expect( wrapper.find('GifGridItem').length ).toBe( gifs. length);
    })
})