import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoxselectionComponent } from './boxselection/boxselection.component';
import { HomeComponent } from './components/home.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'boxSelection', component:BoxselectionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
