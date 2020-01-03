let values = []; 
let w = 20; 
let states = [];
let min_idx;
let pre_min_idx;

function setup() {
  //frameRate(1);
  createCanvas(windowWidth, windowHeight); 
  values = new Array(floor(width/w)); 
 
  for(let i = 0; i < values.length; i++) { 
      values[i] = float(random(height)); 
      states[i] = -1;  
  } 
  selectionSort(values, 0, values.length);
   //
}
function draw() {
 background(51); 
      
    for(let i = 0; i < values.length; i++) { 
        stroke(0); 
        fill(255); 
          
        if(states[i] == 0) { 
            fill(255, 0, 0); 
        } 
        else if (states[i] == 1) { 
              
            // Element currently sorting 
            fill("#58FA82"); 
        } 
        else if (states[i] == 2){ 
            fill(0,50,255); 
        }
        else
        {
          fill(255);
        }
        rect(i*w, height - values[i], w, values[i]); 
    }
}


async function selectionSort(arr, start, end) { 
    if(start >= end) { 
        return; 
    } 
    for(var i = 0; i < end-1; i++) 
    { 
      min_idx = i;
      states[i] = 0;
        for(var j = i+1; j < end; j++) 
        { 
          states[j] = 2;
            if (arr[j] < arr[min_idx])  
            {
              pre_min_idx = min_idx;
              min_idx = j;
              status[min_idx] = 2;
            }
            await sleep(5);
            states[j] = 3;
          states[min_idx] = 0;
            states[pre_min_idx] = 3;
        } 
            await swap(arr, min_idx, i);
          states[min_idx] = 3;
            //states[j+1] = 0;
            //states[j] = 2; 
            //states[j-1] = 3;
            states[i] = 1;states[i-1] = 1;
    } 
    states[end-1] = 1;
    return arr; 
}


async function swap(arr, a, b) {   
    await sleep(5); 
    let t = arr[a]; 
    arr[a] = arr[b]; 
    arr[b] = t; 
} 

function sleep(ms) { 
    return new Promise(resolve => setTimeout(resolve, ms)); 
} 
