import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  Autocomplete,
} from "@react-google-maps/api";
import { getCurrentCoordinates } from "../../utils/locationUtils";
import { useCallback, useEffect, useRef, useState } from "react";

const center = {
  lat: 17.686815,
  lng: 83.218483,
};

const Map = () => {
  const [map, setMap] = useState(null);
  const [coordinates, setCoordinates] = useState({
    lat: 59.955413,
    lng: 30.337844,
  });
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");

  const originRef = useRef();
  const destinationRef = useRef();

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_API_KEY,
    libraries: ["places"],
  });

  const onLoad = useCallback((map) => {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  const fetchCoordinates = async () => {
    try {
      const { latitude, longitude } = await getCurrentCoordinates();
      setCoordinates({
        lat: latitude,
        lng: longitude,
      });
    } catch (error) {
      console.error("Error fetching coordinates:", error.message);
    }
  };

  useEffect(() => {
    fetchCoordinates();
  }, []);

  const onClick = () => {
    console.log(originRef.current.value);
  };

  return (
    <div>
      <div className="mb-5 space-y-3">
        <Autocomplete>
          <input
            ref={originRef}
            className="w-full mt-1 border-2 rounded-lg p-2 outline-none"
          />
        </Autocomplete>

        <Autocomplete>
          <input
            ref={destinationRef}
            className="w-full mt-1 border-2 rounded-lg p-2 outline-none"
          />
        </Autocomplete>

        <button type="button" onClick={onClick}>
          get value
        </button>
      </div>
      <div className="relative w-full h-[500px] md:h-auto md:aspect-video overflow-hidden rounded-2xl">
        <div
          onClick={() => map && map.panTo(center)}
          className="absolute right-3 top-16 cursor-pointer z-10 bg-primary-500 text-white rounded-full p-2"
        >
          Center
        </div>
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={{
              width: "100%",
              height: "100%",
            }}
            center={center}
            zoom={1}
            onLoad={onLoad}
            onUnmount={onUnmount}
          >
            <Marker
              position={{
                lat: coordinates.lat,
                lng: coordinates.lng,
              }}
            />
          </GoogleMap>
        ) : (
          <div className="w-full h-full bg-neutral-100 flex items-center justify-center text-center">
            Loading map...
          </div>
        )}
      </div>
    </div>
  );
};

export default Map;
