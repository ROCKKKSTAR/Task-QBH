import { Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { TableComponent } from './components/table/table.component';

export const routes: Routes = [
    { path: 'form', component: FormComponent },
    { path: 'table', component: TableComponent },
];
