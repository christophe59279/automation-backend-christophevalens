///<reference types="Cypress"/>

import * as Login from "../helpers/Login/login"
import * as Logout from "../helpers/Login/logout"

describe('login tests', function(){
it('valid login', function(){

    Login.validLogin(cy)
   
})
it('valid logout',function(){
    Logout.validLogout(cy)
})

})