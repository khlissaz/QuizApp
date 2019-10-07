import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/User/login/login.component';
import { RegistreComponent } from './components/User/registre/registre.component';
import { CategorieComponent } from './components/categorie/categorie.component';
import { AuthGuard } from './guards/auth.guard';
import { CreatQuestionComponent } from './components/Question/creat-question/creat-question.component';
import { ListUsersComponent } from './components/User/list-users/list-users.component';
import { AdminComponent } from './components/User/admin/admin.component';
import { ListQuestionComponent } from './components/Question/list-question/list-question.component';
import { QuizItemComponent } from './components/QCM/quiz-item/quiz-item.component';
import {  CreateQCMComponent } from './components/QCM/create-QCM/create-QCM.component';
import { CatListComponent } from './components/cat-list/cat-list.component';
import { ListQCMComponent } from './components/QCM/list-qcm/list-qcm.component';
import { ResultComponent } from './components/QCM/result/result.component';
import { ListResultComponent } from './components/QCM/list-result/list-result.component';
import { ProfileComponent } from './components/User/profile/profile.component';


const routes:  Routes = [
  
  {path:'',component:HomeComponent},
  {path:'categorie',component:CategorieComponent,canActivate: [AuthGuard]},
  {path:'register',component:RegistreComponent },
  {path:'login',component:LoginComponent},
  {path:'profile',component:ProfileComponent,canActivate: [AuthGuard]},
  {path:'admin',component:AdminComponent,canActivate: [AuthGuard]} ,
  {path:'creatquestion',component:CreatQuestionComponent,canActivate: [AuthGuard]},
  {path:'listusers',component:ListUsersComponent,canActivate: [AuthGuard]},
  {path:'listquestions',component:ListQuestionComponent,canActivate: [AuthGuard]},
  {path:'listCatTest/:category',component:CatListComponent,canActivate: [AuthGuard]},
  { path: 'quizzes', component: ListQCMComponent,
    canActivate : [AuthGuard],
    children: [
      { path: ':id', component: QuizItemComponent,
        resolve: { },
      }
    ]
  },
  {path:'quizitem',component:QuizItemComponent,canActivate: [AuthGuard]},
  {path:'createTest',component:CreateQCMComponent,canActivate: [AuthGuard]},
  {path:'resultat',component:ResultComponent,canActivate: [AuthGuard]},
  {path:'listresults',component:ListResultComponent,canActivate: [AuthGuard]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
