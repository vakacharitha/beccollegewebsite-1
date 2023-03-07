// import facImg from "/src/assets/Facilities_img.png";
// import leftQuotes from "/src/assets/Leftquote_image.png";
// import rightArrow from "/src/assets/arrow-right.svg";
// import circleDot from "/src/assets/circle-solid.svg";
// import roboticCenter from "/src/assets/image 144.png";
// import boschImg1 from "/src/assets/image 145.png";
// import boschImg2 from "/src/assets/BoschImg2.jpg";
// import eastArrow from "/src/assets/eastArrow.png";
// import tickBox from "/src/assets/icons8-tick-box-24.png";
// import DigiLibImg from "/src/assets/image 134.png";
// import canteenImg from "/src/assets/CanteenImg.jpeg";
// import BusImg1 from "/src/assets/BusesImg1.png";
// import BusImg2 from "/src/assets/BusesImg2.png";
// import BusImg3 from "/src/assets/BusesImg3.png";
// import HostelImg1 from "/src/assets/HostelsImg1.jpg";
// import "/src/pages/Facilities/facilities.css";
// import Slides from "/src/components/Carousel/Slides.jsx";
// import canteenSlides from "/src/components/Carousel/Canteen.jsx";
// import Staff from "/src/components/staff/staff.jsx";
// import LibraryStaff from "/src/Data/staffData/LibraryStaff.js";
// // import IEEE from "/IEEE_ASPP_eJournalTitles_URLs_2022-2023.xlsx"


// const Library = LibraryStaff.map((dataArg) => {
// 	return <Staff key={dataArg.staffId} item={dataArg} />;
// });

// export default function Facilities(){

    
//     return (

//         <div>

//             <div className="facilities-header mt-2 w-full h-12 font-semibold font-serif text-3xl flex justify-center items-center"> Library </div>

//             <div className="flex mt-4 mx-4">
//                 <div className="w-[57rem] ml-2 mt-3 text-lg"> 
//                         <Slides />
//                         {/* <img src={libImg1} className="w-[55rem] ml-2 h-[35rem]"></img> */}
//                         <p className="my-3 m-2 "> Based on AICTE Model Curriculum, AICTE suggested Indian Authored books in the following link:</p>
//                         <div className="flex mt-2 ml-2"> <img src={rightArrow} className="mt-1 w-5 h-5"/>
//                             <a href="https://www.aicte-india.org/sites/default/files/list-suggested-books-indian-authors-publishers.pdf" className="ml-2 mb-3 underline text-teal-600"> <i> AICTE Recommended List of Books by Indian Authors/Publishers </i> </a>
//                         </div>
//                 </div> 
//                 <div className="w-[40rem] ml-4  text-lg text-justify p-3">
//                     <img src={leftQuotes} className="w-7 h-8 my-2"></img>
//                     <p> Acclaimed as the one of the biggest Libraries with 22,000 sq. ft. area in the State, The Central Library of BEC has been playing a vital role as Information Centre catering to the Academic and learning needs of the faculty and Students alike since inception. The facility is serving the student fraternity ranging from under graduate to Masters and ultimately aiding the Research stratum of Bapatla Engineering College.</p><br></br>
//                     <p> As a jewel in the crown of BEC, The Library aims at providing premium quality learning resources in the form of Books, Journals, E-Journals, Video Courses and CDs pertinent to Curricula of diverse Engineering and Technology and of general nature to the students and Teaching Staff. The Library also supports Departmental Libraries for acquisition and maintenance of Titles throughout the academic year.</p><br></br>
//                     <p>As the veritable abode of Knowledge, the Central Library of BEC houses,
//                             <li> 29,228 Titles </li>
//                             <li> 78,799 Volumes </li>
//                             <li> 725 International e-Journals (IEEE, ASCE, ASME & Springer Nature). </li>
//                             <li> 20 Print Journals  </li>
//                     </p>
//                 </div> 
//             </div>

//             <div>
//                 <h4 className="ml-3 mt-4 text-xl underline underline-offset-4 "> <b>e-Journals & e-Books:</b> </h4>
//                 <p className="text-justify ml-4 my-2 text-lg pr-3"> The following subscriptions can be used from any desktop or laptop with in the campus network and through Knimbus Mobile App.</p>
//                 <p className="text-justify  ml-4 my-2 text-lg pr-3"> <b> Note:- </b>  IP address based access is provided for all e journals in our college campus. Hence, all the following e-Journals are directly accessible in our College Campus network systems  and no user name & password is required. In case of any difficulty in accessing these e resources, please contact the - Librarian / HOD Concerned.</p>
//                 <h4 className="ml-3 text-xl underline underline-offset-4"><b> Off Campus Access (Mobile App):</b></h4>
//                 <p className="text-justify  ml-4 my-2 text-lg pr-3"> Off Campus access through Knimbus mobile app is provided to access all  e journals & e books subscribed by our Library. Users can access all e resources of the Library from anywhere and at any time through the mobile app. Contact the Librarian for installation of Knimbus mobile app.</p>
//             </div>

//             <div className="facilities-background w-full h-[40rem] mt-3 z-50 flex justify-center items-center">
//                 <div className=" bg-white w-11/12 mx-5 h-[32rem] z-30 rounded-2xl flex items-center"> 
//                     <div className="mb-10">
//                         <h3 className="font-semibold font-serif mx-16 text-3xl mb-5 underline decoration-sky-700 underline-offset-4"> Library Softwares </h3>
//                         <p className="justify-center ml-16 text-lg ">BEC Central Library is fully automated with SOUL 2.0 Software; updated with latest version in 2010 and Bar-coding system facilitating easy access to students and well maintenance of library for they say “As the biggest library if it is in disorder is not as useful as a small but well-arranged one.” </p>
//                     </div>
//                     <div>
//                         <img src={DigiLibImg} className="w-[180rem] h-[25rem] ml-12 hover:scale-110 transition duration-300 ease-in-out" ></img>
//                     </div>
//                 </div>
                
//             </div>

//             <h3 className="text-align-center text-xl underline my-4 flex justify-center items-center"><b> Bec Library-e-Resources </b></h3>
            
