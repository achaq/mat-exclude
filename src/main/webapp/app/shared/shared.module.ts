import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatexcludeSharedLibsModule, MatexcludeSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [MatexcludeSharedLibsModule, MatexcludeSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [MatexcludeSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MatexcludeSharedModule {
  static forRoot() {
    return {
      ngModule: MatexcludeSharedModule
    };
  }
}
