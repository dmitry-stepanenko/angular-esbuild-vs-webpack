import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Lib0Module} from './app0/lib0/lib0/src/index'
import {Lib1Module} from './app0/lib1/lib1/src/index'
import {Lib2Module} from './app0/lib2/lib2/src/index'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Lib0Module,Lib1Module, Lib2Module],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ngapp';
}