//             <div className="facilities-background w-full h-[54rem] pt-3 z-50">
//                  <div className="flex mt-3 ">
//                     <div className="bg-white w-1/2 mx-3 h-64 z-30 items-center border-2 border-black rounded-md"> 
//                             <h4 className="font-serif font-semibold text-xl p-3 "> IEEE-ASP:</h4>
//                             <p className="justify-center text-lg ml-5 mr-2">All Society Periodicals on Computer Engineering + Computer Science + Electrical & Electronics Engineering + Telecommunications & related disciplines</p>
//                             <p className="justify-center text-md ml-5 mt-2 flex items-center"><b>213 e-Journals213 e-Journals </b> (back files access from 2010) </p>
//                             <div className="flex mt-2 mx-3" >
//                                 <h3 className="font-semibold text-lg">Link :</h3>
//                                 <a href="https://ieeexplore.ieee.org/Xplore/home.jsp " className="text-lg ml-3 text-teal-500"> https://ieeexplore.ieee.org </a>
//                             </div>
//                             <div className="flex mt-2 mx-3" >
//                                 <h3 className="font-semibold text-lg">Download :</h3>
//                             </div>
//                      </div>
//                     <div className="bg-white w-1/2 mx-3 h-64 z-30 items-center border-2 border-black rounded-md"> 
//                     <h4 className="font-serif font-semibold text-xl p-3 "> ASME:</h4>
//                             <p className="justify-center text-lg ml-5">American Society of Mechanical Engineers for Mechanical Engineering Journals</p>
//                             <p className="justify-center text-md ml-5 mt-2 flex items-center"><b>33 e-Journals</b> (back files access from 2000) </p>
//                             <div className="flex mt-3 mx-3" >
//                                  <h3 className="font-semibold text-lg">Link :</h3>
//                                  <a href="https://asmedigitalcollection.asme.org/" className="text-lg ml-3 text-teal-500"> https://asmexplore.asme.org </a>

//                                 {/* <a href="https://asmedigitalcollection.asme.org/" className=" hover:text-black hover:no-underline no-underline font-semibold p-2 border-2 border-black rounded-xl text-lg">Link</a> */}
//                             </div>
//                             <div className="flex mt-3 mx-3" >
//                                 <h3 className="font-semibold text-lg">Download :</h3>
                                
//                             </div>
//                     </div>
//                  </div>
//                 <div className="flex mt-3">
//                     <div className="bg-white w-1/2 mx-3 h-64 z-30 items-center border-2 border-black rounded-md"> 
//                             <h4 className="font-serif font-semibold text-xl p-3 ">ASCE:</h4>
//                             <p className="justify-center text-lg ml-5">American Society of Civil Engineers for Civil Engineering Journals</p>
//                             <p className="justify-center text-md ml-5 mt-2 flex items-center"><b>35  e-Journals </b> (back files access from 2000) </p>
//                             <div className="flex mt-3 mx-3" >
//                                 <h3 className="font-semibold text-lg">Link :</h3>
//                                 <a href="https://ascelibrary.org/" className="text-lg ml-3 text-teal-500"> https://ascelibrary.org/</a>
//                             </div>
//                             <div className="flex mt-3 mx-3" >
//                                 <h3 className="font-semibold text-lg">Download :</h3>
                                
//                             </div>
//                     </div>
//                     <div className="bg-white w-1/2 mx-3 h-64 z-30 items-center border-2 border-black rounded-md"> 
//                             <h4 className="font-serif font-semibold text-xl p-3 "> Springer Nature e-Journals</h4>
//                             <p className="justify-center text-lg ml-5">Engineering, Computer Science, Mathematics & Statistics, Physics & Chemistry</p>
//                             <p className="justify-center text-md ml-5 mt-2 flex items-center"><b>465 e-Journals</b>(back files access from 2000) </p>
//                             <div className="flex mt-3 mx-3" >
//                                 <h3 className="font-semibold text-lg">Link :</h3>
//                                 <a href="https://link.springer.com/" className="text-lg ml-3 text-teal-500">https://link.springer.com</a>
//                             </div>
//                             <div className="flex mt-3 mx-3" >
//                                 <h3 className="font-semibold text-lg">Download :</h3>
                                
//                             </div>   
//                     </div>
//                  </div>
//                 <div className="flex mt-3"> 
//                     <div className="bg-white w-1/2 mx-3 h-64 z-30 items-center border-2 border-black rounded-md"> 
//                             <h4 className="font-serif font-semibold text-xl p-3 mt-3">DELNET Digital Library:</h4>
//                             <p className="justify-center text-lg px-5">
//                                <b> User Name :</b> apbec <br></br>
//                                <b> Password: </b> bec1528
//                             </p>
//                             <p className="justify-center text-md px-5 mt-3 flex items-center">For e-journals & e-books visit : <b> DELNET </b> (New Discovery Portal) </p> 
//                     </div>
//                     <div className="bg-white w-1/2 mx-3 h-64 z-30 items-center border-2 border-black rounded-md"> 
//                     <h4 className="font-serif font-semibold text-xl p-3 mt-3">Library Catalogue - OPAC (Online Public Access Catalogue):</h4>
//                             <p className="justify-center text-lg ml-5 mr-2">OPAC is an online database of complete details of Books available with the Library. Users may access the OPAC in our Library to search for Books by Author or by Title or by Subject etc... to locate the required Books.</p>  
//                     </div>
//                  </div> 
//             </div>

