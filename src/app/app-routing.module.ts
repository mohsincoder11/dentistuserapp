import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'category',
    loadChildren: () => import('./category/category.module').then( m => m.CategoryPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'creataccount',
    loadChildren: () => import('./creataccount/creataccount.module').then( m => m.CreataccountPageModule)
  },
  {
    path: 'forgot',
    loadChildren: () => import('./forgot/forgot.module').then( m => m.ForgotPageModule)
  },
  {
    path: 'doctordetails/:id',
    loadChildren: () => import('./doctordetails/doctordetails.module').then( m => m.DoctordetailsPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'schedule',
    loadChildren: () => import('./schedule/schedule.module').then( m => m.SchedulePageModule)
  },
  {
    path: 'footer',
    loadChildren: () => import('./footer/footer.module').then( m => m.FooterPageModule)
  },
  {
    path: 'otpconfirm/:number/:otp',
    loadChildren: () => import('./otpconfirm/otpconfirm.module').then( m => m.OtpconfirmPageModule)
  },
  {
    path: 'bookappointment',
    loadChildren: () => import('./bookappointment/bookappointment.module').then( m => m.BookappointmentPageModule)
  },
  {
    path: 'feedback',
    loadChildren: () => import('./feedback/feedback.module').then( m => m.FeedbackPageModule)
  },
  
  {
    path: 'verifymobile',
    loadChildren: () => import('./verifymobile/verifymobile.module').then( m => m.VerifymobilePageModule)
  },
  {
    path: 'managemember',
    loadChildren: () => import('./managemember/managemember.module').then( m => m.ManagememberPageModule)
  },
  {
    path: 'listmember',
    loadChildren: () => import('./listmember/listmember.module').then( m => m.ListmemberPageModule)
  },
  {
    path: 'doctorlist',
    loadChildren: () => import('./doctorlist/doctorlist.module').then( m => m.DoctorlistPageModule)
  },
  {
    path: 'confirmappointment',
    loadChildren: () => import('./confirmappointment/confirmappointment.module').then( m => m.ConfirmappointmentPageModule)
  },
  {
    path: 'selectuser',
    loadChildren: () => import('./components/selectuser/selectuser.module').then( m => m.SelectuserPageModule)
  },
  {
    path: 'edit-member/:id',
    loadChildren: () => import('./edit-member/edit-member.module').then( m => m.EditMemberPageModule)
  },
  {
    path: 'aboutus',
    loadChildren: () => import('./aboutus/aboutus.module').then( m => m.AboutusPageModule)
  },
  {
    path: 'doctor-from-hospital/:id/:hospital_name',
    loadChildren: () => import('./doctor-from-hospital/doctor-from-hospital.module').then( m => m.DoctorFromHospitalPageModule)
  },
  {
    path: 'privacy-policy',
    loadChildren: () => import('./privacy-policy/privacy-policy.module').then( m => m.PrivacyPolicyPageModule)
  },
  {
    path: 'resetpassword/:number',
    loadChildren: () => import('./resetpassword/resetpassword.module').then( m => m.ResetpasswordPageModule)
  },
 
  {
    path: 'ratedoctor',
    loadChildren: () => import('./components/ratedoctor/ratedoctor.module').then( m => m.RatedoctorPageModule)
  },
  {
    path: 'contactus',
    loadChildren: () => import('./contactus/contactus.module').then( m => m.ContactusPageModule)
  },
  {
    path: 'service-detail/:service_id',
    loadChildren: () => import('./service-detail/service-detail.module').then( m => m.ServiceDetailPageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
