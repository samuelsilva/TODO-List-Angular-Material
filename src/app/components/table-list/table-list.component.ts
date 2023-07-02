import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

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
  public tasks = '';
  public dataSource: MatTableDataSource<DataTODOList>;
  public displayedColumns: string[] = ['Position', 'Task', 'Remove'];
  public list = ['task 1', 'task 2', 'task 3', 'task 4'];
  public selectedIndex: number = -1;

  constructor() {
    this.dataSource = new MatTableDataSource<DataTODOList>([
      { position: 1, textTasks: 'Kanban' },
      { position: 2, textTasks: 'Jujuba' },
      { position: 3, textTasks: 'Tarefa nova' },
      { position: 4, textTasks: 'Desenvolver A agro' },
    ]);
  }

  addTask() {
    const lastPosition = this.dataSource.data.length + 1;
    this.list.push(this.tasks);
    this.dataSource.data.push({ position: lastPosition, textTasks: this.tasks });
    console.log('position: '+ lastPosition + ' - ' + 'textTasks: ' + this.tasks);
    console.log(this.dataSource.data);
    this.updatePositions();
    this.dataSource._updateChangeSubscription();
    this.tasks = '';
  }

  removeTask(position: number) {
    this.dataSource.data.splice(position - 1, 1);
    this.updatePositions();
    this.dataSource._updateChangeSubscription();
  }

  editTask(index: number){
    this.selectedIndex = index;  
  }

  updateTask(item: string, index: number) {
    const selectedItem = this.dataSource.data[index];
    selectedItem.textTasks = item;
    
    /*this.list.push(this.tasks);
    this.tasks = item;
    this.dataSource.data.push({ position: lastPosition, textTasks: this.tasks });
    console.log('position: '+ lastPosition + ' - ' + 'textTasks: ' + this.tasks);
    console.log(this.dataSource.data);
    this.updatePositions();
    this.dataSource._updateChangeSubscription();
    this.tasks = '';*/
    this.updatePositions();
    this.dataSource._updateChangeSubscription();
    this.selectedIndex = -1;
  }

  drop(event: CdkDragDrop<DataTODOList[]>) {
    moveItemInArray(this.dataSource.data, event.previousIndex, event.currentIndex);
    this.updatePositions();
  }

  updatePositions() {
    const newData = this.dataSource.data.map((data, index) => ({
        ...data,
        position: index + 1,
      }));
      this.dataSource.data = newData;
    this.dataSource._updateChangeSubscription();
  }
}
