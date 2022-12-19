import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "/src/routes/root.jsx";
import Homepage from "/src/pages/homepage.jsx";
import ExaminationCell from "/src/pages/examsResults/examination.jsx";
import It from "/src/pages/departments/IT.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		// errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <Homepage /> },
			{
				path: "/departments",
				element: <It />,
			},
			{
				path: "/examination-cell",
				element: <ExaminationCell />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<>
		<RouterProvider router={router} />
	</>
);
