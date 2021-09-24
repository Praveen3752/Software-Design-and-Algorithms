import { Point } from './Point';
import { Shape } from './Shape';

export class Triangle extends Shape {
    constructor(point1 : Point,point2 : Point,point3 : Point)
    constructor(point1 : Point,point2 : Point,point3 : Point,colorData : string,filledData : boolean)
    constructor(point1 : Point,point2 : Point,point3 : Point,colorData ?: string, filledData ?: boolean)
    {
        let pointsArr = [point1,point2,point3];
        if(!colorData && !filledData)
        {
            super(pointsArr);
        }
        else{
            super(pointsArr,colorData,filledData);
        }
    }

    toString()
    {
        let pointArray : string[] = [];
        for(let i=0;i<this.points.length;i++)
        {
            pointArray.push(`v${i+1}=(${this.points[i].x}, ${this.points[i].y})`);
        }
        return `Triangle[${pointArray.toString()}]`;
    }

    getType()
    {
        let distance1 = this.points[0].distance(this.points[1]).toFixed(1);
        let distance2 = this.points[1].distance(this.points[2]).toFixed(1);
        let distance3 = this.points[2].distance(this.points[0]).toFixed(1);

        if(distance1 === distance2 && distance2 === distance3)
        {
            return "equilateral triangle";
        }
        else if(distance1 === distance2 || distance2 === distance3 || distance3 == distance1)
        {
            return "isosceles triangle";
        }
        else 
        {
            return "scalene triangle";
        }
    }
}
