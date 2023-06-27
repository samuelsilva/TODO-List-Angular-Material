import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface DataTODOList {
  position: number;
  textTasks: string;  
}

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css'],
})


export class TableListComponent {

  public tasks = "";
  public list = ['task 1', 'task 2', 'task 3'];
  public dataSource: MatTableDataSource<DataTODOList>;


  addTask() {
    const lastPosition = this.dataSource.data.length + 1;
    this.list.push(this.tasks);
    this.dataSource.data.push({position: lastPosition,textTasks:this.tasks});
    
    this.updatePositions();    
    this.dataSource._updateChangeSubscription(); // update the table
    
    console.log('position: '+ lastPosition + ' - ' + 'textTasks: ' + this.tasks);

  }

  updatePositions() {
    const newData = this.dataSource.data.map((data, index) => ({
      ...data,
      position: index + 1,
    }));
    this.dataSource.data = newData;
    //this.dataSource._updateChangeSubscription();
  }

  removeTask(position: any) {
    // this will remove the task from the list
    // indexOf get the position of the item in array list
    this.dataSource.data.splice(position, 1);
    this.updatePositions();
    this.dataSource._updateChangeSubscription(); // update the table
  }

  displayedColumns: string[] = ['Position', 'Task', 'Remove'];

  constructor() {
    this.dataSource = new MatTableDataSource<DataTODOList>([
      {position: 1, textTasks: 'Task 1'},
      {position: 2, textTasks: 'Task 2'},
      {position: 3, textTasks: 'Task 3'},
      {position: 4, textTasks: 'Task 4'},
    ]);
  }  
}
