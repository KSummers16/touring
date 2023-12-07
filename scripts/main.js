import { Bands } from "./bands.js";
import { Venues } from "./venues.js";
import { Bookings } from "./bookings.js";

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1>Tour Some Sugar</h1>

<article class="bookings">
    <h2>Current Bookings</h2>
    ${Bookings()}
</article>



<article class="details">
    
<section class="details__venues">
    <h2>Venues</h2>
    ${Venues()}
    </section>


<section class="details__bands">
        <h2>Bands</h2>
        ${Bands()}
    </section>

</article>
`

mainContainer.innerHTML = applicationHTML

