import downArrow from "/src/assets/angle-down-solid.svg";
import React from "react";
import IT from "/src/pages/departments/IT.jsx";
let navbar = () => {
	const [dropdown1, setDropDown1] = React.useState("");

	function clickHandler() {
		setDropDown1("flex");
	}

	return (
		<div
		// data-id="1"
		// onClick={clickHandler}
		// className={
		// 	"navbar-item w-max m-2 p-1 flex items-center cursor-pointer hover:bg-slate-600 bg-white"
		// }
		>
			{/* hello */}
			{/* <img
				data-id="1"
				className="h-5 ml-3"
				alt="drop down arrow"
				src={downArrow}
			></img> */}
			{/* <div data-drop="1" className={"dropdownList hidden" + dropdown1}>
				<div>item -1 </div>
				<div>item -2 </div>
				<div>item -3 </div>
				<div>item -4 </div>
				<div>item -5 </div>
			</div> */}
		</div>
	);
};

export default navbar;
