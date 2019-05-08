import React from 'react';

export default class ProductRow extends React.Component {
    render() {
        const product = this.props.product;
        const name = product.stocked
            ? product.name
            : <span style={{
                color: 'red'
            }}>
                {product.name}
            </span>;

        return (
            <tr>
                <td>
                    <img src={product.image} height="100" width="100" alt={product.altIMG}></img>
                </td>
                <td>{name}</td>
                <td>{product.sku}</td>
                <td>{product.quantity}</td>
                <td>{product.price}</td>
            </tr>
        );
    }

}
