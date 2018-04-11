import React from 'react';
import ReactDOM from 'react-dom';
import ListingsArray from './components/ListingsArray'
import { createStore, combineReducers } from 'redux';


const listingReducerDefaultState = ListingsArray.data;
let filteredListings;
let maxPrice, minBathrooms, minBedrooms;


const filterByMaxPrice = (payload = {}) => ({
    type: 'SORT_BY_MAX_PRICE',
    maxPrice: typeof payload.maxPrice === 'number' ? payload.maxPrice : 16000
});

const filterByMinBathrooms = (payload = {}) => ({
    type: 'SORT_BY_MIN_BATHROOM_COUNT',
    minBathrooms: typeof payload.minBathrooms === 'number' ? payload.minBathrooms : 2
});

const filterByMinBedRooms = (payload = {}) => ({
    type: 'SORT_BY_MIN_BEDROOM_COUNT',
    minBedrooms: typeof payload.minBedrooms === 'number' ? payload.minBedrooms : 3
});

const listingReducer = (state = listingReducerDefaultState, action) => {
    switch(action.type) {
        default: 
            return state;
    }
}

const filtersReducerDefaultState = {
    maxPrice: 'amount',
    minBathrooms: 'number',
    minBedrooms: 'number'
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type) {
        case 'SORT_BY_MAX_PRICE':
            return {
                ...state,
                maxPrice: action.maxPrice
            }
        case 'SORT_BY_MIN_BATHROOM_COUNT':
            return {
                ...state,
                minBathrooms: action.minBathrooms
            }
        case 'SORT_BY_MIN_BEDROOM_COUNT':
            return {
                ...state,
                minBedrooms: action.minBedrooms
            }
        default: 
            return state;
    }    
}

const getDesiredListings = (listings, filters) => {
    listings = listings.filter(listing => listing.price <= filters.maxPrice);
    listings = listings.filter(listing => listing.bathrooms >= filters.minBathrooms);
    listings = listings.filter(listing => listing.bedrooms >= filters.minBedrooms);

    return listings;
};

const store = createStore(
    combineReducers({
        data: listingReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    filteredListings = getDesiredListings(state.data, state.filters);
});

const onFormSubmit = (e) => {
    e.preventDefault();

    let userMaxPrice            = e.target.elements.maxPrice.value;
    let userMinBathrooms        = e.target.elements.minBathrooms.value;
    let userMinBedrooms         = e.target.elements.minBedrooms.value;

    let userMaxPriceInt         = parseInt(userMaxPrice);
    let userMinBathroomsInt     = parseInt(userMinBathrooms);
    let userMinBedroomsInt      = parseInt(userMinBedrooms);
    
    updateMaxPrice(userMaxPriceInt, userMinBathroomsInt, userMinBedroomsInt); 
    render();
};

const updateMaxPrice = (maxPrice, minBathrooms, minBedrooms) => {
    store.dispatch( filterByMaxPrice({ maxPrice: maxPrice }));
    store.dispatch( filterByMinBathrooms({ minBathrooms: minBathrooms })); 
    store.dispatch( filterByMinBedRooms({ minBedrooms: minBedrooms }));   
}

updateMaxPrice() // initialize default values onStart

const render = () => { 
    const template = (
        <div className="content"> 
            <form  class="formContainer" onSubmit={onFormSubmit}>
                <div>
                    <label for="maxPrice">Maximum Price: </label>
                    <input type="number" id="maxPrice" placeHolder="Enter Max Price" name="maxPrice" required/>
                </div>
                <div>
                    <label for="minBathrooms">Min Bathrooms: </label>
                    <input type="number" id="minBathrooms" placeHolder="Enter Min Amount" name="minBathrooms" required />
                </div>
                <div>
                    <label for="minBedrooms">Min Bedrooms: </label>
                    <input type="number" id="minBedrooms" placeHolder="Enter Min Amount" name="minBedrooms" required/>
                </div>
                <div>
                    <button>Update Listings</button>
                </div>
            </form>
            <div className="listingsContainer">
                {filteredListings.map((listing) => 
                    <div className="card">
                        <div className="imageContainer">
                            <img src={"/img/" + listing.image_id + ".jpg"} />
                        </div>
                        <h1>{listing.address}</h1>
                        <p class="bedrooms">{listing.bedrooms} beds, {listing.bathrooms} baths</p>
                        <span class="price"><b>${listing.price}</b></span>
                    </div>
                )}
             </div>
        </div>       
    )

    ReactDOM.render(template, document.getElementById('root'));
}

render();



