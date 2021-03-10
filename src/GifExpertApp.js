import React, { Fragment, useState } from 'react';
import { AddCategory } from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    return(
        <Fragment>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>

            <ol>
                {categories.map( (element) => 
                    <GifGrid key={element} category={element}/>
                )}
            </ol>
        </Fragment>
    )
}

export default GifExpertApp;