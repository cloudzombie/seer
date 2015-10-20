// Variables for x, axis; javascript date objects
// btcDiffX relates to x axis labels indexed by date
x = ['x'], ltcX = ['x1'] , btcDiffX = ['x']; 
// Variables for y axis; numbers/floats
bfBtcAxis = ['bfbtc'], ltAxis = ['ltc'], btcDiffAxis = ['btcDiff'];

document.write('<div class="chart2"></div><br/><button onclick="chart2.transform(\'step\')">Step</button><button onclick="chart2.transform(\'line\')">Line</button>');

loadChart = function(){
  if(typeof chart2 != "undefined" && chart2 && chart2 != null){
    return chart2.load({columns : [ x,ltcX,bfBtcAxis,ltAxis] });
  }else{
    console.log("missing this chart");
    return false;
  }
};


// build chart; charts two x axes as a timeseries
chart2 = c3.generate({
    bindto:'.chart2',
    size: { height: 400 , width: 1260 },
    data: {
          type:  'step',
          xs :{
            'bfbtc' : 'x',
            'ltc' : 'x1'
          },
          columns: [ x, ltcX, bfBtcAxis, ltAxis ],
          axes : {
            'bfbtc' : 'y2',
            'ltc' : 'y'
           },
          axis : {
            x : {
              label : { position: 'inner-center' }
            }
          },
          xFormat : '%I:%M:%S',
          }

          ,
    color: {
          pattern: ['green', 'purple', 'red']
        },
    axis: {
        x: {
          type: 'timeseries',
          tick: { format: '%I:%M:%S' }
        },
        y: {
          tick : { format: d3.format("$,") }
        },
        y2: { show:true }
      },
    legend: { show: true }
});

