import { PriorityQueue } from './Queue.js';
export class JobRunner {
    constructor() {
        this.priorityQueue = new PriorityQueue();   
    }

    init() {
        this.count = 0;
        this.addElements();
        this.removeElements();
    }

    addElements() {
        setTimeout(() => {
            this.priorityQueue.insertValues(this.count,JobRunner.getRandomPriority());
            this.count++;
            if(this.count < 10) this.addElements();
        },1000);
    }

    removeElements() {
        setTimeout(() => {
            if(this.priorityQueue.values.length > 0) console.log("peak value \n",this.priorityQueue.values[0]);
            this.priorityQueue.removeValue();
            if(this.priorityQueue.values.length > 0) this.removeElements();
        },3000);
    }

    static getRandomPriority() {
        return Math.floor(Math.random() * 100);
    }
}
