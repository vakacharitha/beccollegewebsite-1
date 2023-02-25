import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider, BrowserRouter, Route, Routes } from "react-router-dom";
import Root from "/src/routes/root.jsx";
import Homepage from "/src/pages/homepage.jsx";
import ExaminationCell from "/src/pages/examsResults/examination.jsx";
import ExamNotifs from "/src/pages/examsResults/examsNotifs.jsx";
import It from "/src/pages/departments/IT.jsx";
import Placements from "/src/pages/Placements/placements.jsx";
import YearWisePlacements from "/src/pages/Placements/YearWisePlacements";
import BranchWisePlacements from "/src/pages/Placements/BranchWisePlacements";

// import Sidebar from "/src/components/Sidebar.jsx"
// import AboutPlacements from "/src/pages/Placements/AboutPlacements"

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		// errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <Homepage /> },
			{
				path: "/Placements",
				element: <Placements />,
			},
			{
				path: "/examination-cell",
				element: <ExaminationCell />,
			},
			{
				path: "/exam-notifications",
				element: <ExamNotifs />,
			},
			{
				path: "/YearWise-Placements",
				element: <YearWisePlacements />,
			},
			{
				path: "/BranchWise-Placements",
				element: <BranchWisePlacements />,
			},
			{
				path: "/departments/IT",
				element: <It />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<>
		<React.StrictMode>
				<RouterProvider router={router} />
				{/* <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/aboutPlacements" element={<AboutPlacements />} />
        </Routes>
      </Sidebar>
    </BrowserRouter> */}
		</React.StrictMode>
	</>
);
