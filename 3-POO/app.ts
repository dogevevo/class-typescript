class Rectangulo{ 
    baseRectangulo:number = 2; 
    alturaRectangulo:number = 2; 
    color:string = "Rojo"; 

    calcularArea():number{
        const area = this.alturaRectangulo * this.baseRectangulo; 
        return area; 
    }

    calcularPerimetro():number{
        return (2 * this.alturaRectangulo) + (2 * this.baseRectangulo ); 
    }
}

let rectangulo:Rectangulo = new Rectangulo(); 
let rectangulo2:Rectangulo = new Rectangulo();


