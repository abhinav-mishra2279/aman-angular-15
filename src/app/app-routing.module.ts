import { Routes } from "@angular/router";
import { CategoryListComponent } from "./feature/category/category-list/category-list.component";

export const routes: Routes = [
  {path: '', redirectTo: '/categories', pathMatch: 'full'},
  {path: 'categories', component: CategoryListComponent}
];
