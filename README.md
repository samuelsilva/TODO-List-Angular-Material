# TodoListAngularMaterial

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.6.

This is a TODO List Project using Angular Material (navigation, tables, etc). It's a simple project, just for fun and learning more about the Material library. The first commit is a basic and functional TODO list, in the sequence it will receive CDK usage, database access implementation, etc.


### Tip One: Generate a navigation with Angular Material

Run the command: 

```
ng generate @angular/material:navigation nav
```

### Tip Two: Try to use table from Angular Material and don't have automatic updates
The likely problem in your code is that you are trying to update the table directly by manipulating the dataSource array, but Angular Material's mat-table component does not update automatically when the data array is modified. You need to notify the table about the changes in order for it to update the display properly.

