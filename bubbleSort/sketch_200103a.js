let values = []; 
let w = 20; 
let states = [];

function setup() {
  //frameRate(1);
  createCanvas(windowWidth, windowHeight); 
  values = new Array(floor(width/w)); 
 
  for(let i = 0; i < values.length; i++) { 
      values[i] = float(random(height)); 
      states[i] = -1;  
  } 
  bubbleSort(values, 0, values.length);
   //
}


async function bubbleSort(arr, start, end) { 
    if(start >= end) { 
        return; 
    } 
    
    for(var i = 0; i < end-1; i++) { 
        for(var j = 0; j < end-i-1; j++) { 
            if(arr[j] >= arr[j+1]) { 
                states[j] = 0; 
   
                // Call to swap function 
                await swap(arr, j, j+1); 
                states[j+1] = 1; 
            } 
            states[j+1] = 1;
            states[j] = 2; 
        } 
    } 
    states[0] = 1;
    return arr; 
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
        else { 
            fill(255); 
        } 
        rect(i*w, height - values[i], w, values[i]); 
    } 
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