//             <div className="w-full h-[28rem] library-bg p-3">
//                 <div className="flex mt-1"> 
//                     <img src={circleDot} className="w-3 ml-2 h-6"></img>
//                     <p className="ml-3 text-justify text-lg">
//                          One of its kinds, BEC Central Library is fully automated with SOUL 2.0 Software; updated with latest version in 2010 and Bar-coding system facilitating easy access to students and well maintenance of library for they say “As the biggest library if it is in disorder is not as useful as a small but well-arranged one.”
//                     </p>
//                </div>
//                <div className="flex mt-2" > 
//                     <img src={circleDot} className="w-3 ml-2 h-6"></img>
//                     <p className="ml-3 text-justify text-lg">
//                         The library offers special services to the Students of SC & ST categories by providing Book Banks enriched with 23,477 volumes related to 4,051 Titles.
//                     </p>
//                </div>
//                <div className="flex mt-2" > 
//                     <img src={circleDot} className="w-3 ml-2 h-6"></img>
//                     <p className="ml-3 text-justify text-lg">
//                         A Book Bank specially earmarked with the funds of TEQIP is provided with 1896 volumes consisting 323 Titles also supplements the needs of SC & ST Students.
//                     </p>
//                </div>
//                <div className="flex mt-2" > 
//                     <img src={circleDot} className="w-3 ml-2 h-6"></img>
//                     <p className="ml-3 text-justify text-lg">
//                         Through these Book Banks each SC or ST student can borrow 12 books and a BC student can borrow 2 books. 
//                     </p>
//                </div>
//                <div className="flex mt-2" > 
//                     <img src={circleDot} className="w-3 ml-2  h-6"></img>
//                     <p className="ml-3 text-justify text-lg">
//                         The library added a feather to its cap by having a wing of Digital Library featuring online connectivity with DELNET, New Delhi and providing Internet facility to students with the infrastructure of 28 Computers with DVD and CD Writers. 
//                     </p>
//                </div>
//                <div className="flex mt-2" > 
//                     <img src={circleDot} className="w-3 ml-2 h-6"></img>
//                     <p className="ml-3 text-justify text-lg">
//                         To take the learning experience of students to next level BEC Library has added NPTEL Video Courses to its armour of facilities.
//                     </p>
//                </div>
//                <div className="flex mt-2" > 
//                     <img src={circleDot} className="w-3 ml-2 h-6"></img>
//                     <p className="ml-3 text-justify text-lg">
//                         The video library is furnished with 34” Colour T.V and DVD Player supported by a stack of 3,259 CDs.
//                     </p>
//                </div>
//                <div className="flex mt-2" > 
//                     <img src={circleDot} className="w-3 ml-2 h-6"></img>
//                     <p className="ml-3 text-justify text-lg">
//                         The thrust area of video library is providing NPTEL video lecturers to learners and Teaching Community effectively.
//                     </p>
//                </div>
//                <div className="flex mt-2" > 
//                     <img src={circleDot} className="w-3 ml-2 h-6"></img>
//                     <p className="ml-3 text-justify text-lg">
//                          Library is providing reprographic facility to students to disseminate material quickly and cost effectively aiding better learning on campus.
//                     </p>
//                </div>
//                <div className="flex mt-2" > 
//                     <img src={circleDot} className="w-3 ml-2 h-6"></img>
//                     <p className="ml-3 text-justify text-lg">
//                         The photo copying is provided at 50 paise per copy with latest reprographic machine
//                     </p>
//                </div>
//             </div>

//             <div className=" mt-2 font-semibold text-2xl ml-4 underline decoration-sky-600 underline-offset-6"> Staff Members </div>

//             <div className="mt-3 p-3 ">
//                <div className="staff-container grid grid-flow-row justify-center gap-4 mt-3 mb-5 md:grid-cols-1 md:ml-32 md:justify-items-center lg:grid-cols-1 xl:ml-0 xl:grid-cols-2 2xl:grid-cols-4">{Library}</div>
                
//             </div>

//             <div className="facilities-header w-full h-12 font-serif font-semibold text-3xl flex justify-center items-center"> Robotic Tecnology Centre </div>
            
//             <div>
//                 <img src={leftQuotes} className="w-7 h-8 mt-4 ml-6"></img>
//                 <div className="flex mt-1 px-4">
//                     <p className="ml-3 mr-4 mb-3 w-10/12 p-3 text-justify text-lg"> In the present day scenario robotics play a key role in automation. It serves the need of the industry to the great extent by replacing the human beings and thus improving the quality of the product developed. According to the need and utility it scatters in to small industry to a very large industry also. It scatters into medical, defense, food processing, manufacturing, assembly line up, electronics and entertainment etc.<br></br><br></br>
//                         BAPATLA ENGINEERING COLLEGE has imported a robot from one of the leading manufacturers of robots in the world (KUKA, Germany' which costs around Rs.30,00,000/-(Thirty Lakhs) and is the first private engineering college in Andhra Pradesh state to possess a KUKA ROBOT (KR5) which is housed in ROBOTICS TECHNOLOGY CENTRE in the research park building. Five of the faculty members have under gone training at KUKA College, Pune for a period of one week and got trained in various applications of using robot. <br></br><br></br>
//                         The aim of procuring the Robot is to train the students of electronics, instrumentation, mechanical and electrical engineering and made them ready for the industry. It is also noted that the same training is to receive from outside it costs around 50,000 to 70,000 rupees. But the same thing students can learn and develop applications in our college with less cost.<br></br><br></br>
//                         The college management is always keen in establishing the labs and reedy to procure the equipment for the benefit of the students whatever the cost may be. Our dedicated and hard working faculty members are always ready to impart the knowledge to the students. It is the student who can make use of the resources available and made himself ready to face the challenges of the world.
//                     </p>
//                     <img src={roboticCenter} className="mt-5 w-11/12 h-[34rem] pt-5 pr-3 hover:scale-90 transition duration-300 ease-in-out"></img>
//                 </div>
//             </div>

//             <div className="facilities-header w-full h-12 font-serif font-semibold text-3xl flex justify-center items-center"> Bosch – Rexroth COE </div>


//             <div className="px-4">
//                 <div className="flex mt-2 ">
//                     <img src={boschImg1} className=" mt-5 ml-3 w-[55rem] h-[32rem] hover:scale-90 transition duration-300 ease-in-out"></img>
//                     <p className="text-lg w-[40rem] p-2 text-justify mx-4"> 
//                         <img src={leftQuotes} className="w-6 h-7 my-3"></img>
//                         The College, known for its quality Engineering education, innovative practices in teaching learning processes and research, took a giant leap by joining with Bosch–Rexroth to establish a centre of competence at a cost of 5 crores in industrial automation technologies, which is the first of its kind in AP. This centre is located in the research park along with Siemens Centre of Excellence and center for Robotics, which was built in a plinth area of one lakh square feet at a cost of Rs 20 crores in the college.<br></br><br></br>
//                         The College has entered into a Memorandum of Understanding with Bosch – Rexroth Ltd, a German company which is a pioneer in drives and controls and known for providing turnkey solutions in automation to the industries around the globe for the past century. Being an autonomous college this initiative bridges the gap between industry and academia by incorporating global industrial practices and technologies into the academic curriculum.<br></br>
//                     </p>
//                 </div>
//                 <div className="flex mt-2 ">
//                     <p className="text-lg w-[40rem] p-2 text-justify mx-4"> 
//                         <img src={leftQuotes} className="w-6 h-7 my-3"></img>
//                         The centre houses state of the art equipment in electro-pneumatics, electro-hydraulics, proportional and servo hydraulics, electrical servo drives, sensorics, programmable logic controllers, motion logic drives, modular mechanical systems and automation studio. The equipment enables students and faculty of different streams of engineering to design solutions to industrial automation requirements and carry out research by integrating mechanical, electrical, electronics, instrumentation and information technologies. The college offers training and consultancy in the above technologies to the industry and academia along with inhouse training.<br></br><br></br>
//                         A team of 12 senior faculty members of different engineering departments of the college have undergone extensive training for one month at Bosch – Rexroth centre for industrial automation at Mysore in the first phase. Faculty will regularly undergo intensive training at Bosh-Rexroth center in Germany<br></br>
//                     </p>
//                     <img src={boschImg2} className=" mt-5 ml-3 w-[55rem] h-[32rem] hover:scale-90 transition duration-300 ease-in-out "></img>
//                 </div>
//             </div>

