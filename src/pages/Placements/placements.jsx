import '/src/pages/Placements/Placements.css'
import Marquee from "react-fast-marquee";
import '/src/assets/PlacementOfficer.png';
import '/src/assets/TrainingOfficer.png';

let Placements=() =>{
    return(
		<>
<div className="row w-full">
<div className="col-3">
	<div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
		<div className="Training-Placements-Menu">Traininng and Placements Menu</div>
      	<a className="nav-link" id="v-pills-aboutplacements-tab" data-toggle="pill" href="#v-pills-aboutplacements" role="tab" aria-controls="v-pills-aboutplacements" aria-selected="true">About Placements</a>
      	<a className="nav-link" id="v-pills-trainingandplacementsteam-tab" data-toggle="pill" href="#v-pills-trainingandplacementsteam" role="tab" aria-controls="v-pills-trainingandplacementsteam" aria-selected="false">Training and Placements Team</a>
      	<a className="nav-link" id="v-pills-notifications-tab" data-toggle="pill" href="#v-pills-notifications" role="tab" aria-controls="v-pills-notifications" aria-selected="false">Notifications</a>
      	<a className="nav-link" id="v-pills-trainingregistration-tab" data-toggle="pill" href="#v-pills-trainingregistration" role="tab" aria-controls="v-pills-trainingregistration" aria-selected="false">Training Registration</a>
		<a className="nav-link" id="v-pills-placementgallery-tab" data-toggle="pill" href="#v-pills-placementgallery" role="tab" aria-controls="v-pills-placementgallery" aria-selected="false">Placement Gallery</a>
		<a className="nav-link" id="v-pills-yearWiseplacements-tab" data-toggle="pill" href="#v-pills-yearWiseplacements" role="tab" aria-controls="v-pills-yearWiseplacements" aria-selected="false">YearWise Placements</a>
		<a className="nav-link" id="v-pills-branchWiseplacements-tab" data-toggle="pill" href="#v-pills-branchWiseplacements" role="tab" aria-controls="v-pills-branchWiseplacements" aria-selected="false">BranchWise Placements</a>
	</div>
</div>
	<div className="left-navcontent">
		<div className="col">
    		<div className="tab-content" id="v-pills-tabContent">
			<div className="tab-pane fade" style={{width:"fit-content"}} id="v-pills-aboutplacements" role="tabpanel" aria-labelledby="v-pills-aboutplacements-tab">
				<div className='Objective pb-1'>Objective</div>
				<div className='line w-14 h-1' style={{background:"#0060b1"}}></div>
				<div>The Objective of the Training and Placement Cell is </div>
				<div className='Functions pb-1'>Functions</div>
				<div className='line w-14 h-1' style={{background:"#0060b1"}}></div>
					<li>
					To be the mentor of students to frame their Carriers
					</li>
					<li>
					To be the mentor of students to frame their Carriers
					</li>
					<li>
					To be the mentor of students to frame their Carriers
					</li>
				<div className='WeareHonest pb-1'>We are Honest</div>
				<div className='line w-14 h-1' style={{background:"#0060b1"}}></div>
					<div>In an endeavor to do justiceto each of the company that is 
						choosing their engineering and managerial human resources from us, 
						the college.
					</div>
					<div>In an endeavor to do justiceto each of the company that is 
						choosing their engineering and managerial human resources from us, 
						the college.
					</div>
					<div>In an endeavor to do justiceto each of the company that is 
						choosing their engineering and managerial human resources from us, 
						the college.
					</div>
			</div>
			<div className="tab-pane fade" id="v-pills-trainingandplacementsteam" role="tabpanel" aria-labelledby="v-pills-trainingandplacementsteam-tab">
			<div className='TrainingAndPlacementsTeam pb-1'>Training & Placement Team</div>
			<div className='line w-14 h-1 mb-2' style={{background:"#0060b1"}}></div>
				<table className='border-2'>
					<tr className='border-2 font-bold text-white' style={{background:"#0060b1"}}>
						<td className='text-center border-2 p-2'>S.NO.</td>
						<td className='text-center border-2 p-2'>Photo</td>
						<td className='text-center border-2'>Name of the Staff</td>
						<td className='text-center border-2 p-3'>Experience</td>
					</tr>
					<tr className='border-2' style={{background:"rgba(0,96,177,.5)"}}>
						<td className='text-center border-2 p-2'>1</td>
						<td><img className='h-36 w-36 text-center border-2 m-2' src="/src/assets/PlacementOfficer.png" alt="PlacementOfficer" /></td>
						<td className='text-center border-2 p-3'>
							<p className='font-bold'>Dr.B.Vijaya Krishna</p>
							<p>Placement Officer</p>
							<p>placements@becbapatla.ac.in</p>
							<p>9849409947</p>
						</td>
						<td className='text-center border-2'>10 Years</td>
					</tr>
					<tr className='border-2' style={{background:"rgba(0,96,177,.5)"}}>
						<td className='text-center border-2'>2</td>
						<td><img className='h-36 w-36 text-center border-2  m-2' src="/src/assets/TrainingOfficer.png" alt="PlacementOfficer" /></td>
						<td className='text-center border-2 p-3'>
							<p className='font-bold'>Sri. K. Sai Prasanth</p>
							<p>Training Officer</p>
							<p> trainingofficer@becbapatla.ac.in</p>
							<p>9030232749</p>
						</td>
						<td className='text-center border-2'>8 Years</td>
					</tr>
				</table>
			</div>
			<div className="tab-pane fade" id="v-pills-notifications" role="tabpanel" aria-labelledby="v-pills-notifications-tab">
				<div className='notifications pb-1'>Training & Placement Notifications</div>
				<div className='line w-14 h-1' style={{background:"#0060b1"}}></div>
				<div>
					<a href=""><li>Attended students  for training</li></a>
					<a href=""><li>Schedule for training</li></a>
					<a href=""><li>Campus Placement Drive is on 10/11/2022</li></a>
					<a href=""><li>Campus Placement Drive is on 10/11/2022</li></a>
					<a href=""><li>Placements Registration</li></a>
				</div>
			</div>
			<div className="tab-pane fade" id="v-pills-trainingregistration" role="tabpanel" aria-labelledby="v-pills-trainingregistration-tab">
				<div className='TrainingRegistration pb-1'>Training Registration Form</div>
				<div className='line w-14 h-1' style={{background:"#0060b1"}}></div>
				<div className='flex max-h-80'>
					<form action="" className='flex flex-col'>
						<label>Name:</label>
						<input className='border-2 border-black rounded-md' type="text" />
						<label>Regd No:</label>
						<input className='border-2 border-black rounded-md' type="text" />
						<label>Branch:</label>
						<input className='border-2 border-black rounded-md' type="text" />
						<label>Semister:</label>
						<input className='border-2 border-black rounded-md' type="text" maxLength={1}/>
						<label>Email-Id:</label>
						<input className='border-2 border-black rounded-md' type="email" maxLength={30}/>
						<label>Contact No:</label>
						<input className='border-2 border-black rounded-md' type="text" maxLength={10} />
					</form>
				</div>
			</div>
			<div className="tab-pane fade" id="v-pills-placementgallery" role="tabpanel" aria-labelledby="v-pills-placementgallery-tab">
			<div className='PlacementGallery pb-1'>placement Gallery</div>
				<div className='line w-14 h-1' style={{background:"#0060b1"}}></div>
			</div>
			<div className="tab-pane fade" id="v-pills-yearWiseplacements" role="tabpanel" aria-labelledby="v-pills-yearWiseplacements-tab">
				This page can be used to yearWiseplacements
			</div>
			<div className="tab-pane fade" id="v-pills-branchWiseplacements" role="tabpanel" aria-labelledby="v-pills-branchWiseplacements-tab">
				This page can be used to branchWiseplacements 
			</div>
			</div>
  		</div>
	</div>
</div>


			<div className='Recruitersdiv flex'>
			<div className='flex h-26'>
			<div className='Recruiters' style={{background:"#0060b1"}}>Our Recruiters</div>
			</div>
			<div className='marqueeplacementimages'>
				<marquee className='marquee' speed={30}>
					<div className='flex'>
						<img className='pr-2 h-24' src="src\assets\tcs.png" alt="" />
						<img className='pr-2 h-24' src="src\assets\wipro.png" alt="" />
						<img className='pr-6 h-24' src="src\assets\techmahindra.png" alt="" />
						<img className='pr-6 h-24' src="src\assets\valuelabs.png" alt="" />
						<img className='pr-6 h-24' src="src\assets\accenture.png" alt="" />
						<img className='pr-6 h-24' src="src\assets\bosch.png" alt="" />
						<img className='pr-6 h-24' src="src\assets\ibm.png" alt="" />
					</div>
				</marquee>
			</div>
			</div>
		</>
    )}

export default Placements