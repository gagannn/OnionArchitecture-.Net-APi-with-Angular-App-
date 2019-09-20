
export class Product{
    constructor(
        public ProductID:number,
        public Title:string,
        public Color:string,
        public Price:number, 
        public InStock:boolean,
        public Details:string,
        public Quantity:number,
        public Rating:number,
        public ExpiryDate:Date,
        public ImageURL:string  
        )
    { }
}