//             <div className="mt-3 px-5">

//                 <div className="flex mt-1">
//                     <img src={circleDot} className="w-3 ml-3 mt-2 h-3 "></img>
//                     <h3 className="ml-2 font-semibold font-serif text-xl underline">Faculty Trained</h3>
//                 </div>

//                 <p className="ml-5 mt-2 text-lg text-justify"> List of Faculty Trained at VTU-BR Centre of Competence in Automation Technology – Mysore during the Period March 19th, 2012 to April 18th, 2012.</p>

//                 <div className="flex mt-1 ml-4">
//                      <div>
//                         <div className="flex mt-2 ">
//                             <img src={eastArrow} className="w-5 h-5 ml-5 "></img>
//                             <h4 className="ml-3">Dr. N. Sudhakar, Professor, CSE Department </h4>
//                         </div>

//                         <div className="flex mt-2 ">
//                             <img src={eastArrow} className="w-5 h-5 ml-5 "></img>
//                             <h4 className="ml-3">Prof. CH. Ramesh, Head, EIE Department </h4>
//                         </div>

//                         <div className="flex mt-2 ">
//                             <img src={eastArrow} className="w-5 h-5 ml-5 "></img>
//                             <h4 className="ml-3">Sri. K. Prasada Rao, Assoc. Prof. ME. Department </h4>
//                         </div>

//                         <div className="flex mt-2 ">
//                             <img src={eastArrow} className="w-5 h-5 ml-5 "></img>
//                             <h4 className="ml-3">Sri. D. Narayana Chowdary, Assoc. Prof. ME. Department </h4>
//                         </div>

//                         <div className="flex mt-2 ">
//                             <img src={eastArrow} className="w-5 h-5 ml-5 "></img>
//                             <h4 className="ml-3">Sri. V. Kumara Swamy, Assoc. Prof. EIE. Department </h4>
//                         </div>

//                         <div className="flex mt-2 ">
//                             <img src={eastArrow} className="w-5 h-5 ml-5 "></img>
//                             <h4 className="ml-3">Dr. CH. Lakshmi Srinivas, Prof. ME. Department </h4>
//                         </div>

//                         <div className="flex mt-2 ">
//                             <img src={eastArrow} className="w-5 h-5 ml-5 "></img>
//                             <h4 className="ml-3">Sri. M. V. N. Chakravarthy, Asst. Prof. EIE. Department</h4>
//                         </div>

//                         <div className="flex mt-2 ">
//                             <img src={eastArrow} className="w-5 h-5 ml-5 "></img>
//                             <h4 className="ml-3">Sri. S. Ravi Kumar, Asst. Prof. ME. Department</h4>
//                         </div>

//                         <div className="flex mt-2 ">
//                             <img src={eastArrow} className="w-5 h-5 ml-5 "></img>
//                             <h4 className="ml-3">Sri. T. Krishna Chaithanya, Asst. Prof. ECE. Department</h4>
//                         </div>

//                         <div className="flex mt-2 ">
//                             <img src={eastArrow} className="w-5 h-5 ml-5 "></img>
//                             <h4 className="ml-3">Sri. N. Balakrishna, Asst. Prof. EEE. Department</h4>
//                         </div>

//                         <div className="flex mt-2 ">
//                             <img src={eastArrow} className="w-5 h-5 ml-5 "></img>
//                             <h4 className="ml-3">Sri. B. Siva Nageswara Rao, Sr. Mechanic. ME. Department</h4>
//                         </div>

//                         <div className="flex mt-2 ">
//                             <img src={eastArrow} className="w-5 h-5 ml-5 "></img>
//                             <h4 className="ml-3">Sri. Y. Venkata Krishna, Lab Technician. ECE. Department</h4>
//                         </div>
//                      </div>

//                     <div className="mt-16 ml-5">
//                             <div className="flex mt-1" > 
//                                 <img src={circleDot} className="w-3 h-5 ml-40"></img>
//                                 <p className="ml-2 text-md "> <b> Contact Person </b><br></br>
//                                     D. Narayana Chowdary<br></br>
//                                     Associate Professor, <br></br>
//                                     Mechanical Engineering Department<br></br>
//                                     Phone :: +91-8643-224244 (Ext:185)<br></br>
//                                     email :: bec_mech@rediffmail.com
//                                 </p>
//                              </div>
//                     </div>

//                 </div>
//             </div>

//             <div className="facilities-header mt-5  w-full h-12 font-serif font-semibold text-3xl flex justify-center items-center"> Canteen Facilities </div>
            
//             <div className="flex mt-5">
//                 <p className="mt-5  m-4 text-justify text-lg w-96 pl-3 pt-12">The College has a Canteen inside the campus in which a hygienic, well-furnished and well-equipped canteen is available in the campus to provide food at subsidized rates for the staff and students.<br></br><br></br>
//                    Purified drinking water is supplied in the college, hostel and canteen
//                 </p>
//                 {/* <canteenSlides /> */}
//                  <img src={canteenImg} className="mt-4 ml-5 h-[30rem] w-2/3 hover:scale-90 transition duration-300 ease-in-out"></img>
//             </div>

//             <div className="facilities-header mt-5  w-full h-12 font-serif font-semibold text-3xl flex justify-center items-center">Transportation Facilities  </div>

//             <div>
//                     <div className="flex mt-5">
//                             <img src={BusImg1} className="ml-3 p-3 w-[59rem] h-[37rem] hover:scale-90 transition duration-300 ease-in-out"></img>
//                             <p className="w-[35rem] mt-5 mx-5 text-justify text-lg">
//                                 <b className="text-2xl font-serif underline decoration-blue-600 underline-offset-8 ">BECB Bus Facility <br></br><br></br> </b>
//                                 The college has been providing commuting facility to its staff and students with notable subsidized fares. The transportation facility is handled with an efficient fleet of 11 buses punctually running from Bapatla to College from morning to late evening on all working days.<br></br><br></br>
//                                 Bapatla Engineering College has a unique feature of working hours from 7:30 AM to 1:15 PM, which allows the staff and students to make use of the extent of the day.<br></br><br></br>
//                                 Apart from the regular Shuttle services to commute the staff and students, Transport facility supports the students and staff to participate in co-curricular and extra-curricular activities during afternoons
//                             </p>
//                     </div>

