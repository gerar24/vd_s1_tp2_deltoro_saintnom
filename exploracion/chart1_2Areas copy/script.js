d3.csv('astronautas.csv', d3.autoType).then(data => {
  data = data.filter(d => d.nacionalidad === 'EE.UU.' || d.nacionalidad === 'U.S.S.R/Rusia');

  data2 = data.filter(d => d.nacionalidad === 'EE.UU.');
  data3 = data.filter(d => d.nacionalidad === 'U.S.S.R/Rusia');
  let chart = Plot.plot({
    marks: [
      Plot.areaY(data3,
        Plot.binX({
          y:"sum",
        },{
          x:"anio_mision",
          y:"mision_hs",
          fill:"nacionalidad",
        })
      ),
      Plot.areaY(data2,
        Plot.binX({
          y:"sum",
        },{
          x:"anio_mision",
          y:"mision_hs",
          fill:"nacionalidad",
        })
      ),
    ],
    y: {
    },
    x: {
      tickFormat: d3.format(".0f"),
      //grid: true,
    },
    color:{
      range:['#6666FF','#ED2939'],
      legend:true,
    },
    height: 500,
    marginLeft: 100,
  })
  d3.select('#chart').append(() => chart)
})
