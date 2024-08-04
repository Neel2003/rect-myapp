import React from 'react'

const Product = ({name, imgUrl, price}) => {
    // let oldprice = price;
    // price = oldprice + 150;
    // console.log(price);
    return(
        <figure>
            <img src={imgUrl} alt=''></img>
            <h1>Name = {name}</h1>
            <h2>Price = ${price}</h2>
        </figure>
    )
}

export default Product;