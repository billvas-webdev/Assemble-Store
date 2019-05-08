import React from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

export default class ProductTable extends React.Component {
    render() {
        const rows = [];
        let lastCategory = null;

        this
            .props
            .products
            .forEach((product) => {
                if (product.category !== lastCategory) {
                    rows.push(<ProductCategoryRow category={product.category} key={product.category}/>);
                }
                rows.push(<ProductRow product={product} key={product.name}/>);
                lastCategory = product.category;
            });

        return (
            <table>
                <thead>
                    {/* <tr>
                        <th>Name</th>
                        <th>Sku</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr> */}
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}
