import { useState } from "react";
import { Tab } from "@headlessui/react";
import ExamHeader from "/src/components/examheader/examheader.jsx";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function Example() {
	let [categories] = useState({
		Circulars: [
			{
				id: 1,
				title:
					"3/4 B.Tech: Supplementary Exam Fee Notice for 3/4 B.Tech (V & VI Sems) (R14 & R18 Regulations)",
				day: 29,
				year: "JUN,2022",
				lastdate: "12/07/2022",
			},
			{
				id: 2,
				title:
					"3/4 B.Tech: Supplementary Exam Fee Notice for 3/4 B.Tech (V & VI Sems) (R14 & R18 Regulations)",
				day: 29,
				year: "JUN,2022",
				lastdate: "12/07/2022",
			},
			{
				id: 3,
				title:
					"3/4 B.Tech: Supplementary Exam Fee Notice for 3/4 B.Tech (V & VI Sems) (R14 & R18 Regulations)",
				day: 29,
				year: "JUN,2022",
				lastdate: "12/07/2022",
			},
			{
				id: 4,
				title:
					"3/4 B.Tech: Supplementary Exam Fee Notice for 3/4 B.Tech (V & VI Sems) (R14 & R18 Regulations)",
				day: 29,
				year: "JUN,2022",
				lastdate: "12/07/2022",
			},
			{
				id: 5,
				title:
					"3/4 B.Tech: Supplementary Exam Fee Notice for 3/4 B.Tech (V & VI Sems) (R14 & R18 Regulations)",
				day: 29,
				year: "JUN,2022",
				lastdate: "12/07/2022",
			},
		],
		"Time Tables": [
			{
				id: 1,
				title:
					"3/4 B.Tech: Supplementary Exam Fee Notice for 3/4 B.Tech (V & VI Sems) (R14 & R18 Regulations)",
				day: 29,
				year: "JUN,2022",
				lastdate: "12/07/2022",
			},
			{
				id: 2,
				title:
					"3/4 B.Tech: Supplementary Exam Fee Notice for 3/4 B.Tech (V & VI Sems) (R14 & R18 Regulations)",
				day: 29,
				year: "JUN,2022",
				lastdate: "12/07/2022",
			},
			{
				id: 3,
				title:
					"3/4 B.Tech: Supplementary Exam Fee Notice for 3/4 B.Tech (V & VI Sems) (R14 & R18 Regulations)",
				day: 29,
				year: "JUN,2022",
				lastdate: "12/07/2022",
			},
			{
				id: 4,
				title:
					"3/4 B.Tech: Supplementary Exam Fee Notice for 3/4 B.Tech (V & VI Sems) (R14 & R18 Regulations)",
				day: 29,
				year: "JUN,2022",
				lastdate: "12/07/2022",
			},
		],
		"Course Repetition": [
			{
				id: 1,
				title:
					"3/4 B.Tech: Supplementary Exam Fee Notice for 3/4 B.Tech (V & VI Sems) (R14 & R18 Regulations)",
				day: 29,
				year: "JUN,2022",
				lastdate: "12/07/2022",
			},
			{
				id: 2,
				title:
					"3/4 B.Tech: Supplementary Exam Fee Notice for 3/4 B.Tech (V & VI Sems) (R14 & R18 Regulations)",
				day: 29,
				year: "JUN,2022",
				lastdate: "12/07/2022",
			},
			{
				id: 3,
				title:
					"3/4 B.Tech: Supplementary Exam Fee Notice for 3/4 B.Tech (V & VI Sems) (R14 & R18 Regulations)",
				day: 29,
				year: "JUN,2022",
				lastdate: "12/07/2022",
			},
		],
		CMM: [
			{
				id: 1,
				title:
					"3/4 B.Tech: Supplementary Exam Fee Notice for 3/4 B.Tech (V & VI Sems) (R14 & R18 Regulations)",
				day: 29,
				year: "JUN,2022",
				lastdate: "12/07/2022",
			},
			{
				id: 2,
				title:
					"3/4 B.Tech: Supplementary Exam Fee Notice for 3/4 B.Tech (V & VI Sems) (R14 & R18 Regulations)",
				day: 29,
				year: "JUN,2022",
				lastdate: "12/07/2022",
			},
		],
	});

	return (
		<>
			<ExamHeader bannerName="Exam notifications" />
			<div className="flex flex-col justify-center items-center -mt-10">
				<div className="w-full max-w-md px-2 py-16 sm:px-0 md:w-max md:max-w-2xl lg:max-w-4xl">
					<Tab.Group>
						<Tab.List className="flex space-x-1 bg-gray-900/20">
							{Object.keys(categories).map((category) => (
								<Tab
									key={category}
									className={({ selected }) =>
										classNames(
											"w-full  py-3 m-0 font-bold lg:text-xl leading-5 border-r-2 border-white",
											"ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
											selected
												? "bg-primaryColor text-white shadow"
												: "text-black hover:bg-white/[0.12] hover:text-primaryColor"
										)
									}
								>
									{category}
								</Tab>
							))}
						</Tab.List>
						<Tab.Panels>
							{Object.values(categories).map((posts, idx) => (
								<Tab.Panel
									key={idx}
									className={classNames(
										"bg-white border-4 border-primaryColor  lg:w-max"
									)}
								>
									<div className="text-end mr-2 mt-2">published on:</div>
									<ul>
										{posts.map((post) => (
											<li
												key={post.id}
												className="relative pt-3 pl-3 pr-3 mb-2 hover:bg-blue-100 post flex flex-col"
											>
												<div className="post flex">
													<div className="post-desc flex flex-col mr-2">
														<div className="post-title text-primaryColor text-sm md:text-base xl:text-lg font-medium">
															{post.title}
														</div>
														<div className="post-extraInfo text-sm ml-1 font-normal leading-2 text-gray-600">
															Last date of Payment: {post.lastdate}
														</div>
													</div>
													<div className="published w-max">
														<div className="bg-primaryColor p-1 text-white text-center font-bold">
															{post.day}
														</div>
														<div className="bg-secondaryColor p-1 text-black text-sm font-semibold">
															{post.year}
														</div>
													</div>

													<a
														href="#"
														className={classNames(
															"absolute inset-0 rounded-md",
															"ring-blue-400 focus:z-10 focus:outline-none focus:ring-2"
														)}
													/>
												</div>
												<hr className="h-0.2 mt-2 w-90% bg-gray-400" />
											</li>
										))}
									</ul>
								</Tab.Panel>
							))}
						</Tab.Panels>
					</Tab.Group>
				</div>
			</div>
		</>
	);
}
