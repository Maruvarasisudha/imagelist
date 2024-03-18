import React from "react";



const ImageList= (props)=>{

    console.log(props.list,"immm")

    const image= props.list.map(image=>{
        return(<img  key={image.id}   src={image.webformatURL} alt="list"></img>)
    })
    return(
        <div>{image}
        </div>
    )
};


export default ImageList;