//                     <div>
//                         <div className="flex mt-3 mx-5 facilities-background">
//                             <p className="w-1/2 ml-3 p-5">
//                                <b className="text-3xl font-serif text-sky-600">Why Travel By Bus </b>
//                                <div className="flex mt-1"> 
//                                         <img src={tickBox} className="w-5 mt-3 ml-2 h-6"></img>
//                                         <p className="ml-3 mt-3 text-justify text-lg"> Bus Routes Covers Major Areas in Bapatla </p>
//                                 </div>
//                                 <div className="flex mt-1">
//                                         <img src={tickBox} className="w-5 mt-3 ml-2 h-6"></img>
//                                         <p className="ml-3 mt-3 text-justify text-lg"> Bus Fees - 10,000/- </p>
//                                 </div>
//                                 <div className="flex mt-1 ml-5"> 
//                                         <img src={circleDot} className="w-2 mt-3 ml-2 h-2"></img>
//                                         <p className="ml-2 mt-2 text-justify text-md">Students who wish to avail the college bus facility should pay Demand Draft of Rs. 10,000/-. in favour of BECB payable at Bapatla </p>
//                                 </div>
//                                 <div className="flex mt-1 ml-5"> 
//                                         <img src={circleDot} className="w-2 mt-3 ml-2 h-2"></img>
//                                         <p className="ml-2 mt-2 text-justify text-md">Bus Fee once paid will not be refunded / adjusted under any circumstances. </p>
//                                 </div>
//                                 <div className="flex mt-1"> 
//                                         <img src={tickBox} className="w-5 mt-3 ml-2 h-6"></img>
//                                         <p className="ml-3 mt-3 text-justify text-lg"> The students are required to submit 2 passport size photos and ID Number and get their Bus Pass. </p>
//                                 </div>
//                                 <div className="flex mt-1"> 
//                                         <img src={tickBox} className="w-5 mt-3 ml-2 h-6"></img>
//                                         <p className="ml-3 mt-3 text-justify text-lg">Contact respective college office for more details. </p>
//                                 </div>
//                             </p>
//                             <img src={BusImg3} className="w-1/2 h-[30rem] hover:scale-90 transition duration-300 ease-in-out"></img>
//                         </div>
//                     </div>

//             </div>

//             <div className="facilities-header mt-5  w-full h-12 font-serif font-semibold text-3xl flex justify-center items-center">Hostel Facilities </div>

//             <div className="flex mt-5 ">
//                 <img src={HostelImg1} className="mt-4 ml-5 h-[30rem] w-[60rem] hover:scale-90 transition duration-300 ease-in-out"></img>
//                 <p className="mt-5 m-4 text-justify text-lg w-96 pl-3 pt-3">
//                     <b className="font-serif text-2xl underline decoration-blue-600 underline-offset-8"> Hostels For Women <br></br><br></br></b>
//                     BEC uniquely provides on campus hostel facility to its girl student community.This hostel accommodating 1600 girl students is maintained on self-run basis by students themselves.<br></br><br></br>
//                     The residents of hostel are provided with 24 hr hot water supply through solar water heaters.The students health needs are taken care by dispensary with a visiting doctor and 24/7 ambulance
//                 </p>
//             </div>


//         </div>
//     );
// }


							{/*Library*/}


// import "/src/pages/Facilities/Facilities.css";
// import Staff from "/src/components/staff/staff.jsx";
// import LibraryStaff from "/src/Data/staffData/LibraryStaff.js";
// import DigiLibImg from "/src/assets/DigitalLibrary.jpg";
// import tickmark from "/src/assets/tick-mark.png";
// import Slides from "/src/components/Carousel/Slides.jsx";

// const Library = LibraryStaff.map((dataArg) => {
// 	 	return <Staff key={dataArg.staffId} item={dataArg} />;
// 	});

// export default function Facilities(){
    
