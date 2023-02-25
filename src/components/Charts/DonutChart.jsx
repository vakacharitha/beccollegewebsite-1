import React, {useState} from "react";
import Chart from "react-apexcharts";

let DonutChart=() =>{
    return(
        <>
        <React.Fragment>
      <div className="BarChart container-fluid mb-5">

      <Chart 
            type="donut"
            width={900}
            height={500}
            series={[70, 36, 30, 45, 34, 20, 44, 36, 23, 20,44, 36, 23, 20,44, 36, 23, 20,44, 36, 23, 20]}

            options={{
             labels:["TCS",
             "INFOSYS",
             "ATOS SYNTEL",
             "WIPRO",
             "CAPGEMINI",
             "SNOVASYS",
             "TALENT PACE",
             "EFFTRONICS",
             "POLMON INSTRUMENTS",
             "THUNDER SOFT",
             "TALENT PACE",
             "EFFTRONICS",
             "POLMON INSTRUMENTS",
             "THUNDER SOFT",
             "TALENT PACE",
             "EFFTRONICS",
             "POLMON INSTRUMENTS",
             "THUNDER SOFT","TALENT PACE",
             "EFFTRONICS",
             "POLMON INSTRUMENTS",
             "THUNDER SOFT",],
             title:{
                // text:"Placements 2022-2023",
                // style: {
                //   fontSize:  '30',
                //   fontWeight:  'bold',

                // },                
             },
             

             plotOptions:{
             pie:{
                donut:{
                    labels:{
                        show:true,
                        total:{
                            show:true,
                            showAlways:true,
                             //formatter: () => '343',
                        }
                    }
                }
             }

             },
             dataLabels:{
                enabled:true,
             }
            }}
            />
        </div>
    </React.Fragment>
        </>
    )

}
export default DonutChart