    class Node {
        constructor(val,priority)
        {
            this.val = val;
            this.priority = priority;
        }
    }

    export class PriorityQueue
    {
        constructor()
        {
            this.values = [];
        }

        insertValues(val,priority)
        {
            let node = new Node(val,priority);
            this.values.push(node);
            if(this.values.length == 0) return this.values;
            let lastIndex = this.values.length-1;
            let parentIndex = Math.floor((lastIndex-1)/2);
            while(parentIndex >= 0 && this.values[parentIndex].priority > this.values[lastIndex].priority)
            {
                [this.values[parentIndex],this.values[lastIndex]] = [this.values[lastIndex],this.values[parentIndex]];
                lastIndex = parentIndex;
                parentIndex = Math.floor((lastIndex-1)/2);
            }
            return this.values;
        }
        
        removeValue()
        {
        if(this.values.length == 0) return this.values;
        let lastIndex = this.values.length - 1;
        [this.values[0],this.values[lastIndex]] = [this.values[lastIndex],this.values[0]];
        console.log("Removed value");
        console.log(this.values.pop());
        let currentIndex = 0;
        let leftChild = 2*currentIndex + 1;
        let rightChild = 2*currentIndex + 2;
        while(leftChild < this.values.length-1 && rightChild < this.values.length-1 && (this.values[leftChild].priority < this.values[currentIndex].priority || this.values[rightChild].priority > this.values[currentIndex].priority))
        {
                let temp;
                if(this.values[leftChild].priority < this.values[rightChild].priority)
                {
                    temp = leftChild;
                }
                else
                {
                    temp = rightChild;
                }
                if(leftChild > this.values.length-1) temp = rightChild;
                if(rightChild > this.values.length-1) temp = leftChild;
                [this.values[currentIndex],this.values[temp]] = [this.values[temp],this.values[currentIndex]];
                currentIndex = temp;
                leftChild = 2 * currentIndex + 1;
                rightChild = 2 * currentIndex + 2;
        }
        return this.values;
        }

    }
