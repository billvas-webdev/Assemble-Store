import React from 'react';
// import listStyles from './listItems.module.scss';

export default class ListItems extends React.Component {
    constructor(props) {
		super(props);
		this.state = {

		};
	}

	render() {
		return (
				<form className="form" onSubmit={this.onSubmit}>
					{this.state.error && <p className="form__error">{this.state.error}</p>}
					<input
					type="text"
					placeholder = "Quantity"
					autoFocus
					className="text-input"
					value={this.state.description}
					onChange ={this.onDescriptionChange}
					/>
					<input
					type="text"
					placeholder="Price"
					className="text-input"
					value={this.state.amount}
					onChange={this.onAmountChange}
					/>
					<div>
						<button className="button">Checkout</button>
					</div>
				</form>
		);
	}
};
