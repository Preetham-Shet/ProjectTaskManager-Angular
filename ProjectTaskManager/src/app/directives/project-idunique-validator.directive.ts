import { Directive } from '@angular/core';
import { AbstractControl, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { ProjectsService } from './../services/projects.service';
import { Observable, map } from 'rxjs';
import { Project } from './../models/project';

@Directive({
  selector: '[appProjectIDUniqueValidator]',
  providers: [ { provide: NG_ASYNC_VALIDATORS, useExisting: ProjectIDUniqueValidatorDirective, multi: true }]
})
export class ProjectIDUniqueValidatorDirective {

  constructor(private projectsService: ProjectsService) { }

  validate(control: AbstractControl) : Observable<ValidationErrors | null>
  {
    return this.projectsService.getProjectByProjectID(control.value).pipe(map( (existingProject: Project) => {
      if (existingProject != null)
      {
        return { uniqueProjectID: { valid: false }};
      }
      else
      {
        return null;
      }
    }));
  }
}
