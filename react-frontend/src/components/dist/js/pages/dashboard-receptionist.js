// import { Chart, registerables } from 'chart.js';
// import "https://cdn.jsdelivr.net/npm/chart.js";
import Chart from 'chart.js/auto';
// import './dashboard';

var salesChartCanvas2 = document.getElementById('revenue-chart-canvas-receptionist');

window.onload = function() {  

  var salesChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Admitted',
        backgroundColor: 'rgba(60,141,188,0.9)',
        borderColor: 'rgba(60,141,188,0.8)',
        pointRadius: false,
        pointColor: '#3b8bba',
        pointStrokeColor: 'rgba(60,141,188,1)',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(60,141,188,1)',
        data: [28, 48, 40, 19, 86, 27, 90]
      },
      {
        label: 'Discharged',
        backgroundColor: 'rgba(210, 214, 222, 1)',
        borderColor: 'rgba(210, 214, 222, 1)',
        pointRadius: false,
        pointColor: 'rgba(210, 214, 222, 1)',
        pointStrokeColor: '#c1c7d1',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(220,220,220,1)',
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  }

  var salesChartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        gridLines: {
          display: false
        }
      }],
      yAxes: [{
        gridLines: {
          display: false
        }
      }]
    }
  }

  const salesChart2 = new Chart(salesChartCanvas2, { // lgtm[js/unused-local-variable]
    type: 'line',
    data: salesChartData,
    options: salesChartOptions
  })

 


  // var pieChartCanvas = document.getElementById('sales-chart-canvas2-receptionist');
  // // console.log(pieChartCanvas2, "NOW")
  // var pieData = {
  //   labels: [
  //     'Complete',
  //     'Pending',
  //     'Overdue'
  //   ],
  //   datasets: [
  //     {
  //       data: [30, 12, 20],
  //       backgroundColor: ['#28a745', '#ffc107', '#dc3545']
  //     }
  //   ]
  // }
  // var pieOptions = {
  //   legend: {
  //     display: true
  //   },
  //   maintainAspectRatio: false,
  //   responsive: true
  // }
  
  // var pieChart2 = new Chart(pieChartCanvas, { 
  //   type: 'doughnut',
  //   data: pieData,
  //   options: pieOptions
  // })
  // pieChart.destroy()
  // salesChart.destroy()
}
