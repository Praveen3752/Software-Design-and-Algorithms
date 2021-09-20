import { Point } from "./Point";

export abstract class Shape {
    abstract getType(): string; 
    protected color : string;
    protected filled : boolean;
    points : Point[];
    constructor(pointData : Point[]);
    constructor(pointData : Point[], colorData : any, filledData : any);
    constructor(pointData : Point[], colorData ?: string, filledData ?: boolean)
    {
        if(pointData.length < 3)
        {
            throw new Error("Shape needs to have atleast 3 points!");
        }
        if(!colorData && !filledData)
        {
            this.color = "green";
            this.filled = true;
        }
        else
        {
            this.color = colorData!;
            this.filled = filledData!;
        }
        this.points = pointData;
    }
    
    toString()
    {
        let tempFilled = this.filled ? 'filled' : 'not filled';
        let pointArray : string[] = [];
        for(let i=0;i<this.points.length;i++)
        {
            pointArray.push(` (${this.points[i].x}, ${this.points[i].y})`);
        }
        return `A Shape with color of ${this.color} and ${tempFilled}. Points:${pointArray.toString()}.`;
    }

    getPerimeter()
    {
        let perimeter = 0;
        for(let i=0;i<this.points.length-1;i++)
        {
            perimeter += Number(this.points[i].distance(this.points[i+1]).toFixed(1));
        }
        perimeter += Number(this.points[0].distance(this.points[this.points.length-1]).toFixed(1)); 
        return perimeter;
    }
}
