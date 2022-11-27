import { Component } from "@angular/core";

@Component({
    selector:'todo',
    templateUrl:'./todo.component.html',
    styleUrls:['./todo.component.css']
})
export class ToDoComponent{
    public categoryList:any=[ 
        {categoryid:1,categoryname:"giyim"},
        {categoryid:2,categoryname:"elektronik"},
        {categoryid:3,categoryname:"kozmetik"},
        {categoryid:4,categoryname:"aksesuar"},
        {categoryid:5,categoryname:"ayakkabı"},
        {categoryid:6,categoryname:"çanta"},
        
    
      ];
}