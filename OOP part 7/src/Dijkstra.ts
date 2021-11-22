import {PriorityQueue  } from "./PriorityQueue";
const verticesObj : Record<string,number> = {'A':0,'B':1,'C':2,'D':3,'E':4,'F':5,'G':6,'H':7,'I':8,'J':9,'K':10,'L':11,'M':12,'N':13,'O':14,'P':15,'Q':16,'R':17,'S':18
,'T':19,'U':20,'V':21,'W':22,'X':23,'Y':24,'Z':25};
export class Dijkstra {
    prev : Record<string,any>;
    constructor() {
      this.prev = {};
    }
  
    initPriorityQueue(start:any, size:any) {
      const pq = new PriorityQueue();
      let char = 65;
      pq.enqueue(start, 0);
      for(let i=0; i<size; i+=1) {
        if(i === verticesObj[start]) continue;
        pq.enqueue(String.fromCharCode(char+i), Number.MAX_VALUE);
      }
      return pq;
    }
  
    minDistance(graphInstance:any, start:any, end:any) {
      this.prev[start] = null;
      const visited : Record<string,any> = {};
      const pq = this.initPriorityQueue(start, graphInstance.length);
      let char = 65;
      while(pq.size) {
        const popped = pq.dequeue();
        const currDist = popped.priority;
        if(visited[popped.value]) break;
        const adj = graphInstance[verticesObj[popped.value]];
        this.checkForUpdate(adj,char,visited,pq,currDist,popped);
        visited[popped.value] = true;
      }
      return this.getShortestPath(start, end);
    }

    checkForUpdate(adj:any,char:any,visited:any,pq:any,currDist:any,popped:any) {
      for(let i=0; i<adj.length; i+=1) {
        let charCode = String.fromCharCode(char+i);
      if(adj[i] !== 0 && !visited[charCode]) {
        if(pq.getPriority(charCode) > currDist+adj[i]) {
          pq.updatePriority(charCode, currDist+adj[i]);
          this.prev[charCode] = popped.value;
        }
      }
    }
    }
  
    getShortestPath(start:any, end:any) {
      const path = [];
      let next = end;
      path.push(end);
      while(next!==start) {
        next = this.prev[next];
        path.push(next);
      }
      return path.reverse().join('-->');
    }
  }