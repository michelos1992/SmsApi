import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './heroes/heroes.component';
<<<<<<< HEAD

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent }
=======
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent},
>>>>>>> 68d351b645b450a97a2af4e7239bdf3467bd2985
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
<<<<<<< HEAD
  exports: [RouterModule],
=======
  exports: [RouterModule]
>>>>>>> 68d351b645b450a97a2af4e7239bdf3467bd2985
})
export class AppRoutingModule { }

//fasdfa
