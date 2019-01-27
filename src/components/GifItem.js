import React from 'react';
// stateless functional component, doesnt need to track on our application state.
// takes the image object passed as props from the GifList and passes the URL into an image element.
const GifItem = (image) => {
    return (
        <div className="gif-item">
            <img alt={image.gif.name} src={image.gif.images.fixed_height.url} />
        </div>
    )
};

export default GifItem;