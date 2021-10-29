import React, { useEffect, useState } from "react";
import { Autocomplete, GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { InputSearch } from "../../styles/AppStyles";
import { MAP_API_KEY, LIBRARIES } from "../../config/constants";
import { mapStyles } from "../../config/mapStyles";

const containerStyle = {
  width: "100vw",
  height: "100vh",
};

function Map() {
  const [location, setLocation] = useState<GeolocationPosition>();
  const [center, setCenter] = useState({ lat: 0, lng: 0 });
  const [autocomplete, setAutocomplete] = useState<google.maps.places.Autocomplete>();
  const [, setMap] = React.useState<google.maps.Map | null>(null);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: MAP_API_KEY,
    libraries: LIBRARIES,
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation(position);
      });
    }
  }, []);
  useEffect(() => {
    if (location) {
      setCenter({ lat: location?.coords.latitude, lng: location?.coords.longitude });
    }
  }, [location]);

  const onLoad = React.useCallback(function callback(map: google.maps.Map) {
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);
  const handleClickMap = (event: google.maps.MapMouseEvent) => {
    const lat = event.latLng?.lat();
    const lng = event.latLng?.lng();
    lat && lng && setCenter({ lat, lng });
  };
  const onLoadAutoComplete = (autoComplete: google.maps.places.Autocomplete) => {
    setAutocomplete(autoComplete);
  };
  const onPlaceChanged = () => {
    if (autocomplete) {
      const place = autocomplete.getPlace();
      const lat = place.geometry?.location?.lat();
      const lng = place.geometry?.location?.lng();
      lat && lng && setCenter({ lat, lng });
    } else {
      console.log("Autocomplete is not loaded yet!");
    }
  };
  return isLoaded && location && center ? (
    <GoogleMap
      zoom={15}
      mapContainerStyle={containerStyle}
      center={center}
      onLoad={onLoad}
      onUnmount={onUnmount}
      onClick={handleClickMap}
      options={mapStyles}
    >
      <Marker position={center} />
      <Autocomplete onLoad={onLoadAutoComplete} onPlaceChanged={onPlaceChanged}>
        <InputSearch type="text" placeholder="Pesquisar Cidade" />
      </Autocomplete>
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(Map);
