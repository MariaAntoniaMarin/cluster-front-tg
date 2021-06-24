<canvas id='myChart' width='100' height='5'></canvas>


<script>
    import {onMount} from 'svelte';

    async function createChart () {
      const module = await import('chart.js');
      const Chart = module.default;

      var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'bar',
          data: {
              labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
              datasets: [{
                  label: '# of Votes',
                  data: [500, 190, 30, 415, 266, 296],
                  backgroundColor: [
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(54, 162, 235, 0.2)',
                      'rgba(255, 206, 86, 0.2)',
                      'rgba(75, 192, 192, 0.2)',
                      'rgba(153, 102, 255, 0.2)',
                      'rgba(255, 159, 64, 0.2)'
                  ],
                  borderColor: [
                      'rgba(255, 99, 132, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 206, 86, 1)',
                      'rgba(75, 192, 192, 1)',
                      'rgba(153, 102, 255, 1)',
                      'rgba(255, 159, 64, 1)'
                  ],
                  borderWidth: 1
              }]
          },
          options: {
            responsive:true,
            maintainAspectRatio: false,
              scales: {
                  y: {
                      beginAtZero: true
                  }
              }
          }
      });
    }

  onMount(createChart);

//    const fetch = require('node-fetch');
//
//    fetch('.static/data-header-chart.json')
//        .then(response => response.json())
//        .then(json => {
//            drawChart(json);
//        });
//
//    async function drawChart(json) {
//        const module = import('chart.js')
//        const Chart = module.default;
//
//        let ctx = document.getElementById('myChart');
//        let myChart = new Chart(ctx, {
//            type: 'bubble',
//            data: {
//                datasets: [{
//                    data: json['clus_1'],
//                    backgroundColor: 'rgb(0, 255, 127)'
//                }, 
//                {
//                    data: json['clus_2'],
//                    backgroundColor: 'rgb(255, 69, 0)'
//                }]
//            },
//            options: {
//                scales: {
//                    xAxes: [{
//                        display: false
//                    }],
//                    yAxes: [{
//                        display: false
//                    }]
//                },
//                legend: {
//                    display: false
//                },
//                responsive: true, 
//                maintainAspectRatio: false,
//                tooltips: {
//                    enabled: false
//                }
//            }
//        });
//    }
</script>
