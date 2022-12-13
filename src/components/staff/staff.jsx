import emailPic from "/src/assets/Envelope.png";

let staff = (props) => {
	console.log(props.item);
	return (
		<div className="staff-wrapper flex">
			<div className="staff-pic ml-2">
				<img
					className="h-36"
					src={props.item.staffPic}
					alt="staff picture"
				></img>
			</div>
			<div className="staff-text flex flex-col ml-2 justify-around">
				<div className="staff-name font-bold">{props.item.staffName}</div>
				<div className="staff-designation">{props.item.staffDesignation}</div>
				<div className="staff-breaker flex flex-row items-center">
					<div className="staff-line h-1 w-11/12 md:w-52 bg-primary"></div>
					<div className="staff-circle h-3 -ml-1 w-3 bg-primary rounded-full"></div>
				</div>
				<div className="staff-education font-medium text-sm">
					{props.item.staffEdu}
				</div>
				{props.item.staffEmail && (
					<div className="staff-email flex items-center flex-wrap">
						<img className="h-6" src={emailPic}></img>
						<a
							className="text-primary font-medium underline underline-offset-2"
							href={props.item.staffEMail}
						>
							Send email
						</a>
					</div>
				)}
			</div>
		</div>
	);
};

export default staff;
