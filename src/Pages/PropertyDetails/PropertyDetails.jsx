import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const PropertyDetails = () => {
    const data = useLoaderData()
    const {id} = useParams();
    const selectedProperty = data.find(property => property.id === id)
console.log(selectedProperty)
    // console.log(data)
    const {estate_title,
        segment_name,
        description,
        price,
        status,
        area,
        location,
        facilities,
        image
    } = selectedProperty

    return (
        <div>
        </div>
    );
};

export default PropertyDetails;