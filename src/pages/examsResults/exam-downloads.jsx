import ExamHeader from "/src/components/examheader/examheader.jsx";
import {
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
	Box,
} from "@chakra-ui/react";

export default function ExamDownloads() {
	return (
		<>
			<ExamHeader bannerName="Exam Downloads" />
			<Accordion className="my-4" allowMultiple>
				<AccordionItem className="border-0 mx-3 lg:mx-64 ">
					<h2>
						<AccordionButton className="bg-[#EFEDED] p-3 rounded-lg">
							<Box
								as="span"
								flex="1"
								textAlign="left"
								className="text-primaryColor font-medium"
							>
								Question Paper Template (R20)
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4}>
						<div className="flex flex-row flex-wrap w-full gap-5 ">
							<div className="flex items-center gap-2">
								<img className="w-8" src="/src/assets/Open Book.png" />
								<div>C Lab Manual</div>
							</div>
							<div className="flex items-center gap-2">
								<img className="w-8" src="/src/assets/Open Book.png" />
								<div>C Lab Manual</div>
							</div>
							<div className="flex items-center gap-2">
								<img className="w-8" src="/src/assets/Open Book.png" />
								<div>C Lab Manual</div>
							</div>
							<div className="flex items-center gap-2">
								<img className="w-8" src="/src/assets/Open Book.png" />
								<div>C Lab Manual</div>
							</div>
							<div className="flex items-center gap-2">
								<img className="w-8" src="/src/assets/Open Book.png" />
								<div>C Lab Manual</div>
							</div>
							<div className="flex items-center gap-2">
								<img className="w-8" src="/src/assets/Open Book.png" />
								<div>C Lab Manual</div>
							</div>
						</div>
					</AccordionPanel>
				</AccordionItem>
			</Accordion>
			<Accordion className="my-4" allowMultiple>
				<AccordionItem className="border-0 mx-3 lg:mx-64 ">
					<h2>
						<AccordionButton className="bg-[#EFEDED] p-3 rounded-lg">
							<Box
								as="span"
								flex="1"
								textAlign="left"
								className="text-primaryColor font-medium"
							>
								Question Paper Template (R20)
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4}>
						<div className="flex flex-row flex-wrap w-full gap-5 ">
							<div className="flex items-center gap-2">
								<img className="w-8" src="/src/assets/Open Book.png" />
								<div>C Lab Manual</div>
							</div>
							<div className="flex items-center gap-2">
								<img className="w-8" src="/src/assets/Open Book.png" />
								<div>C Lab Manual</div>
							</div>
							<div className="flex items-center gap-2">
								<img className="w-8" src="/src/assets/Open Book.png" />
								<div>C Lab Manual</div>
							</div>
							<div className="flex items-center gap-2">
								<img className="w-8" src="/src/assets/Open Book.png" />
								<div>C Lab Manual</div>
							</div>
							<div className="flex items-center gap-2">
								<img className="w-8" src="/src/assets/Open Book.png" />
								<div>C Lab Manual</div>
							</div>
							<div className="flex items-center gap-2">
								<img className="w-8" src="/src/assets/Open Book.png" />
								<div>C Lab Manual</div>
							</div>
						</div>
					</AccordionPanel>
				</AccordionItem>
			</Accordion>
		</>
	);
}
