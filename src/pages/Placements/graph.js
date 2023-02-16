window.onload = function () {
    var chart = new CanvasJS.Chart("chartContainer1", {
        title:{
            text: "YearWise Placements"              
        },
        axisY: {
            title: "No of Students Placed"
        },
        data: [              
        {
            // Change type to "doughnut", "line", "splineArea", etc.
            type: "column",
            toolTipContent: "<b>{label}</b><hr/>{y}",
            dataPoints: [
                {color:"green", label: "2022-2023",  y: 100 },
                {color:"orange", label: "2021-2022",  y: 15  },
                {color:"yellow", label: "2020-2021",  y: 25  },
                {color:"black", label: "2019-2020",  y: 30  },
                {color:"red", label: "2018-2019",  y: 28  },
                { label: "2017-2018",  y: 38  },
                { label: "2016-2017",  y: 45  },
                { label: "2015-2016",  y: 79  },
                { label: "2014-2015",  y: 19  },
                { label: "2013-2014",  y: 89  }
            ]
        }
        ]
    });
    chart.render();
}