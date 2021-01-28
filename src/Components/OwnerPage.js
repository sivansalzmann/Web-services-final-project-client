import React, { Component } from "react";
import AssetsData from '../Data/AssetsData.json';
import AssetList from './AssetsList';


class OwnerPage extends Component {
	constructor() {
		super()
		this.state = {
			items: AssetsData.items,
			editing: false,
			itemToEdit: null,
		}
		this.delete = this.delete.bind(this);
		this.editItem = this.editItem.bind(this);
		this.showAsset = this.showAsset.bind(this);
		// this.add = this.add.bind(this);
		this.nextId = this.nextId.bind(this);
	}

	delete(target) {
		this.setState(prevState => ({
			items: prevState.items.filter(item => item.id !== target)
		}))
	}

	editItem(id) {
		const item = this.state.items.filter(item => item.id === id)[0];
		this.setState(() => ({
			editing: true,
			itemToEdit: item
		}));
	}

	showAsset(id) {
		const item = this.state.items.filter(item => item.id === id)[0];
		console.log(item);
	}

	// add(item) {
	// 	this.setState(prevState => ({
	// 		items: [
	// 			...prevState.items, {
	// 				id: this.nextId(prevState.items),
	// 				date: item.date,
	// 				location: item.location,
	// 				client: item.client
	// 			}]
	// 	}))
	// }

	// update(updatedItem) {
	// 	this.setState(prevState => ({
	// 		items: prevState.items.map(
	// 			item => item.id === this.state.itemToEdit.id ? { id: item.id, client: updatedItem.client, date: updatedItem.date, location: updatedItem.location } : item
	// 		),
	// 		editing: false,
	// 		itemToEdit: null
	// 	}));
	// }

	nextId(items = []) {
		let max = items.reduce((prev, curr) => prev.id > curr.id ? prev.id : curr.id, 0);
		return ++max;
	}

	render() {
		return (
			<>
			<div className={"renterMainPage"}>
				<div className={"navBar"}>
					<h1><a href="#">InstaRent</a></h1>
					<ul>
						<li><a href="#">HOME</a></li>
						<li><a href="#">APPERTMANTS</a></li>
						<li><a href="#">PROFILE</a></li>
					</ul>
				</div>
				<AssetList/>
			</div>
			</>
		)
	}


}

export default OwnerPage;