import { Route, Routes, Link } from "react-router-dom";
import ExamHeader from "/src/pages/departments/IT.jsx";
import Exampages from "/src/pages/examsResults/examination.jsx";

export default function homepage() {
	return (
		<>
			<Link to="/">Homepage</Link>
			<br />
			<Link to="/exam">Examinations</Link>
			<br />
			<Link to="/books">Departments</Link>
			<Routes>
				<Route path="/exam" element={<ExamHeader />} />
				<Route path="/books" element={<Exampages />} />
			</Routes>
		</>
	);
}