//     return (
//         <>
//         <div>
//             <div className="facilities-background mt-2 w-full h-12 font-semibold font-serif text-4xl flex justify-center items-center"> Central Library </div>
//             <Slides />
//         </div>
//         <div className="row w-full pt-3 px-24">
//             <div className="col-3">
//                 <div className="nav flex-column nav-pills librarymenuitems " id="tab" role="tablist" aria-orientation="vertical">
//                     <a className="nav-link" id="libraryhome-tab" data-toggle="pill" href="#libraryhome" role="tab" aria-controls="libraryhome" aria-selected="true">Library Home</a>
//                     <a className="nav-link" id="digitallibrary-tab" data-toggle="pill" href="#digitallibrary" role="tab" aria-controls="digitallibrary" aria-selected="false">Digital Library</a>
//                     <a className="nav-link" id="E-library-tab" data-toggle="pill" href="#E-library" role="tab" aria-controls="E-library" aria-selected="false">E-library</a>
// 					<a className="nav-link" id="E-books-tab" data-toggle="pill" href="#E-books" role="tab" aria-controls="E-books" aria-selected="false">E-Books</a>
//                     <a className="nav-link" id="librarystaff-tab" data-toggle="pill" href="#librarystaff" role="tab" aria-controls="librarystaff" aria-selected="false">Library Staff</a>
// 					<a className="nav-link" id="nptel-tab" data-toggle="pill" href="#nptel" role="tab" aria-controls="nptel" aria-selected="false">NPTEL</a>
//                 </div>
//             </div>
// 			<div className="left-navcontent">
// 				<div className="col">
// 					<div className="tab-content" id="tabContent">
// 							<div className="tab-pane fade show in active" style={{width:"fit-content"}} id="libraryhome" role="tabpanel" aria-labelledby="libraryhome-tab">
// 							{/* <div className='line w-14 h-1 mb-2' style={{background:"#0060b1"}}></div> */}
// 									<div className="w-full text-lg text-justify pr-3" >
// 										<p> Acclaimed as the one of the biggest Libraries with 22,000 sq. ft. area in the State, The Central Library of BEC has been playing a vital role as Information Centre catering to the Academic and learning needs of the faculty and Students alike since inception. The facility is serving the student fraternity ranging from under graduate to Masters and ultimately aiding the Research stratum of Bapatla Engineering College.</p><br></br>
// 										<p> As a jewel in the crown of BEC, The Library aims at providing premium quality learning resources in the form of Books, Journals, E-Journals, Video Courses and CDs pertinent to Curricula of diverse Engineering and Technology and of general nature to the students and Teaching Staff. The Library also supports Departmental Libraries for acquisition and maintenance of Titles throughout the academic year.</p><br></br>
// 										<p>As the veritable abode of Knowledge, the Central Library of BEC houses,</p>
// 										<p className="ml-4">
// 												<li> 29,228 Titles </li>
// 												<li> 78,799 Volumes </li>
// 												<li> 725 International e-Journals (IEEE, ASCE, ASME & Springer Nature). </li>
// 												<li> 20 Print Journals  </li>
// 										</p>
// 									</div> 
// 									<div className="w-full mt-3 pr-3">
// 											<div className="flex mt-1"> 
// 												<img src={tickmark} className="w-5 h-5 mt-2"></img>
// 												<p className="ml-3  text-justify text-lg">
// 														One of its kinds, BEC Central Library is fully automated with SOUL 2.0 Software; updated with latest version in 2010 and Bar-coding system facilitating easy access to students and well maintenance of library for they say “As the biggest library if it is in disorder is not as useful as a small but well-arranged one.”
// 													</p>
// 											</div>
// 												<div className="flex mt-2" > 
// 													<img src={tickmark} className="w-5 h-5 mt-2"></img>
// 													<p className="ml-3 text-justify text-lg">
// 														The library offers special services to the Students of SC & ST categories by providing Book Banks enriched with 23,477 volumes related to 4,051 Titles.
// 												</p>
// 											</div>
// 											<div className="flex mt-2" > 
// 													<img src={tickmark} className="w-5 h-5 mt-2"></img>
// 													<p className="ml-3 text-justify text-lg">
// 														A Book Bank specially earmarked with the funds of TEQIP is provided with 1896 volumes consisting 323 Titles also supplements the needs of SC & ST Students.
// 												</p>
// 												</div>
// 											<div className="flex mt-2" > 
// 													<img src={tickmark} className="w-5 h-5 mt-2"></img>
// 													<p className="ml-3 text-justify text-lg">
// 														Through these Book Banks each SC or ST student can borrow 12 books and a BC student can borrow 2 books. 
// 													</p>
// 											</div>
// 											<div className="flex mt-2" > 
// 													<img src={tickmark} className="w-5 h-5 mt-2"></img>
// 													<p className="ml-3 text-justify text-lg">
// 														The library added a feather to its cap by having a wing of Digital Library featuring online connectivity with DELNET, New Delhi and providing Internet facility to students with the infrastructure of 28 Computers with DVD and CD Writers. 
// 													</p>
// 											</div>
// 												<div className="flex mt-2" > 
// 													<img src={tickmark} className="w-5 h-5 mt-2 "></img>
// 													<p className="ml-3 text-justify text-lg">
// 														To take the learning experience of students to next level BEC Library has added NPTEL Video Courses to its armour of facilities.
// 													</p>
// 											</div>
// 												<div className="flex mt-2" > 
// 													<img src={tickmark} className="w-5 h-5 mt-2"></img>
// 													<p className="ml-3 text-justify text-lg">
// 														The video library is furnished with 34” Colour T.V and DVD Player supported by a stack of 3,259 CDs.
// 													</p>
// 											</div>
// 											<div className="flex mt-2" > 
// 													<img src={tickmark} className="w-5 h-5 mt-2"></img>
// 													<p className="ml-3 text-justify text-lg">
// 														The thrust area of video library is providing NPTEL video lecturers to learners and Teaching Community effectively.
// 													</p>
// 												</div>
// 												<div className="flex mt-2" > 
// 													<img src={tickmark} className="w-5 h-5 mt-2"></img>
// 													<p className="ml-3 text-justify text-lg">
// 														Library is providing reprographic facility to students to disseminate material quickly and cost effectively aiding better learning on campus.
// 													</p>
// 												</div>
// 											    <div className="flex mt-2" > 
// 													<img src={tickmark} className="w-5 h-5 "></img>
// 													<p className="ml-3 text-justify text-lg">
// 														The photo copying is provided at 50 paise per copy with latest reprographic machine
// 													</p>
// 												</div>
//                                     </div>
//                             </div>
// 							<div className="tab-pane fade " id="digitallibrary" role="tabpanel" aria-labelledby="digitallibrary-tab">
// 										<div className="w-[70rem] flex mt-1">
// 								            <div className="w-[30rem] h-96 mt-6">
// 								                <h3 className="font-serif font-semibold text-3xl text-cyan-800"> Library Softwares </h3>
// 												<div className='line w-20 h-1 mb-5' style={{background:"#0060b1"}}></div>
// 								                <p className="text-justify text-xl ">BEC Central Library is fully automated with SOUL 2.0 Software; updated with latest version in 2010 and Bar-coding system facilitating easy access to students and well maintenance of library for they say “As the biggest library if it is in disorder is not as useful as a small but well-arranged one.” </p>
// 								            </div>
// 								            <div className="w-[45rem] ml-2 px-3">
// 							                    <img src={DigiLibImg} className="h-[25rem] ml-2 w-full " ></img>
// 							                </div>
// 										</div>
// 							</div>
// 							<div className="tab-pane fade px-5" id="E-library" role="tabpanel" aria-labelledby="E-library-tab">
// 									<div className=" w-10/12 h-60 items-center facilities-background border-2 border-black rounded-md"> 
// 												<h4 className="font-serif font-semibold text-xl px-3 mt-3"> IEEE-ASP:</h4>
// 												<div className='line w-14 h-1 ml-3 mb-3' style={{background:"#0060b1"}}></div> 
// 												<p className="justify-center text-lg ml-5 ">All Society Periodicals on Computer Engineering + Computer Science + Electrical & Electronics Engineering + Telecommunications & related disciplines</p>
// 												<div className="flex mt-2">
// 													<p className="justify-center text-md ml-5 mt-2 flex items-center"><b>213 e-Journals213 e-Journals </b> (back files access from 2010) </p>
// 													<div className="flex mt-2" >
// 															<h3 className="font-semibold ml-5 text-lg">Link :</h3>
// 															<a href="https://ieeexplore.ieee.org/Xplore/home.jsp " className="text-lg ml-2 text-teal-500"> https://ieeexplore.ieee.org </a>
// 													</div>
// 											   </div>
// 												<div className="flex mt-2 mx-3" >
// 													 <a href="#" className=" hover:text-black hover:no-underline no-underline font-semibold p-2 border-2 border-black rounded-xl text-lg mt-2">Download</a>
// 												</div>
// 			                        </div>
// 									<div className=" w-10/12 h-60 tems-center facilities-background border-2 border-black rounded-md mt-4"> 
// 								                    <h4 className="font-serif font-semibold text-xl px-3 mt-3"> ASME:</h4>
// 													<div className='line w-14 h-1 ml-3 mb-3' style={{background:"#0060b1"}}></div> 
// 							                        <p className="justify-center text-lg ml-5">American Society of Mechanical Engineers for Mechanical Engineering Journals</p>
// 													<div className="flex mt-2">
// 															<p className="justify-center text-md ml-5 mt-2 flex items-center"><b>33 e-Journals</b> (back files access from 2000) </p>
// 															<div className="flex mt-2" >
// 																<h3 className="font-semibold ml-5 text-lg">Link :</h3>
// 																<a href="https://asmedigitalcollection.asme.org/" className="text-lg ml-2 text-teal-500"> https://asmexplore.asme.org </a>
// 															</div>
// 													</div>
// 								                    <div className="flex mt-2 mx-3" >
// 													   <a href="#" className=" hover:text-black hover:no-underline no-underline font-semibold p-2 border-2 border-black rounded-xl text-lg mt-2">Download</a>
// 												    </div>
//                      				</div>
// 									<div className=" w-10/12 h-60 items-center facilities-background border-2 border-black rounded-md mt-4"> 
// 					                            <h4 className="font-serif font-semibold text-xl px-3 mt-3">ASCE:</h4>
// 												<div className='line w-14 h-1 ml-3 mb-3' style={{background:"#0060b1"}}></div> 
// 					                            <p className="justify-center text-lg ml-5">American Society of Civil Engineers for Civil Engineering Journals</p>
// 												<div className="flex mt-2">
// 														<p className="justify-center text-md ml-5 mt-2 flex items-center"><b>35  e-Journals </b> (back files access from 2000) </p>
// 														<div className="flex mt-2" >
// 															<h3 className="font-semibold text-lg ml-5">Link :</h3>
// 															<a href="https://ascelibrary.org/" className="text-lg ml-2 text-teal-500"> https://ascelibrary.org/</a>
// 														</div>
// 												</div>
// 												<div className="flex mt-2 mx-3" >
// 													   <a href="#" className=" hover:text-black hover:no-underline no-underline font-semibold p-2 border-2 border-black rounded-xl text-lg mt-2">Download</a>
// 												</div>  
//                     				</div>
// 									<div className=" w-10/12 h-60 items-center facilities-background border-2 border-black rounded-md mt-4"> 
// 		                                    <h4 className="font-serif font-semibold text-xl px-3 mt-3 "> Springer Nature e-Journals</h4>
// 											<div className='line w-14 h-1 ml-3 mb-3' style={{background:"#0060b1"}}></div> 
// 		                             		<p className="justify-center text-lg ml-5">Engineering, Computer Science, Mathematics & Statistics, Physics & Chemistry</p>
// 											<div className="flex mt-2">
// 													<p className="justify-center text-md ml-5 mt-2 flex items-center"><b>465 e-Journals</b>(back files access from 2000) </p>
// 													<div className="flex mt-2" >
// 														<h3 className="font-semibold text-lg ml-5">Link :</h3>
// 														<a href="https://link.springer.com/" className="text-lg ml-2 text-teal-500">https://link.springer.com</a>
// 													</div>
// 											</div>
// 				                            <div className="flex mt-2 mx-3" >
// 													   <a href="#" className=" hover:text-black hover:no-underline no-underline font-semibold p-2 border-2 border-black rounded-xl text-lg mt-2">Download</a>
// 											</div>  
//                                     </div>
// 									<div className=" w-10/12 h-60 facilities-background items-center border-2 border-black rounded-md mt-4"> 
// 			                             <h4 className="font-serif font-semibold text-xl px-3 mt-3">DELNET Digital Library:</h4>
// 										 <div className='line w-14 h-1 ml-3 mb-3' style={{background:"#0060b1"}}></div> 
// 			                             <p className="justify-center text-lg px-5">
// 			                                <b> User Name :</b> apbec <br></br>
// 			                                <b> Password: </b> bec1528
// 	                                     </p>
// 			                             <p className="justify-center text-md px-5 mt-3 flex items-center">For e-journals & e-books visit : 
// 										 	<a href="https://www.delnet.in/" className="text-lg  text-teal-500 underline mr-1">DELNET</a>
// 										    (New Discovery Portal) 
// 										 </p> 
// 			                        </div>
// 									<div className="w-10/12 h-60 items-center facilities-background  border-2 border-black rounded-md mt-4"> 
// 					                     <h4 className="font-serif font-semibold text-xl px-3 mt-3">Library Catalogue - OPAC (Online Public Access Catalogue):</h4>
// 										 <div className='line w-14 h-1 ml-3 mb-3' style={{background:"#0060b1"}}></div> 
// 					                   	 <p className="justify-center text-lg ml-5 mt-4 mr-2">OPAC is an online database of complete details of Books available with the Library. Users may access the OPAC in our Library to search for Books by Author or by Title or by Subject etc... to locate the required Books.</p>  
// 				                    </div>
// 							</div>
// 							<div className="tab-pane fade md:ml-28 xl:ml-0" id="E-books" role="tabpanel" aria-labelledby="E-books-tab">
// 								<div>
// 									<h4 className="ml-3 mt-3 text-2xl mb-2  text-cyan-800 "> <b>e-Journals & e-Books:</b> </h4>
// 									<div className='line w-24 h-1 ml-3' style={{background:"#0060b1"}}></div>
// 									<p className="text-justify mt-4 ml-4 my-2 text-lg pr-3"> The following subscriptions can be used from any desktop or laptop with in the campus network and through Knimbus Mobile App.</p>
// 									<p className="text-justify  ml-4 my-2 text-xl pr-3"> <b> Note:- </b>  IP address based access is provided for all e journals in our college campus. Hence, all the following e-Journals are directly accessible in our College Campus network systems  and no user name & password is required. In case of any difficulty in accessing these e resources, please contact the - Librarian / HOD Concerned.</p>
// 									<h4 className="ml-3 mt-4 text-2xl mb-2 text-cyan-800"><b> Off Campus Access (Mobile App):</b></h4>
// 									<div className='line w-24 h-1 ml-3 ' style={{background:"#0060b1"}}></div>
// 									<p className="text-justify mt-4 ml-4 my-2 text-lg pr-3"> Off Campus access through Knimbus mobile app is provided to access all  e journals & e books subscribed by our Library. Users can access all e resources of the Library from anywhere and at any time through the mobile app. Contact the Librarian for installation of Knimbus mobile app.</p>
// 								</div>
// 							</div>
// 							<div className="tab-pane fade " id="librarystaff" role="tabpanel" aria-labelledby="librarystaff-tab">
// 								   <h3 className="font-semibold font-mono text-2xl mt-3">Staff Members</h3>
// 								   <div className='line w-14 h-1 mb-2' style={{background:"#0060b1"}}></div>
// 									<div className="mt-3 p-3 ">
// 				               				<div className="staff-container grid grid-flow-row justify-center gap-4 mt-3 mb-5 md:grid-cols-1 md:ml-32 md:justify-items-center lg:grid-cols-1 xl:ml-0 xl:grid-cols-2 2xl:grid-cols-3">{Library}</div>
// 									</div>
// 							</div>
// 							<div className="tab-pane fade " id="nptel" role="tabpanel" aria-labelledby="nptel-tab">

