

let usg = []
let time = []
let labels = [];
$.ajax({
        url: "gpu_usg.json",
        dataType: "text",
        async: false,
        success: function(msg){
            
            let textByLine = [];
            textByLine = msg.split("\n")
            usg = textByLine;
            

           //alert(textByLine[1])
            
        }
    });

    $.ajax({
        url: "time.txt",
        dataType: "text",
        async: false,
        success: function(msg){
            
            let timetmp = [];
            timetmp = msg.split("\n")
            time = timetmp;
            

           //alert(textByLine[1])
            
        }
    });

 







  const data = {
    labels: time,
    datasets: [{
      label: 'GPU usage',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: usg,
    }]
  };

  const config = {
    type: 'line',
    data: data,
    options: {}
  };



 


