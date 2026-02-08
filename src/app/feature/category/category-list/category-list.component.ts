import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {

  categories$ = this.service.getAll()

  constructor(private service: CategoryService){}

  handleDelete(id: string) {
    const result = confirm("Are you sure you want to delete this");
    if(result) {
      this.service.delete(id).subscribe(()=>{
        this.categories$ = this.service.getAll(); 

      
      })
    }
  }

}
