import { Component } from '@angular/core';
import { PROJECTS } from './projects.data';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  projects = PROJECTS;

  expandedProjects = new Set<string>();

  toggleExpand(title: string) {
    if (this.expandedProjects.has(title)) {
      this.expandedProjects.delete(title);
    } else {
      this.expandedProjects.add(title);
    }
  }

  isExpanded(title: string) {
    return this.expandedProjects.has(title);
  }
}
