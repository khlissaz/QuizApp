import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule, TableModule, IconsModule, DropdownModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule, MatButtonToggleModule, MatProgressSpinnerModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatOptionModule, MAT_DIALOG_DEFAULT_OPTIONS, MatSidenavModule } from '@angular/material';
import { LoginComponent } from './components/User/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CategorieComponent } from './components/categorie/categorie.component';
import { AuthGuard } from './guards/auth.guard';
import { CreatQuestionComponent } from './components/Question/creat-question/creat-question.component';
import { AdminComponent } from './components/User/admin/admin.component';
import { ModalModule, WavesModule, InputsModule, ButtonsModule } from 'angular-bootstrap-md';
import { TooltipModule, PopoverModule } from 'angular-bootstrap-md'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule, MatRadioModule} from '@angular/material';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { CatListComponent } from './components/cat-list/cat-list.component';
import { RegistreComponent } from './components/User/registre/registre.component';
import { ListUsersComponent } from './components/User/list-users/list-users.component';
import { ListQuestionComponent } from './components/Question/list-question/list-question.component';
import { QuizItemComponent } from './components/QCM/quiz-item/quiz-item.component';
import { ListQCMComponent } from './components/QCM/list-qcm/list-qcm.component';
import { QCMFilterPipe } from './components/QCM/qcmfilter.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ResultComponent } from './components/QCM/result/result.component';
import { ListResultComponent } from './components/QCM/list-result/list-result.component';
import { FooterComponent } from './components/home/footer/footer.component';
import { ContentComponent } from './components/home/content/content.component';
import { HeaderComponent } from './components/home/header/header.component';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AngularMaterialModule } from './angular-material.module';
import { FileSelectDirective } from 'ng2-file-upload';
import { CreateQCMComponent } from './components/QCM/create-QCM/create-QCM.component';
import { ProfileComponent } from './components/User/profile/profile.component';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { fakeBackendProvider } from './helpers/fake-backend';
import {NgxPaginationModule} from 'ngx-pagination'; 

@NgModule({
  declarations: [
    FileSelectDirective,
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    RegistreComponent,
    ProfileComponent,
    CategorieComponent,
    CreatQuestionComponent,
   AdminComponent,
   ListUsersComponent,
   ListQCMComponent,
   ListQuestionComponent,
   QuizItemComponent,
   ResultComponent,
   CreateQCMComponent,
   CatListComponent,
   QCMFilterPipe,
   ListResultComponent,
   HeaderComponent, ContentComponent, FooterComponent,

  ],
  imports: [
    AngularMaterialModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatMenuModule,
    MatRadioModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MDBBootstrapModule.forRoot(),
    BrowserModule,
    ModalModule,
     WavesModule, 
     ButtonsModule ,
     MatTableModule,
     InputsModule,
    BrowserModule,
     BrowserAnimationsModule,
      MatSnackBarModule,
     Ng2SearchPipeModule ,
     TableModule , 
     IconsModule,
     DropdownModule ,
     TooltipModule, PopoverModule,
     MatFormFieldModule,
     MatInputModule, 
     FormsModule,
      ReactiveFormsModule,
      MatSelectModule,
      MatOptionModule,MatSidenavModule, NgxPaginationModule
  ],

  exports: [FormsModule , ReactiveFormsModule , MatDialogModule, MatFormFieldModule, 
    MatButtonModule, MatInputModule,MatSelectModule,MatOptionModule],
  entryComponents: [],
  providers: [AuthGuard, Validators ,{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}},
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    fakeBackendProvider
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
