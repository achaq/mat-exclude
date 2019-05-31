import { NgModule } from '@angular/core';

import { MatexcludeSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [MatexcludeSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [MatexcludeSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class MatexcludeSharedCommonModule {}
