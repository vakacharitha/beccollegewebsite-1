import React, {useState} from "react";
import Chart from "react-apexcharts";

let DonutChart1=() =>{
    return(
        <>
        <React.Fragment>
      <div className="BarChart container-fluid mb-5">

      <Chart 
            type="donut"
            width={900}
            height={500}
            series={[106, 46, 40, 45, 34, 28, 44, 38, 29, 25, 44, 36, 20, 25, 45, 30, 28, 25 , 49, 31, 28, 21]}

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
             "THUNDER SOFT",
             "TALENT PACE",
             "EFFTRONICS",
             "POLMON INSTRUMENTS",
             "THUNDER SOFT",],
                colors: ['#F44336', '#9C27B0', '#462626', '#E91E63','#591478', '#DF5877', '#EAE70E', '#EA890E', '#899286', '#ABEA0E', '#18EA0E', '#0EEAD9',
                          '#0E9AEA', '#0E0EEA', '#750EEA', '#EA0EEA', '#EA0E6F', '#EA0E0E', '#AE9595', '#608553', '#BDFFFC', '#CD69C4'],
             title:{
                // text:"Placements 2021-2022",
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
export default DonutChart1