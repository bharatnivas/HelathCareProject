let chartnew = document.getElementById('chartnew').getContext('2d');

    // Global Options
    Chart.defaults.global.defaultFontFamily = 'Lato';
    Chart.defaults.global.defaultFontSize = 18;
    Chart.defaults.global.defaultFontColor = '#777';

    let mssChart = new Chart(chartnew, {
      type:'horizontalBar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
      data:{
       labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
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
       legend:{labels: {fontColor: '#fff'}},
      title: {
            display: true,
            fontColor: '#fff',
            text: 'Custom Chart Title'
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true,
                    fontColor: '#fff'
                },
            }],
          xAxes: [{
                ticks: {
                    fontColor: '#fff'
                },
            }]
        } 
        
    }
});