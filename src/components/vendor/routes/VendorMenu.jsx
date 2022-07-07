// CSS
import "./vendor-menu-assets/style.css";
// IMAGES
import itemImage from "./vendor-menu-assets/images/item-image.png";
import itemImageUnavailable from "./vendor-menu-assets/images/item-image-unavailable.png";
// ICONS
import {
	PlusIcon,
	AddCategory,
	EditCategory,
	DeleteCategory,
} from "./vendor-menu-assets/icons/icons";
// COMPONENTS
import ItemsCategories from "./vendor-menu-assets/components/ItemsCategories";
function VendorMenu() {
	return (
		<div className="menu-container  float-end position-absolute bottom-0 end-0 col-12 col-lg-10 p-4 pt-0">
			{/* CATEGORY DROPDOWN */}
			<div className="add-categories-container  d-flex align-items-center justify-content-between flex-wrap">
				<div className="heading  col-12 col-lg-6 d-flex align-items-center justify-content-between p-0">
					<span className="">
						<h1 className="fw-bold">Menu</h1>
					</span>
					<span className="d-inline d-lg-none">
						<PlusIcon />
					</span>
				</div>
				<div className="category  col-12 col-lg-6 d-none d-lg-flex align-items-center justify-content-end p-0">
					<button className="d-flex  aign-items-center justify-content-cente">
						Add new category
					</button>
				</div>
			</div>
			{/* CATEGORIES LIST */}
			<div className="categories d-flex overflow-x-scroll overflow-auto mt-2 px-0 pb-0">
				<span className="active categories-item">
					All Categories
				</span>
				<span className="categories-item">Summer Lunch</span>
				<span className="categories-item">Sauses</span>
				<span className="categories-item">Kiddies Meal</span>
				<span className="categories-item">Knack-Me-A-Snack</span>
				<span className="categories-item">ChopLife</span>
				<span className="categories-item">Rice</span>
				<span className="categories-item">Summer Lunch</span>
				<span className="categories-item">Sauses</span>
				<span className="categories-item">Kiddies Meal</span>
				<span className="categories-item">Knack-Me-A-Snack</span>
				<span className="categories-item">ChopLife</span>
				<span className="categories-item">Rice</span>
				<span className="categories-item">Summer Lunch</span>
				<span className="categories-item">Sauses</span>
				<span className="categories-item">Kiddies Meal</span>
				<span className="categories-item">Knack-Me-A-Snack</span>
				<span className="categories-item">Chop Life</span>
				<span className="categories-item">Rice</span>
			</div>
			{/* CATEGORIES SECTION */}
			<div className="categories-tabs-container mt-4 ">
				{/* SUMMER LUNCH CATEGORY */}
				<ItemsCategories categoryName={"Summer Lunch"} />
				{/* SAUSES CATEGORY */}
				<ItemsCategories categoryName={"Sauses"} />
				{/* KIDDIES MEAL CATEGORY */}
				<ItemsCategories categoryName={"Kiddies Meal"} />
			</div>
		</div>
	);
}

export default VendorMenu;
