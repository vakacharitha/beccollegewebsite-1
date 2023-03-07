let gallery = (props) => {
	return (
		<div className="gallery-template m-8 transition-transform duration-500 hover:transform hover:scale-105 ">
			<div>
				<img
					className="w-[27rem] h-72 border rounded-2xl cursor-pointer"
					src={props.item.img}
				/>
			</div>
			<div className="w-[27rem]  ">
				<div className="text-2xl font-bold">{props.item.imgname}</div>
				{props.item.imgdescription}
			</div>
		</div>
	);
};
export default gallery;
