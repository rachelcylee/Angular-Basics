import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TaskInterface } from '../task/task.model';
import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatCardContent } from "@angular/material/card";
import { MaterialModule } from "../../material/material-module";
import { MatLabel } from '@angular/material/form-field';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [MatCardContent, ReactiveFormsModule, MaterialModule, MatLabel],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  showMessage = false;
  submitted = false;

  todo: TaskInterface[] = [
    {
      title: "Buy milk",
      descripton: "Go to the store and buy milk",
      list: ""
    },
    {
      title: "Drawing on canvas",
      descripton: "Buy 3 canvas and pens!",
      list: ""
    }
  ];

  inProgress: TaskInterface[] = [];
  done: TaskInterface[] = [];

  addTaskForm = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(5)
    ]),
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(5)
    ]),
  });

  get title() { return this.addTaskForm.get('title')!; }
  get description() { return this.addTaskForm.get('description')!; }

  onSubmit(): void {
    this.submitted = false;
    if (this.addTaskForm.invalid) {
      return;
    }
  }

  drop(event: CdkDragDrop<TaskInterface[]>): void {
    if (event.previousContainer === event.container) {
      return;
    }
    if (!event.container.data || !event.previousContainer.data) {
      return;
    }
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
  }

  deleteIt(list: string, task: TaskInterface) {
    if (list == 'todo') {
      var index = this.todo.indexOf(task);
      this.todo.splice(index, 1);
    } else if (list == 'inProgress') {
      var index = this.inProgress.indexOf(task);
      this.inProgress.splice(index, 1);
    } else if (list == 'done') {
      var index = this.done.indexOf(task);
      this.done.splice(index, 1);
    }
  }
}
