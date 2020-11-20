// RAFC -- snipet para crear una funcion exportable con import react incluido

import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    // const categories = ['One Punch','Samurai X','Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch']);
    
    // const handleAdd = () =>{
    //     // setCategories([...categories,'Fate Zero']);
    //     setCategories(cats => [...cats,'Fate Zero']);
    // }
    
    return (
        // <> aa </> -- llaves de mayor y menor se denomina fragment que sirve para agrugar codigo html
        <>
            <h2>Gif Expert App</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr/>
            <ol>
                {
                    categories.map( category => (
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    ))
                }
            </ol>
        </>
    )
}
