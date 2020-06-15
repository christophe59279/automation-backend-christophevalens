///<reference types="Cypress"/>


function viewAllRooms(cy){
    cy.request({
        method: 'GET',
        url: 'http://localhost:3000/api/rooms',
        headers: {
            'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
            "Content-Type": "application/json"
        },
    }).then((resp => {
        cy.log(resp.body)//array with number of rooms
        expect(resp.status).to.eq(200)
        cy.log(resp.body[1])//second index in the array
        //each properties of the index[1]
        expect(resp.body[1].category).to.equal("double")
        expect(resp.body[1].floor).to.eq(1)
        expect(resp.body[1].number).to.eq(102)
        expect(resp.body[1].available).to.eq(true)
        expect(resp.body[1].price).to.eq(2000)
        expect(resp.body[1].features[0]).to.eq("balcony")
        expect(resp.body[1].features[1]).to.eq("sea_view")
        expect(resp.body[1].features[2]).to.eq("ensuite")
    }))
}


function createRoom(cy){
    cy.request({
        method: 'POST',
        url: 'http://localhost:3000/api/room/new',
        headers: {
            'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
            "Content-Type": "application/json"
        },
        body:{
            "features":["penthouse"],
            "category":"single",
            "available":false,
            "number":"103",
            "floor":"1",
            "price":"2500",
        }
    }).then((resp => {
        expect(resp.status).to.eq(200)
        cy.log(resp.body)
        let lastRoomId= (resp.body.id)
        expect(resp.body.category).to.equal("single")
        expect(resp.body.floor).to.eq(1)
        expect(resp.body.number).to.eq(103)
        expect(resp.body.available).to.eq(false)
        expect(resp.body.price).to.eq(2500)
        expect(resp.body.features[0]).to.eq("penthouse")
                        
    }))
}

function deleteroom(cy){
    const deleteURL='http://localhost:3000/api/room/'
    cy.request({
        method: 'POST',
        url: 'http://localhost:3000/api/room/new',
        headers: {
            'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
            "Content-Type": "application/json"
        },
        body:{
            "features":["penthouse"],
            "category":"single",
            "available":false,
            "number":"104",
            "floor":"1",
            "price":"3000",
        }
    }).then((resp => {
        expect(resp.status).to.eq(200)
        let lastRoomId= (resp.body.id)
        cy.log(resp.body.id)
        
        cy.request({
            method:'DELETE',
            url:deleteURL+lastRoomId,
            headers: {
                'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
                "Content-Type": "application/json"
            }
        }).then((resp=>{
            expect(resp.status).to.eq(200)
        }))
       
    }))


}



module.exports=
{
   viewAllRooms,
   createRoom,
   deleteroom
}