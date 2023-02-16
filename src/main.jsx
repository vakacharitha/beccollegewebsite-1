import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Root from "/src/routes/root.jsx";
import Homepage from "/src/pages/homepage.jsx";
import ExaminationCell from "/src/pages/examsResults/examination.jsx";
import ExamNotifs from "/src/pages/examsResults/examsNotifs.jsx";
import It from "/src/pages/departments/IT.jsx";
import ExamDownloads from "/src/pages/examsResults/exam-downloads.jsx";
import ExamLogin from "/src/pages/examsResults/examLogin.jsx";
import ExamResults from "/src/pages/examsResults/examResults.jsx";

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
			{
				path: "/exam-notifications",
				element: <ExamNotifs />,
			},
			{
				path: "/exam-downloads",
				element: <ExamDownloads />,
			},
			{
				path: "/exam-login",
				element: <ExamLogin />,
			},
			{
				path: "/exam-results",
				element: <ExamResults />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<>
		<React.StrictMode>
			<ChakraProvider>
				<RouterProvider router={router} />
			</ChakraProvider>
		</React.StrictMode>
	</>
);
