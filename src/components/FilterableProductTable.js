import React from 'react';
// import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import filterableProductTableStyles from './filterableProductTable.module.scss';

export default class FilterableProductTable extends React.Component {
    render() {
        return (
            <div className={filterableProductTableStyles.listHeader}>
                {/* <SearchBar/> */}
                <ProductTable products={this.props.products}/>
            </div>
        );
    }

}
