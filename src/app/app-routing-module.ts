import {NgModule} from "@angular/core";
import {RouterModule,Routes} from "@angular/router";
import { MainpageComponent } from "./pages/mainpage/mainpage.component";
import { AboutUsComponent } from "./pages/about-us/about-us.component";
import { ContactUsComponent } from "./pages/contact-us/contact-us.component";
import { ServicesComponent } from "./pages/services/services.component";
import { HomeComponent } from "./pages/home/home.component";
import { MissionComponent } from "./components/mission/mission.component";
import { ExpertiseComponent } from "./components/expertise/expertise.component";
import { PartnershipComponent } from "./components/partnership/partnership.component";
import { MainpageslidingComponent } from "./pages/mainpagesliding/mainpagesliding.component";

const routes:Routes = [
    {path:'',  component : MainpageslidingComponent},
    {path:'https://rajanimadasu.github.io/prompt-sol',component : MainpageslidingComponent},
    {path:'main', component : MainpageComponent},
    {path:'mainsliding', component : MainpageslidingComponent},
    {path:'home', component : HomeComponent},
    {path:'about', component : AboutUsComponent},
    {path:'contact', component : ContactUsComponent},
    {path:'services', component : ServicesComponent},
    {path:'mission', component : MissionComponent},
    {path:'expertise', component : ExpertiseComponent},
    {path:'partnership', component : PartnershipComponent},
    {path: '**', component : MainpageslidingComponent}

]

@NgModule(
    {
        imports : [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    }
    
)
export class AppRoutingModule{

}
