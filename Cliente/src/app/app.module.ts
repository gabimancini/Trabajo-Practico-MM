import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';

//Módulos
import { PagesModule } from './components/pages/pages.module';

//Services
import { ServiciosEmpresaService } from './services/servicios-empresa.service';

//Rutas
import { RoutingModule } from './routing/routing.module';
import { SharedComponentsModule } from './components/shared/components.module';

// import { ProgressComponent } from './components/pages/progress/progress.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RoutingModule,
    PagesModule,
    SharedComponentsModule
  ],
  providers: [ServiciosEmpresaService],
  bootstrap: [AppComponent],
})
export class AppModule {}
