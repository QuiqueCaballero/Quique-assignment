import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReaderComponent } from 'src/components/reader.component';

const routes: Routes = [

	{path: '', component: ReaderComponent},
	{path: '**', component: ReaderComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
