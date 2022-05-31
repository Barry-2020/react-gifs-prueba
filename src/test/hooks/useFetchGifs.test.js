import { shallow } from "enzyme"
import '@testing-library/jest-dom';
import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from "@testing-library/react-hooks";

describe('Pruebas hook propio', () => {
    
    test('Debe retornar el estado incial', async() => {

        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('Dragon Ball'));
        // console.log(asd);
        const { data, loading } = result.current;
        await waitForNextUpdate();

        // console.log(data, loading);
        expect(data).toEqual([]);
        expect(loading).toBe(true);
    })

    test('debe de retornar un arreglo de imgs y loading en false', async() => {
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('Dragon Ball'));

        await waitForNextUpdate();

        const { data, loading } = result.current;

        // console.log(data, loading);
        expect(data.length).toBe(10);
        expect(loading).toBe(false);
    })
})
