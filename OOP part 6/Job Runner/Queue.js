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
            while(parentIndex >= 0 && this.checkPriorityForParent(parentIndex,lastIndex))
            {
                this.swapValues(parentIndex,lastIndex);
                lastIndex = parentIndex;
                parentIndex = Math.floor((lastIndex-1)/2);
            }
            return this.values;
        }

        checkPriorityForParent(parentIndex,lastIndex) {
            return this.values[parentIndex].priority > this.values[lastIndex].priority;
        }
        
        removeValue()
        {
        if(this.values.length == 0) return this.values;
        let lastIndex = this.values.length - 1;
        this.swapValues(0,lastIndex);
        this.removeValueandLog();
        let currentIndex = 0;
        let leftChild = this.getLeftChild(currentIndex);
        let rightChild = this.getRightChild(currentIndex);
        while(this.checkForLeftAndRightChild(leftChild,rightChild) && this.checkForPriority(leftChild,rightChild,currentIndex))
        {
                let temp;
                temp = this.getTempIndex(leftChild,rightChild);
                this.swapValues(currentIndex,temp);
                currentIndex = temp;
                leftChild = this.getLeftChild(currentIndex);
                rightChild = this.getRightChild(currentIndex);
        }
        return this.values;
        }

        checkForLeftAndRightChild(leftChild,rightChild) {
            return leftChild < this.values.length-1 && rightChild < this.values.length-1;
        }

        checkForPriority(leftChild,rightChild,currentIndex) {
            const leftChildPriority = this.values[leftChild].priority < this.values[currentIndex].priority;
            const rightChildPriority = this.values[rightChild].priority > this.values[currentIndex].priority;
            return leftChildPriority || rightChildPriority;
        }

        getTempIndex(leftChild,rightChild) {
            let temp;
            if(leftChild > this.values.length-1) temp = rightChild;
            if(rightChild >= this.values.length-1) temp = leftChild;
            return temp;
        }

        removeValueandLog() {
        console.log("Removed value");
        console.log(this.values.pop());
        }

        getLeftChild(currentIndex) {
            return 2 * currentIndex + 1;
        }

        getRightChild(currentIndex) {
            return 2 * currentIndex + 2;
        }

        swapValues(firstIndex,secondIndex) {
            [this.values[firstIndex],this.values[secondIndex]] = [this.values[secondIndex],this.values[firstIndex]];
        }


    }
