import { getBands, getBookings, getVenues } from "./database.js";

const bands=getBands()
const bookings = getBookings()
const venues = getVenues()


//when a band is clicked, a window should show all of the venues the band plays at

document.addEventListener(
    "click",
    (clickOn) => {
        const clickTarget = clickOn.target
        let venueList= []
        if (clickTarget.dataset.type==="band"){
            for (const booking of bookings) {
                if (parseInt(clickTarget.dataset.id)===booking.bandId) {
                    for (const venue of venues) {
                        if (booking.venueId===venue.id){
                            venueList.push(venue.name)
                        }
                    }
                }
            }
            window.alert(`Samantha Ducarte has helped this band play at these venues: ${venueList}`)
        }
    }
)



export const Bands = () => {
    let bandsHTML = `<ul>`
    

for (const band of bands) {
    bandsHTML += `<li data-name:"${bands.name}" data-type="band" data-id="${band.id}" >${band.name}</li>`
}
    bandsHTML +=  "</ul>"
    
    return bandsHTML
    
}
    
    
   