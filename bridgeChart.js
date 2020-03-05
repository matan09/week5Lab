


let bridgesData = [
    {"name":"Golden Gate Bridge","City, State":"San Francisco and Marin, CA","Span":"1280.2","location":[37.8199, -122.4783]},
    {"name":"Verrazano-Narrows Bridge","City, State":"New York, NY","Span":"1298.4","location":[40.6066, -74.0447]},
    {"name":"Mackinac Bridge","City, State":"Mackinaw and St Ignace, MI","Span":"1158.0","location":[45.8174, -84.7278]},
    {"name":"George Washington Bridge","City, State":"New York, NY and New Jersey, NJ","Span":"1067.0","location":[40.8517, -73.9527]},
    {"name":"Tacoma Narrows Bridge","City, State":"Tacoma and Kitsap, WA","Span":"853.44","location":[47.2690, -122.5517]}
]
let bridge_name=[]
let bridge_length = []

bridgesData.forEach(function(element) {
bridge_name.push(element.name)
bridge_length.push(element.Span)
console.log(bridge_name, bridge_length)
})



new Chart(document.getElementById("bridgeBar-chart"), {
    type: 'bar',
    data: {
      labels:bridge_name,

      datasets: [
        {
          label: "Span length",
          backgroundColor: ["#27AE60", "#E6B0AA","#F4D03F","#e8c3b9","#c45850"],
          data: bridge_length
        }
      ]
    },
    options: {
      scales:{
        yAxes:[{
          ticks: {
            beginAtZero: true
          }
        }]
      },
      legend: { display: false },
      title: {
        display: true,
        text: 'P'
        
      }
    }
});