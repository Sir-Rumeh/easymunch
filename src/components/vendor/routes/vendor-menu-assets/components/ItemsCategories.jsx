import React from "react";
// CSS
import "../style.css";
// IMAGES
import itemImage from "../images/item-image.png";
import itemImageUnavailable from "../images/item-image-unavailable.png";
// ICONS
import {
	AddCategory,
	EditCategory,
	DeleteCategory,
	DotMenu,
	CloseCategoryMenu,
} from "../icons/icons";

function ItemsCategories({ categoryName }) {
	// FUNCTION TO TOGGLE CATEGORY ACTIONS
	function toggleActionButtons(e) {
		const categoryActions =
			document.querySelectorAll(".category-actions");
		// categoryActions.classList.toggle(".toggle-actions");
		// console.log(this);
		// categoryActions.classList.contains(".toggle-actions")
		// 	? categoryActions.classList.remove(".toggle-actions")
		// 	: categoryActions.classList.add(".toggle-actions");
		console.log(e.nativeEvent.path[2].parentElement);
		// e.nativeEvent.path[2].classList.add("d-none");
	}
	return (
		<div>
			<div className="cover">
				<div className="categories-tab d-flex row flex-wrap align-items-center">
					<div className="heading text-light col-12 col-lg-6 d-flex align-items-center justify-content-between">
						<span>
							<h2>{categoryName}</h2>
						</span>
						<span
							onClick={(e) => toggleActionButtons(e)}
							className="dot-menu d-lg-none d-flex align-self-center"
						>
							<DotMenu />
						</span>
					</div>
					<div className="category-actions toggle-action bg-secondar col-12 col-lg-6  p-0">
						<div className="category-actions-container ">
							<span className="categorie-action-buttons">
								<AddCategory />
								<span className="d-flex d-lg-none">
									Edit name
								</span>
							</span>
							<span className="categorie-action-buttons">
								<AddCategory />
								<span className="d-flex d-lg-none">
									Edit name
								</span>
							</span>
							<span className="categorie-action-buttons">
								<EditCategory />
								<span className="d-flex d-lg-none">
									Add Item to category
								</span>
							</span>
							<span className="categorie-action-buttons">
								<DeleteCategory />
								<span className="d-flex d-lg-none">
									Delete Category
								</span>
							</span>
						</div>
					</div>
				</div>
			</div>

			{/* SUMMER LUNCH ITEMS */}
			<div className="items-container  mt-4 p-0 pt-2 d-flex justify-content-between">
				{/* FIRST ITEM */}
				<div className="item">
					<div className="item-image-container">
						<img src={itemImage} alt="item-pic" />
					</div>
					<div className="">
						<h1 className="item-name">
							Carlitos Way Special
						</h1>
						<p>
							Mashed potatoes with T-bone steak, Lamb
							ribeye/ beef ribeye/ lamb chops/ lamb ribs
						</p>
						<h1 className="price">₦ 9,000.00</h1>
						<div className="availability ">
							<span className="state text-success">
								Available
							</span>
							<span className="">
								<label className="switch">
									<input
										type="checkbox"
										name="availability"
										id=""
										checked
									/>
									<span className="slider"></span>
								</label>
							</span>
						</div>
					</div>
				</div>
				{/* SECOND ITEM */}
				<div className="item">
					<div className="item-image-container">
						<img src={itemImageUnavailable} alt="item-pic" />
					</div>
					<div className="">
						<h1 className="item-name">
							Carlitos Way Special
						</h1>
						<p>
							Mashed potatoes with T-bone steak, Lamb
							ribeye/ beef ribeye/ lamb chops/ lamb ribs
						</p>
						<h1 className="price">₦ 9,000.00</h1>
						<div className="availability ">
							<span className="state text-secondary">
								Unavailable
							</span>
							<span className="">
								<label className="switch">
									<input
										type="checkbox"
										name="availability"
										id=""
									/>
									<span className="slider"></span>
								</label>
							</span>
						</div>
					</div>
				</div>
				{/* THIRD ITEM */}
				<div className="item">
					<div className="item-image-container">
						<img src={itemImage} alt="item-pic" />
					</div>
					<div className="">
						<h1 className="item-name">
							Carlitos Way Special
						</h1>
						<p>
							Mashed potatoes with T-bone steak, Lamb
							ribeye/ beef ribeye/ lamb chops/ lamb ribs
						</p>
						<h1 className="price">₦ 9,000.00</h1>
						<div className="availability ">
							<span className="state text-success">
								Available
							</span>
							<span className="">
								<label className="switch">
									<input
										type="checkbox"
										name="availability"
										id=""
										checked
									/>
									<span className="slider"></span>
								</label>
							</span>
						</div>
					</div>
				</div>
				{/* FOURTH ITEM */}
				<div className="item">
					<div className="item-image-container">
						<img src={itemImageUnavailable} alt="item-pic" />
					</div>
					<div className="">
						<h1 className="item-name">
							Carlitos Way Special
						</h1>
						<p>
							Mashed potatoes with T-bone steak, Lamb
							ribeye/ beef ribeye/ lamb chops/ lamb ribs
						</p>
						<h1 className="price">₦ 9,000.00</h1>
						<div className="availability ">
							<span className="state text-secondary">
								Unavailable
							</span>
							<span className="">
								<label className="switch">
									<input
										type="checkbox"
										name="availability"
										id=""
									/>
									<span className="slider"></span>
								</label>
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ItemsCategories;
