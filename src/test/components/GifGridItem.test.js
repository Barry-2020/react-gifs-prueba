import { shallow } from "enzyme"
import { GifGridItem } from "../../components/GifGridItem"

describe('Pruebas en Gif Gird', () => {

    const title = "Un titulo";
    const url = 'http://localhost/algo.jpg';
    const wrapper = shallow( <GifGridItem title={ title } url={ url }/> );
   

    test('debe de mostrar el componente correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('debe tener un parrafo con el title', () => {
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( title );
    })

    test('debe tener una img igual al url y alt de los props', () => {
        const img = wrapper.find('img');
        // console.log( img.prop('src') ); 

        expect( img.prop('src')).toBe( url );
        expect( img.prop('alt')).toBe( title );

    })

    test('debe tener animate__fadeIn', () => {
        const div = wrapper.find('div');
        const vale = div.props().className;
        // console.log( div.props().className.indexOf('animate__fadeInLeft') ); 
        
        expect( vale.includes('animate__fadeIn') ).toBe( true );
    })

 })