import { getVenues, getBands, getBookings } from "./database.js";

const venues = getVenues()
const bands = getBands()
const bookings = getBookings()


//when a venue is clicked, it should show all the bands that have been booked here

document.addEventListener(
    "click",
    (clickIt) => {
        const clickTarget = clickIt.target
        let bandList = []
        if (clickTarget.dataset.type==="venue"){
            for (const booking of bookings) {
                if (parseInt(clickTarget.dataset.id)===booking.venueId) {
                    for (const band of bands) {
                        if (booking.bandId===band.id){
                            bandList.push(band.name)
                        }
                    }
                }
            }
            window.alert(`The following bands have played here: ${bandList}`)
        }
    }
)


export const Venues = () => {
    let venueHTML = `<ul>`
    
    for (const venue of venues){
        venueHTML += `<li data-type="venue" data-id="${venue.id}" data-name="${venue.name}">${venue.name}</li>`
    }
    
      venueHTML += "</ul>"

      return venueHTML
}