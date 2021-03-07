import { NgModule } from '@angular/core';
import { UfcAnalyticsSrviceSharedLibsModule } from './shared-libs.module';
import { AlertComponent } from './alert/alert.component';
import { AlertErrorComponent } from './alert/alert-error.component';
import { LoginModalComponent } from './login/login.component';
import { HasAnyAuthorityDirective } from './auth/has-any-authority.directive';

@NgModule({
  imports: [UfcAnalyticsSrviceSharedLibsModule],
  declarations: [AlertComponent, AlertErrorComponent, LoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [LoginModalComponent],
  exports: [UfcAnalyticsSrviceSharedLibsModule, AlertComponent, AlertErrorComponent, LoginModalComponent, HasAnyAuthorityDirective],
})
export class UfcAnalyticsSrviceSharedModule {}
