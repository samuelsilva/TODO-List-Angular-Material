import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TableListComponent } from "./components/table-list/table-list.component";

const routes: Routes = [
    { path: 'Tabela', component: TableListComponent },
    { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}