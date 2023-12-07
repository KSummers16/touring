const database = {
bands: [
    {id: 1, name: 'The Beatles', members: 4, genre: 'Rock', yearFormed: 1960},
    {id: 2, name: 'Led Zeppelin', members: 4, genre: 'Rock', yearFormed: 1968},
    {id: 3, name: 'Nirvana', members: 3, genre: 'Grunge', yearFormed: 1987},
    {id: 4, name: 'Metallica', members: 4, genre: 'Heavy Metal', yearFormed: 1981},
    {id: 5, name: 'Queen', members:  4, genre: 'Rock', yearFormed: 1970},
    {id: 6, name: 'The Rolling Stones', members: 5, genre: 'Rock', yearFormed: 1962},
    {id: 7, name: 'Pink Floyd', members: 5, genre: 'Progressive Rock', yearFormed: 1965},
    {id: 8, name: 'AC/DC', members: 4, genre: 'Hard Rock', yearFormed: 1973},
    {id: 9, name: 'Red Hot Chili Peppers', members:  4, genre: 'Funk Rock', yearFormed: 1983},
    {id: 10, name: 'Coldplay', members: 4, genre: 'Alternative Rock', yearFormed: 1996}
    ],
venues: [
    {id: 1, name: 'Local Club', address: '123 Main St, Anytown, USA', footage: 2000, occupancy: 150},
    {id: 2, name: 'Intimate Theater', address: '456 Broadway, Smallville, USA', footage: 5000, occupancy: 300},
    {id: 3, name: 'Community Center', address: '789 Oak Lane, Village Town, USA', footage: 3000, occupancy: 200},
    {id: 4, name: 'City Hall Auditorium', address: '101 Center Street, Metropolis, USA', footage: 4000,occupancy: 250},
    {id: 5, name: 'Outdoor Park Pavilion', address: 'Park Avenue, Sunnydale, USA', footage: 6000, occupancy: 400}
],
bookings: [
    {id: 1, bandId: 1, venueId: 1,  date: '2024-03-07'},
    {id: 2, bandId: 2, venueId: 3,  date: '2024-02-22'},  
    {id: 3, bandId: 1, venueId: 2,  date: '2024-04-05'}, 
    {id: 4, bandId: 4, venueId: 5,  date: '2024-01-20'},  
    {id: 5, bandId: 5, venueId: 4, date: '2024-05-10'},  
    {id: 6, bandId: 6, venueId: 1,  date: '2024-03-15'},  
    {id: 7, bandId: 7, venueId: 2,  date: '2024-03-07'},  
    {id: 8, bandId: 8, venueId: 5, date: '2024-02-22'}, 
    {id: 9, bandId: 9, venueId: 3,  date: '2024-04-05'}, 
    {id: 10, bandId: 10, venueId: 3,  date: '2024-01-08'},
    {id: 11, bandId: 1, venueId:  4,  date: '2024-01-20'},   
    {id: 12, bandId: 2, venueId: 5, date: '2024-03-20'},   
    {id: 13, bandId: 3, venueId: 1,  date: '2024-04-10'},  
    {id: 14, bandId: 4, venueId: 2,  date: '2024-05-10'},    
    {id: 15, bandId: 5, venueId: 3, date: '2024-03-15'},  
    {id: 16, bandId: 6, venueId: 4,  date: '2024-01-08'},   
    {id: 17, bandId: 7, venueId: 5,  date: '2024-02-14'}   
]
}

export const getBands = () => {
    return database.bands.map(bands=>({...bands}))
}

export const getVenues = () => {
    return database.venues.map(venues=>({...venues}))
}

export const getBookings = () => {
    return database.bookings.map(bookings=>({...bookings}))
}