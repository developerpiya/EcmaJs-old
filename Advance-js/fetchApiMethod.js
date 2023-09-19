fetch('https://data.covid19india.org/v4/min/timeseries.min.json').then((apidata)=>{
    console.log(apidata);
    return apidata.json();
}).then((actualdata)=>{
    console.log(actualdata)
}).catch((error)=>{
    console.log(error)
});