import { Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { BodyComponent } from './body/body.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AddProductComponent } from './addproduct/addproduct.component';

export const routes: Routes = [
    {
        path:"",
        component:BodyComponent
    },
    {
        path:'menu',
        component:MenuComponent
    },
    {
        path:'register',
        component:RegisterComponent
    },
    {
        path:'log-in',
        component:LoginComponent
    },

    {
        path:'contact',
        component:ContactusComponent

    },
    {
        path:'addproduct',
        component:AddProductComponent
    }
];

