import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StopwatchComponent } from './stopwatch/stopwatch.component';


const routes: Routes = [
  { path: 'stopwatch', component: StopwatchComponent },
  { path: 'stopwatch', redirectTo:'stopwatch' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
