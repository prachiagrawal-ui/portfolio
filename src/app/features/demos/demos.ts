import { Component } from '@angular/core';
import { DEMOS } from './demos.data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-demos',
  imports: [RouterLink],
  standalone: true,
  templateUrl: './demos.html',
  styleUrl: './demos.scss',
})
export class Demos {
  demos = DEMOS;
}
