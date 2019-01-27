import React from 'react';
import GifItem from './GifItem';
// stateless funtional component, doesnt need to track on our applications state.
const GifList = (props) => {
    // loop through the array of gifs passed down from state, for each gif we are rendering a GifItem component
    const gifItems = props.gifs.map((image) => {
        // setting unique key property on each GifItem
        return <GifItem key={image.id} gif={image} />
    });

    return (
        <div className="gift-list">{gifItems}</div>
    );
};

export default GifList;