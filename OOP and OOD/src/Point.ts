export class Point{
    x: number;
    y: number;
    constructor();
    constructor(x:number,y:number)
    constructor(x?:number,y?:number)
    {
        this.x = x ? x : 0;
        this.y = y ? y : 0;
    }

    toString()
    {
        return `(${this.x}, ${this.y})`;
    }

    distance() : number;
    distance(pointData : Point) : number;
    distance(x:number,y:number) : number;
    distance(data ?: any,y?:number)
    {
        let xPoint! : number;
        let yPoint! : number;
        if(!data && !y)
        {
            xPoint = Math.pow(this.x-0,2);
            yPoint = Math.pow(this.y-0,2);
        }
        else if(data && y)
        {
            xPoint = Math.pow(this.x-data,2);
            yPoint = Math.pow(this.y-y,2);
        }
        else if(data && !y)
        {
            xPoint = Math.pow(this.x-data.x,2);
            yPoint = Math.pow(this.y-data.y,2);
        }
        return Math.sqrt(xPoint + yPoint);
    }
}