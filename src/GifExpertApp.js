import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
export const GifExpertApp = ({ defaultCategories = []}) => {
    // const categories = ['One Puch', 'Pokemon', 'Dragon Ball'];

    const [categories, setCategories] = useState(defaultCategories);


    // const handleAdd = () =>{
    //     // setCategories( [...categories, 'probando...']);
    //     setCategories( cats => [...cats,'xd'])
    // }

    return(
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr/>
            <ol>
                {
                    categories.map( (category, i) => (
                        <GifGrid 
                            key = {category}
                            category={category}></GifGrid>
                    ))
                }
            </ol>
        </>
    )
}