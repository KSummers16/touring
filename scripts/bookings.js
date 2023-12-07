import { getBands, getBookings, getVenues } from "./database.js";

const venues = getVenues()
const bands = getBands()
const bookings = getBookings()

//when a booking is clicked, it should show all of the properties of the band




// function to see what band is playing in a booking

const findBand = (booking, band) => {
    let bookingBand = null
    
    for (const band of bands) {
        if (band.id===booking.bandId){
            bookingBand = band
        }
    }
    return bookingBand
}


//function to see what venue the band is playing at in a booking


const findVenue = (booking, venue) => {
    let bookingVenue = null
    
    for (const venue of venues){
        if (venue.id === booking.venueId){
            bookingVenue = venue
        }
    }
    return bookingVenue
}



// function to list band, venue, and date from a booking

export const Bookings = () => {
    let bookingHTML = ""
    bookingHTML = "<ul>"


    for (const booking of bookings) {
        const bookBand = findBand(booking, bands)
        const bookVenue= findVenue(booking, venues)

        bookingHTML += `<li data-type="booking" data-id="${booking.bandId}">${bookBand.name} are playing at ${bookVenue.name} on ${new Date(booking.date).toDateString()}</li>`
        
    }

bookingHTML+= "</ul>"
        return  bookingHTML
    
}



document.addEventListener(
    "click",
    (clickThis) => {
        const clickTarget = clickThis.target
        if (clickTarget.dataset.type==="booking"){
            for (const bandBooked of bands){
                if (parseInt(clickTarget.dataset.id) === bandBooked.id){
                    window.alert(`${bandBooked.name}, ${bandBooked.genre}, ${bandBooked.members} members, ${bandBooked.yearFormed}`)
                }
            } 
        }
    }
)
