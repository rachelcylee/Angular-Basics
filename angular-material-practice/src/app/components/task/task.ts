import { Component, input, output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { TaskInterface } from './task.model';
import { MatButtonModule } from "@angular/material/button";
import { MaterialModule } from "../../material/material-module";
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MaterialModule, MatIconModule],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  task = input<TaskInterface | null>(null);
  edit = output<TaskInterface>();
  delete = output<TaskInterface>();






}
