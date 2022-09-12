import './ImageList.css';
import React from "react";
import ImageCard from './ImageCard';
//way One
// const ImageList = (props) => {
//     const images = props.images.map((img) => {
//         return <img key={img.id} src={img.urls.regular} alt={img.description}/>
//     });
//     return <div>{images}</div>
// };

//way Two
// const ImageList = (props) => {
//     const images = props.images.map(({ description, id, urls }) => {
//         return <img key={id} src={urls.regular} alt={description}/>
//     });
//     return <div className='image-list'>{images}</div>
// };

const ImageList = (props) => {
    const images = props.images.map((image) => {
        return <ImageCard key={image.id} image={image} />
    });
    return <div className='image-list'>{images}</div>
};
export default ImageList;