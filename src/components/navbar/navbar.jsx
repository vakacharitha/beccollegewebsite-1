import downArrow from "/src/assets/angle-down-solid.svg";
import React from "react";

let navbar = () => {
	const [dropdown1, setDropDown1] = React.useState("");

	function clickHandler() {
		setDropDown1("flex");
	}

	return (
		<nav className="bg-primary w-full h-10 -mt-2 flex items-center">
			<div
				data-id="1"
				onClick={clickHandler}
				className={
					"navbar-item w-max m-2 p-1 flex items-center cursor-pointer hover:bg-slate-600 bg-white"
				}
			>
				hello
				<img
					data-id="1"
					className="h-5 ml-3"
					alt="drop down arrow"
					src={downArrow}
				></img>
				<div data-drop="1" className={"dropdownList hidden"}>
					<div>item -1 </div>
					<div>item -2 </div>
					<div>item -3 </div>
					<div>item -4 </div>
					<div>item -5 </div>
				</div>
			</div>
			<div
				data-id="2"
				onClick={clickHandler}
				className={
					"navbar-item w-max m-2 p-1 flex items-center cursor-pointer hover:bg-slate-600 bg-white"
				}
			>
				hello
				<img
					data-id="2"
					className="h-5 ml-3"
					alt="drop down arrow"
					src={downArrow}
				></img>
				<div data-drop="2" className={"dropdownList hidden"}>
					<div>item -1 </div>
					<div>item -2 </div>
					<div>item -3 </div>
					<div>item -4 </div>
					<div>item -5 </div>
				</div>
			</div>
		</nav>
	);
};

export default navbar;
