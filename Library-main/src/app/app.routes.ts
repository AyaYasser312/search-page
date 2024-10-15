import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: 'search', component: SearchComponent },  
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }