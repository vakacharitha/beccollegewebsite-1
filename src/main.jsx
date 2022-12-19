import React from "react";
import ReactDOM from "react-dom/client";
import Homepage from "./pages/homepage";
import Header from "/src/components/header/header";
import Navbar from "./components/navbar/navbar";
import ExamHeader from "/src/components/examheader/examheader.jsx";
import Exampages from "/src/pages/examsResults/examination.jsx";
import Staff from "/src/components/staff/staff.jsx";
import staffData from "/src/Data/staffData/examinationCell/staffData.js";
import Footer from './components/footer/footer.jsx'
import Placements from "./pages/Placements/placements";
import Slider from './components/Carousel/Slides'
import "./index.css";

const StaffD = staffData.map((item) => {
	return <Staff key={item.staffId} item={item} />;
});

ReactDOM.createRoot(document.getElementById("root")).render(
	<>
		<Header />
		{/* <ExamHeader /> */}
		<Placements />
		{/* <div className="staff-container grid  grid-flow-row justify-center gap-6 mt-2 mb-2 md:grid-cols-2 md:justify-items-center lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
			{StaffD}
		</div> */}

		<Footer />
		<Slider />
	</>
);
