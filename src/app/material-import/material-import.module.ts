import {NgModule} from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatMenuModule, MatRadioModule} from '@angular/material';

@NgModule({
  imports: [MatButtonModule,
    MatRadioModule,
    MatInputModule,
    MatMenuModule,
    MatFormFieldModule,
    MatCheckboxModule],
  exports: [MatButtonModule,
    MatRadioModule,
    MatInputModule,
    MatMenuModule,
    MatFormFieldModule,
    MatCheckboxModule],
  declarations: []
})
export class MaterialImportModule {
}
