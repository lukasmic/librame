import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImageLibraryComponent } from './image-library/image-library.component';

const routes: Routes = [
    { path: '', component: ImageLibraryComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
