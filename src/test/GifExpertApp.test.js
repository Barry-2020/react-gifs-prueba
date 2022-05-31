import { shallow } from "enzyme";
import '@testing-library/jest-dom';
import { GifExpertApp } from "../GifExpertApp";

describe('Pruebas gifExpertApp', () => {


    let wrapper = shallow( <GifExpertApp/>);
    test('Debe de mostrar correctamente', () => {

        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar una lista de categorias', () => {
        const catergories = ['One punch', 'Dragon ball'];
        let wrapper = shallow( <GifExpertApp defaultCategories={ catergories }/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(catergories.length);
    })
})
