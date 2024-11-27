

function areaSquare(side:number){
    console.log(side * side); 
}

function printScuare( side:number, text:string ){
    console.log(text + side * side); 
}

const squareSize:number = 8; // number
const text:string = "Squere area is "; //string
const isPrinted:boolean = false; 


if(isPrinted){
    //printScuare(squareSize, text);
}else{
    //areaSquare(squareSize); 
}


//printScuare(squareSize, text);
//areaSquare(squareSize); 

// ----- object ------

const Costumers : { 
    name : string, 
    age : number, 
} = { 
    name : 'Roger', 
    age : 12
}


// ----- array ------

const skills:string[] = ['Java', 'php', 'node.js']; 

for(const skill of skills){ 
    //console.log(skill)
}

// ----- Tupla ------

let files:[string, string] = ["video", "name"]; 
files = ['name', '.mp4']; 

// ----- enum ------

enum colors{red = "#ff2221", blue = "#hhh232", green = "#bb341"}

const preferences = { 
    fontfamily :'times new roman', 
    fontsize : 12, 
    colors : colors.red, 
};

if(preferences.colors === colors.red){
    //console.log(colors.red); 
}

// ----- eny ------
//admite cualquier tipo de dato 

const numeros:any = ['Roger', 12, true];

// ----- union ------
//verifica si se espera datos diferentes para una sola variable 

function marge(number1: string | number, number2: string | number){
    if(typeof number1 === 'number' && typeof number2 === 'number'){
        console.log(number1 + number2);
    }
    if( typeof number1 === 'string' && typeof number2 === 'string' ){
        console.log(number1.toString() + number2.toString()); 
    }
}

//marge('dos', 'dos');

// -----  literal ------

function equals21(browser: "firefox" | "chrome"){ 
    console.log('Browser Valid');
}
//equals("firefox"); 


// -----  alias de tipos ------
// la comparacion tiene un alias y se define en una variable 

type browsers = "firefox" | "chrome"; 

function equals(browser:browsers){ 
    console.log('Browser Valid');
}
//equals("edge"); 
