///<reference types="Cypress"/>

function invalidLogin(cy){
    cy.request({
        method:'POST',
        url:'http://localhost:3000/api/login',
        headers:{
            'Content-Type':'application/json'
        },
        body:{
            "username":"tester01",
            "password":"invalidlogin"
        },

    }).then((resp=>{
        expect(status).to.eq(2401)
        cy.log(resp.body)
    }))

}

function validLogin(cy){
    const loginURL = 'http://localhost:3000/api/login'
    const credentials = {
        "username": "tester01",
        "password": "GteteqbQQgSr88SwNExUQv2ydb7xuf8c"
    }
    cy.request({
        method: 'POST',
        url: loginURL,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(credentials)

    }).then((resp => {
        expect(resp.status).to.eq(200)
        Cypress.env({ loginToken: resp.body })
        cy.log(resp.body)
    }))
}


module.exports=
{
    invalidLogin,
    validLogin
}