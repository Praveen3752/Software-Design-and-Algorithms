import { Component, ViewEncapsulation } from '@angular/core';
import { Dijkstra } from '../Dijkstra';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation : ViewEncapsulation.None
})
export class AppComponent {
verticesArr : any;
verticesText = 'ABCDEFGHILJKLMNOPQRSTUVWXYZ';
verticesObj : any = {'A':0,'B':1,'C':2,'D':3,'E':4,'F':5,'G':6,'H':7,'I':8,'J':9,'K':10,'L':11,'M':12,'N':13,'O':14,'P':15,'Q':16,'R':17,'S':18
,'T':19,'U':20,'V':21,'W':22,'X':23,'Y':24,'Z':25};

submitVertices() {
    this.verticesArr = [];
    const vertices = (<HTMLInputElement>document.getElementById('verticesCount'));
    const check = this.checkValidation(vertices,"Please enter the vertices before you proceed");
    if(!check) return;
    if(Number(vertices.value) > 26) {
        this.alertMsg("Sorry cannot enter more than 26");
        return;
    }
    this.createDropdown(vertices.value);
    this.createEmptyArray(vertices);
}

createEmptyArray(vertices:any) {
    for(let i=0;i<vertices.value;i++) {
      this.verticesArr.push(Array.from({length : vertices.value}, () => 0));
    }
    console.log(this.verticesArr);
}

createDropdown(vertices : any) {
    let optionArray = this.verticesText.slice(0,vertices).split("");
    var fromSelect = document.getElementById("fromEdge");
    var toSelect = document.getElementById("toEdge");
    let fromPath = document.getElementById("fromPath");
    let toPath = document.getElementById("toPath");
    for(let i=0;i<vertices;i++) {
        let option = document.createElement("option");
        option.text = optionArray[i];
        option.value = optionArray[i];
        toSelect!.appendChild(option.cloneNode(true));
        fromSelect!.appendChild(option.cloneNode(true));
        fromPath!.appendChild(option.cloneNode(true));
        toPath!.appendChild(option.cloneNode(true));
    }
}

submitEdges() {
    let fromField = <HTMLInputElement>document.getElementById('fromEdge');
    let toField = <HTMLInputElement>document.getElementById('toEdge');
    let weightValue = <HTMLInputElement>document.getElementById('weight');
    let check = this.checkValidation(weightValue,"Please enter the weight");
    if(!check) return;
    this.createAdjMatrix(fromField!.value,toField!.value,weightValue!.value);
}

checkValidation(inputData:any,msg:string) {
    if(inputData.value == '' || inputData.value == null)  {
        this.alertMsg(msg);
        return 0;
    }
    return 1;
}
alertMsg(msg:string) {
    alert(msg);
}

createAdjMatrix(from:any,to:any,weight:any) {

    let fromIndex = this.verticesObj[from];
    let toIndex = this.verticesObj[to];
    this.verticesArr[fromIndex][toIndex] = weight;
    this.verticesArr[toIndex][fromIndex] = weight;
    document.getElementById("adjacencyMatrixTable")!.innerHTML = '';
    const tableElement = this.makeTable(this.verticesArr);
    document.getElementById("adjacencyMatrixTable")!.appendChild(tableElement);
}

 makeTable(array:any) {
    var table = document.createElement('table');
    table.setAttribute("border","1");
    table = this.addHeaderRow(table,array.length);
    table = this.addColumnRows(table,array);
    return table;
}

addHeaderRow(tableElement:any,arrayLength:any) {
        var row = document.createElement('tr');
        let firstCell = this.createFirstCell('td',"");
        row.appendChild(firstCell);
        for (var j = 0; j < arrayLength; j++) {
            var cell = document.createElement('th');
            cell.textContent = this.verticesText[j];
            row.appendChild(cell);
        }
        tableElement.appendChild(row);
        return tableElement;
}

addColumnRows(tableElement:any,array:any) {
    for (var i = 0; i < array.length; i++) {
        var row = document.createElement('tr');
        let firstCell = this.createFirstCell('th',this.verticesText[i]);
        row.appendChild(firstCell);
        for (var j = 0; j < array[i].length; j++) {
            var cell = document.createElement('td');
            cell.textContent = array[i][j];
            row.appendChild(cell);
        }
        tableElement.appendChild(row);
    }
    return tableElement;
}

createFirstCell(tagname:string,value:any) {
    let firstCell = document.createElement(tagname);
    firstCell.textContent = value;
    return firstCell;
}

shortestPath() {
    let fromValue = <HTMLInputElement>document.getElementById("fromPath");
    let toValue = <HTMLInputElement>document.getElementById("toPath");
    let dijkstra = new Dijkstra();
    let text = dijkstra.minDistance(this.verticesArr,fromValue!.value,toValue!.value);
    document.getElementById('shortestPathText')!.textContent = text;
}
}
