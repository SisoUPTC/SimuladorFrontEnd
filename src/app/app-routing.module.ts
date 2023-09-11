import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './pages/menu/menu.component';
import { WelcomeComponent } from './componets/welcome/welcome.component';

const routes: Routes = [
  { path: '', redirectTo: 'menu/welcome', pathMatch: 'full' },
  {
    path: 'menu',
    component: MenuComponent,
    children: [{ path: 'welcome', component: WelcomeComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
