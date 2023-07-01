import { Injectable } from '@angular/core';

export interface CanComponentDeactivate
{
  canLeave: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuardService
{
  canDeactivate(component: CanComponentDeactivate)
  {
    if (component.canLeave == true)
    {
      return true; //user can leave the current route
    }
    else
    {
      return confirm("Do you want to discard changes?");
    }
  }
}