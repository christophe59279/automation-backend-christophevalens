///<reference types="Cypress"/>



function validLogout(cy){
    const logoutURL = 'http://localhost:3000/api/logout'
   
    cy.request({
        method: 'POST',
        url: logoutURL,
        headers: {
            "Content-Type": "application/json"
        },
     

    }).then((resp => {
        expect(resp.status).to.eq(200)
        Cypress.env({ loginToken: resp.body })
        cy.log(resp.body)
    }))
}


module.exports=
{
    
    validLogout
}