// tours 
let tickets = {
    "Las Vegas": 100,
    "Tokyo":100,
    "Brisbane":1,
    "Inglewood":0,
    "Auckland":100,
    "Dunedin":2
}


function checkIfSoldOut(){
  for(place in tickets){
    !tickets[place] && disableSoldOutButtons(place) 
  }
}

function disableSoldOutButtons(place){
    document.getElementById(place).setAttribute("disabled", true)
    document.getElementById(place).textContent = "Sold out"
}

function getTickets(place) {
 let noTickets = tickets[place] <= 0
 !noTickets && (tickets[place]= tickets[place] - 1)
 noTickets ?  swal('Oh no!',`You are outta luck!, there are no more tickets for ${place}`,'info') :  swal('Sold!',`You have tickets to the ${place} concert`,'success')
 checkIfSoldOut()
}

checkIfSoldOut()