import ExamHeader from "/src/components/examheader/examheader.jsx";
import { Route, Routes, Link } from "react-router-dom";
import Exampages from "/src/pages/examsResults/examination.jsx";

export default function exampages() {
	return (
		<>
			<ExamHeader />
			<Routes>
				<Route path="/exam" element={<ExamHeader />} />
				<Route path="/books" element={<Exampages />} />
			</Routes>
		</>
	);
}
