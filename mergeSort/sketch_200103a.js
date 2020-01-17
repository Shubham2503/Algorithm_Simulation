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
  mergeSort(values);
   //
}

function mergeSort(array) {
  var arrays = [array.slice()],
  n = array.length,
  array0 = array,
  array1 = new Array(n);

  for (var m = 1; m < n; m <<= 1) {
    for (var i = 0; i < n; i += (m << 1)) {
      merge(i, Math.min(i + m, n), Math.min(i + (m << 1), n));
    }
    arrays.push(array1.slice());
    array = array0, array0 = array1, array1 = array;
  }

function merge(left, right, end) {
  for (var i0 = left, i1 = right, j = left; j < end; ++j) {
    array1[j] = array0[i0 < right && (i1 >= end || array0[i0] <=    array0[i1]) ? i0++ : i1++];
   }
 }
 return arrays;
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
