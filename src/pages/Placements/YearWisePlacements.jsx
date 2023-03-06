import '/src/pages/Placements/Placements.css'
import React, {useState} from "react";
import Chart from "react-apexcharts";
import Donutchart from '/src/components/Charts/DonutChart.jsx'
import Donutchart1 from '/src/components/Charts/DonutChart1.jsx'

let YearWisePlacements=() =>{
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClick] = useState(false);

  const handleClick = () => {
    setIsClick(true);
  };

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
    return(
        <>
<div className="nav dropdown items-start show w-full pt-4">
</div>  
    <React.Fragment>
      <div className="BarChart container-fluid mb-5">

        <Chart
          type="bar"
          width={900}
          height={500}
          series={[
            {
              name: "Students Placed",
              data: [200, 1103, 808, 443, 460, 411, 299, 255, 230, 200],
            },
          ]}
          
          options={{
            title: {
              text: "YearWise Placements",
              style: { fontSize: 30 },
              align:"center",
            },
            xaxis: {
              tickPlacement: "on",
              categories: [
                "2022-2023",
                "2021-2022",
                "2020-2021",
                "2019-2020",
                "2018-2019",
                "2017-2018",
                "2016-2017",
                "2015-2016",
                "2014-2015",
                "2013-2014",
              ],
            },

            yaxis: {
              labels: {
                formatter: (val) => {
                  return `${val}`;
                },
                style: { fontSize: "15", colors: ["black"] },
              },
              title: {
                text: "No of Students Placed",
                style: { color: "black", fontSize: 15 },
              },
            },
            plotOptions: {
              bar: {
                  distributed: true,
                  vertical: true,
                },
            },
            legend: {
              show: true,
              position: "right",
            },
            colors: ['#0CE816', '#0C3EE8', '#9C27B0', '#FFC300', '#EA0EE0', '#FFC300', '#0C3EE8','#9C27B0', '#0EEAE0', '#0C3EE8'],
            
          }}
        ></Chart>
      </div>
    </React.Fragment>
    
      <div className='donutchart flex p-1'>Placements 2022-2023  
      <div className='pl-72'>Max sal : 5.5LPA, avg sal : 3.5LPA, min sal : 2.5LPA</div>
      </div>
    <Donutchart />
    
      <div className='donutchart p-1'>Placements 2022-2023
      <a className='float-right' href="#">View Details</a>
      </div>
    <Donutchart1 />
    
        
        </>
    )
}
export default YearWisePlacements