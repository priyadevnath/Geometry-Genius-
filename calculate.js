// Triangle Calculate

function calculateTriangleArea (){

    // triangle-base

     const triangleBaseInput = document.getElementById('triangle-base');
     const triangleBaseText = triangleBaseInput.value ;
     const base = parseFloat(triangleBaseText)
      console.log(typeof base);
      
    //   triangle-height

      const triangleHeightInput = document.getElementById('triangle-height') ;
      const triangleHeightText = triangleHeightInput.value ;
      const height = parseFloat(triangleHeightText) ;
      console.log(height) ;  

    //   calculate triangle area

    const area = 0.5 * base * height ;
    console.log('triangle area is ' , area) ;

    // display triangle result 
    
    const triangleAreaDisplay = document.getElementById('triangle-area') ; 
    triangleAreaDisplay.innerText = area ;
} 

// Calculate Rectangle 

function calculateRectangleArea(){

  // rectangle width
  const rectangleWidthInput = document.getElementById('rectangle-width');
  const rectangleWidthText = rectangleWidthInput.value ;
  const width = parseFloat(rectangleWidthText) ;
  console.log(typeof width) ;

  // rectangle length
  const rectangleLengthInput = document.getElementById('rectangle-length');
  const rectangleLengthText = rectangleLengthInput.value ;
  const length = parseFloat(rectangleLengthText) ;
  console.log(typeof length) ;

// rectangle area calculate 

const area =  length * width
console.log('rectangle area is' , area) ;


// display rectangle area 

const rectangleAreaDisplay = document.getElementById('rectangle-area')
rectangleAreaDisplay.innerText = area ;
}

// calculate Parallelogram

// parallelogram-base
function calculateParallelogramArea(){
  const parallelogramBaseInput = document.getElementById('parallelogram-base') ;
  const parallelogramBaseText = parallelogramBaseInput.value ;
  const base = parseFloat(parallelogramBaseText) ;
  console.log(base) 

  // parallelogram-height
  const parallelogramHeightInput = document.getElementById('parallelogram-height') ;
  const parallelogramHeightText = parallelogramHeightInput.value ;
  const height = parseFloat(parallelogramHeightText) ;
  console.log(height) 

  // parallelogram area calculate 
  area = base * height 
  console.log(area) ;

// parallelogram display area
const parallelogramDisplayArea = document.getElementById('parallelogram-area') ;
parallelogramDisplayArea.innerText = area ;
}

// Calculate Rhombus 
function calculateRhombusArea(){

  // Calculate Rhombus d1
  const rhombusD1Input = document.getElementById('rhombus-d1') ;
  const rhombusD1Text = rhombusD1Input.value ;
  const d1 = parseFloat(rhombusD1Text) ;
  console.log(d1)

// Calculate Rhombus d2
const rhombusD2Input = document.getElementById('rhombus-d2') ;
const rhombusD2Text = rhombusD2Input.value ;
const d2 = parseFloat(rhombusD2Text) ;
console.log(d2)

// Rhombus area calculate 
area = 0.5 * d1 * d2 
console.log(area) ;

// Rhombus display area
const rhombusDisplayArea = document.getElementById('rhombus-area') ;
rhombusDisplayArea.innerText = area ;

}

// Calculate Pentagon

function calculatePentagonArea(){

  // Calculate Pentagon p
  const pentagonPInput = document.getElementById('pentagon-p') ;
  const pentagonPText = pentagonPInput.value ;
  const p = parseFloat(pentagonPText) ;
  console.log(p)

// Calculate Pentagon base
const pentagonBaseInput = document.getElementById('pentagon-base') ;
const pentagonBaseText = pentagonBaseInput.value ;
const base = parseFloat(pentagonBaseText) ;
console.log(base)

// Pentagon area calculate 
area = 0.5 * p * base 
console.log(area) ;

// Pentagon display area
const pentagonDisplayArea = document.getElementById('pentagon-area') ;
pentagonDisplayArea.innerText = area ;
}

// Calculate Ellipse
function calculateEllipseArea(){

  // Calculate Ellipse a
  const ellipseAInput = document.getElementById('ellipse-a') ;
  const ellipseAText = ellipseAInput.value ;
  const a = parseFloat(ellipseAText) ;
  console.log(a)

// Calculate ellipse base
const ellipseBaseInput = document.getElementById('ellipse-base') ;
const ellipseBaseText = ellipseBaseInput.value ;
const base = parseFloat(ellipseBaseText) ;
console.log(base)

// ellipse area calculate 
area =  a * base 
console.log(area) ;

// ellipse display area
const ellipseDisplayArea = document.getElementById('ellipse-area') ;
ellipseDisplayArea.innerText = area ;

// Calculate Ellipse




}
