import data from './rawBooks.json' assert { type: 'json' };

console.log(data);

for(var x = 0; x < data.length; x++){
    if(data[x]['read?'] === 'Yes'){
        console.log(data[x]['read?']);
    }
}

for(var x = 0; x < data.length; x++){
    if(data[x]['Audible'] === 'Yes'){
        var percentAudio = (592*100)/920
        console.log(data[x]['Audible'] + ' percent Audible: ' + percentAudio);
    }

    for(var x = 0; x < data.length; x++){
        //console.log(data[x]['category'])
        }
        console.log("I looked which had the highest number: 'Gay fantasy'")

        for(var x = 0; x < data.length; x++){
if(data[x]['Date Read'].includes(2023) && data[x]['Date Read'].includes('March')){
//console.log(data[x]['Date Read'] + data[x]['title'])
}
        }
console.log("I looked through the results of the above loop and the most recent book is 'The Order Of The Pure Moon Reflected In Water' on March 30th")

for(var x = 0; x < data.length; x++){
    if(data[x]['Time on TBR (days)'] > 44900){
        console.log(data[x]['time on TBR (days)'])
    }

    
}


}