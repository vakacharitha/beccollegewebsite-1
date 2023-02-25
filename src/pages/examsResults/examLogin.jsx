import ExamHeader from "/src/components/examheader/examheader.jsx";
import Logo from "/src/assets/logo.png";

export default function ExamLogin() {
	return (
		<>
			<ExamHeader bannerName="Results" />
			<div className="text-center text-2xl">Login to check results</div>
			<div className="flex justify-around ">
				<img className="hidden w-64 md:block" src={Logo} />
				<div className="flex justify-center items-center">
					<div>
						<div className="my-2">
							<div className="mb-1">Email</div>
							<input
								className="p-2 rounded-md border-primaryColor border-2 w-full focus:outline-none"
								type="email"
							></input>
						</div>
						<div className="mb-2">
							<div className="mb-1">Password</div>
							<input
								className="p-2 rounded-md border-primaryColor border-2 w-full focus:outline-none"
								type="password"
							></input>
						</div>
						<div className="flex gap-6">
							<div className="flex">
								<input className="mr-2" type="checkbox"></input>
								<div>Remember me?</div>
							</div>
							<div className="text-primaryColor font-semibold hover:cursor-pointer">
								Forgot password ?
							</div>
						</div>
						<div className="p-2 my-4 bg-primaryColor text-white text-center font-bold  rounded-lg">
							Login now
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
