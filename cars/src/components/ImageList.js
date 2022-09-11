import React from "react";

//way One
// const ImageList = (props) => {
//     const images = props.images.map((img) => {
//         return <img key={img.id} src={img.urls.regular} alt={img.description}/>
//     });
//     return <div>{images}</div>
// };

//way Two
const ImageList = (props) => {
    const images = props.images.map(({ description, id, urls }) => {
        return <img key={id} src={urls.regular} alt={description}/>
    });
    return <div>{images}</div>
};

export default ImageList;