// 							</div>

// 					</div>
// 			    </div>
// 		    </div>
//         </div>
//     </>
// 	)

// }



		                  {/*homepage*/}

import "/src/pages/Facilities/Facilities.css";
import LibImg from "/src/assets/LibHome.jpg";
import RoboImg from "/src/assets/RoboHome.jpg";
import BoschImg from "/src/assets/BoschHome.webp";
import CafteriaImg from "/src/assets/CanteenHome.jpg";
import TransportImg from "/src/assets/BusHome.png";
import {Link} from "react-router-dom";
													
export default function Facilities()
{
	return (
       <div>
				<div className="px-5">
					<div className=" w-full h-14 mt-2 text-5xl text-blue-800 font-sans flex justify-center items-center"> Central Facilities</div>
				</div>
				<div className="mt-5 flex flex-wrap px-5">
										  	<div className="w-[30rem] h-[32rem] ml-5  shadow-2xl shadow-black hover:scale-105 "> 
												  <img src={LibImg} className=" w-[30rem] h-[25rem] rounded-t-2xl "></img>
												  <div className="w-[30rem] h-[3rem]">
													  <h3 className="text-3xl flex justify-center mt-3 items-center font-serif font-semibold">Library</h3>
												  </div>
												  <div className="w-[30rem] h-[4rem] bg-gradient-to-l facilities-Home from-green-400 rounded-b-2xl">
												  <div className="ml-3 pt-3">
													  <Link className="hover:text-black hover:no-underline no-underline font-semibold p-2 border-2 border-black rounded-xl text-lg" to={"/Library"}> Read More > </Link>
												  </div>
												  </div>
										 	</div>

										    <div className="w-[30rem] h-[32rem]  ml-5 shadow-2xl shadow-black  hover:scale-105"> 
											     <img src={RoboImg} className="w-[30rem] h-[25rem]  rounded-t-2xl "></img>
												  <div className="w-[30rem] h-[3rem]">
													  <h3 className="text-3xl flex justify-center mt-3 items-center  font-serif font-semibold">Robotic Centre</h3>
												  </div>
												  <div className="w-[30rem] h-[4rem] bg-gradient-to-l facilities-Home from-green-400  rounded-b-2xl ">
													<div className="ml-3 pt-3">
													  <Link className="hover:text-black hover:no-underline no-underline font-semibold p-2 border-2 border-black rounded-xl text-lg " to={"/RoboticCentre"}> Read More > </Link>
													</div>
												  </div>
											</div>

											<div className="w-[30rem] h-[32rem] ml-5  shadow-2xl shadow-black  hover:scale-105 "> 
											     <img src={BoschImg} className="w-[30rem] h-[25rem]  rounded-t-2xl"></img>
												  <div className="w-[30rem] h-[3rem]">
													  <h3 className="text-3xl flex justify-center mt-3 items-center font-serif font-semibold">Bosch-Rexroth COE</h3>
												  </div>
												  <div className="w-[30rem] h-[4rem] rounded-b-2xl bg-gradient-to-l facilities-Home  from-green-400">
												    <div className="ml-3 pt-3">
												      <Link className="hover:text-black hover:no-underline no-underline font-semibold p-2 border-2 border-black rounded-xl text-lg" to={"/BoschRexrothCEO"}> Read More > </Link>
													</div>
												  </div>
											</div>
											<div className="w-[30rem] mt-5 h-[32rem] ml-5  shadow-2xl shadow-black  hover:scale-105"> 
												 <img src={CafteriaImg} className="w-[30rem] h-[25rem] rounded-t-2xl"></img>
												  <div className="w-[30rem] h-[3rem]">
													  <h3 className="text-3xl flex justify-center mt-3 items-center font-serif font-semibold">Cafteria</h3>
												  </div>
												  <div className="w-[30rem] h-[4rem] rounded-b-2xl bg-gradient-to-l facilities-Home  from-green-400">
												  	<div className="ml-3 pt-3">
												 		 <Link className="hover:text-black hover:no-underline no-underline font-semibold p-2 border-2 border-black rounded-xl text-lg" to={"/Cafteria"}> Read More > </Link>
													</div>
												  </div>
											</div>
											<div className="w-[30rem] mt-5 h-[32rem] ml-5 shadow-2xl shadow-black hover:scale-105 "> 
												<img src={TransportImg} className="w-[30rem] h-[25rem] rounded-t-2xl"></img>
												  <div className="w-[30rem] h-[3rem]">
													  <h3 className="text-3xl flex justify-center mt-3 items-center font-serif font-semibold">Transportation</h3>
												  </div>
												  <div className="w-[30rem] h-[4rem] rounded-b-2xl bg-gradient-to-l facilities-Home  from-green-400">
												  	<div className="ml-3 pt-3">
												 		 <Link className="hover:text-black hover:no-underline no-underline font-semibold p-2 border-2 border-black rounded-xl text-lg" to={"/Transportation"}> Read More > </Link>
													</div>
												  </div>
											</div>
											<div className="w-[30rem] mt-5 h-[32rem] bg-black ml-5"> 
							
											</div>
											<div className="w-[30rem] mt-5 h-[32rem] bg-black ml-5"> 
							
											</div>
											<div className="w-[30rem] mt-5 h-[32rem] bg-black ml-5"> 
							
											</div>
		  
		  
				</div>
	   </div>
	)
}
           



						




























