let values = []; 
let w = 20; 
let states = [];
let sleep_time = 100;

function setup() {
  //frameRate(1);
  createCanvas(windowWidth, windowHeight); 
  values = new Array(floor(width/w)); 
 
  for(let i = 0; i < values.length; i++) { 
      values[i] = float(random(height)); 
      states[i] = -1;  
  } 
  insertionSort(values, 0, values.length);
   //
}

async function insertionSort(arr, start, end) { 
    if(start >= end) { 
        return; 
    } 
    
    var i, key_, j;  
    for (i = 1; i < end; i++) 
    {  
      await sleep(sleep_time); 
        states[i] = 0;
        key_ = arr[i];  
        j = i - 1;  
        
        /* Move elements of arr[0..i-1], that are  
        greater than key, to one position ahead  
        of their current position */
        while (j >= 0 && arr[j] > key_) 
        {  
          await sleep(sleep_time); 
            states[j] = 0;
            arr[j + 1] = arr[j];  
            j = j - 1; 
            states[j+2] = 1; 
        }  
        states[j+1] = 1;
        arr[j + 1] = key_;  
    }
    
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
