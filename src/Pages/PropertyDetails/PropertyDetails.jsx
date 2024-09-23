import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { FaArrowRight, FaBath, FaBed, FaChartArea, FaPhoneAlt } from "react-icons/fa";
import { FaKitchenSet, FaLocationDot } from "react-icons/fa6";
import { GiFlowerPot } from "react-icons/gi";
import { Link } from "react-router-dom";
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import './Property.css'
const PropertyDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();
    const selectedProperty = data.find((property) => property.id === id);
    console.log(selectedProperty);
    // console.log(data)
    const {
        estate_title,
        segment_name,
        description,
        price,
        status,
        area,
        location,
        facilities,
        image,
        contacts,
    } = selectedProperty;

    return (
        <div className="popin-font mx-auto w-[80vw]">
            <div className="my-10">
                <div className="flex justify-center items-center">
                    <img
                        className="w-[70vw]  h-3/4 rounded-lg shadow-slate-800 shadow-lg"
                        src={image}
                        alt={estate_title}
                    />
                </div>
                <div className="mt-8 flex justify-between mx-8 ">
                    <span className="bg-yellow-500 px-5  py-1 rounded-lg font-medium">For {status}</span>
                    <span className="mr-8 bg-gray-400 px-5 py-1 rounded-lg font-medium">{price}</span>
                </div>
                <h1 className="text-2xl md:text-3xl font-bold mt-6 ml-8">#{estate_title}</h1>
                <p className="mt-3 ml-8 md:w-[60vw]">{description}</p>
            </div>

            <h3 className="mx-8  font-medium  text-lg my-3
            ">Facilities of this property :</h3>
            <hr className="mx-8" />
            <div className="bg-slate-100 p-8 rounded-3xl  mx-8 grid grid-cols-2 lg:grid-cols-3 gap-5 mb-10 mt-3">
                <div className="flex text-gray-600 ">
                    <FaBed className="mr-2  w-10 h-10"></FaBed>
                    <h3 className="text-2xl">{facilities[0].name} : {facilities[0].count}</h3>
                    {/* <div className="flex text-3xl">
            <FaBed className="mr-2  w-10 h-10"></FaBed>
            {facilities[0].count}
          </div> */}
                </div>

                <div className="flex  text-gray-600  ">
                    <FaBath className="mr-2  w-8 h-8"></FaBath>
                    <h3 className="text-2xl">{facilities[1].name} : {facilities[1].count}</h3>

                </div>
                <div className="flex text-gray-600  ">
                    <FaKitchenSet className="mr-2  w-8 h-8"></FaKitchenSet>
                    <h3 className="text-2xl">{facilities[2].name} :{facilities[2].count}</h3>

                </div>
                <div className="flex  text-gray-600  ">
                    <GiFlowerPot className="mr-2  w-8 h-8"></GiFlowerPot>
                    <h3 className="text-2xl">{facilities[3].name} : {facilities[3].count}</h3>

                </div>
                <div className="flex  text-gray-600  ">
                    <FaChartArea className="mr-2  w-8 h-8"></FaChartArea>
                    <h3 className="text-2xl">Area : {area}</h3>
                </div>
            </div>

            <div className="mb-10">
                <h3 className="mx-8 text-xl font-bold mb-2">Address :</h3>
                <hr className="mx-8" />
                {/* react leaflet  */}

                <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[51.505, -0.09]}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>

            </div>
            {/* contact us  */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
                <h3 className="mx-8 text-xl font-bold mb-2">Contact us : </h3>
                <hr className="mx-8 mb-3" />

                <div className="card bg-base-100 w-96 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title "><FaLocationDot className="w-8 h-8 text-red-700"></FaLocationDot></h2>
                        <h2 className="card-title">C{contacts[0].address}</h2>

                        <div className="card-actions flex justify-start">
                            <FaPhoneAlt className="mt-1"></FaPhoneAlt>: {contacts[0].phone}
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-xl">
                    <div className="card-body">
                    <h2 className="card-title"><FaLocationDot className="w-8 h-8 text-red-700"></FaLocationDot></h2>
                        <h2 className="card-title">C{contacts[1].address}</h2>

                        <div className="card-actions flex justify-start">
                        <FaPhoneAlt className="mt-1"></FaPhoneAlt>:  {contacts[1].phone}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PropertyDetails;
