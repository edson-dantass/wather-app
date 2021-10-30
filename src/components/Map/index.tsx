import React, { useEffect, useState } from "react";
import { Autocomplete, GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { InputSearch } from "../../styles/AppStyles";
import { LIBRARIES } from "../../config/constants";
import { mapStyles } from "../../styles/mapStyles";
import axios from "axios";
import { useWather } from "../../hooks/WatherHook";

function Map() {
  const [location, setLocation] = useState<GeolocationPosition>();
  const [center, setCenter] = useState({ lat: 0, lng: 0 });
  const [autocomplete, setAutocomplete] = useState<google.maps.places.Autocomplete>();
  const [, setMap] = React.useState<google.maps.Map | null>(null);
  const { setWather } = useWather();
  const [autoCompleteResult, setAutoCompleteResult] = useState({});
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: `${process.env.REACT_APP_GOOGLE_MAP_KEY}`,
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

  useEffect(() => {
    if (center.lat !== 0) {
      axios
        .get(`${process.env.REACT_APP_API_WATHER_URL}`, {
          params: {
            key: process.env.REACT_APP_WATHER_KEY,
            q: `${center.lat},${center.lng}`,
            days: 6,
            lang: "pt",
          },
        })
        .then((res) => {
          const { data } = res;
          setWather({
            isData: true,
            ...data,
          });
        });
    }
  }, [autoCompleteResult, center, setWather]);

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
      setAutoCompleteResult(place);
      lat && lng && setCenter({ lat, lng });
    } else {
      console.log("Autocomplete is not loaded yet!");
    }
  };
  return isLoaded && location && center ? (
    <GoogleMap
      zoom={15}
      mapContainerStyle={{
        width: "100vw",
        height: "100vh",
      }}
      center={center}
      onLoad={onLoad}
      onUnmount={onUnmount}
      onClick={handleClickMap}
      options={mapStyles}
    >
      <Marker position={center} />
      <Autocomplete onLoad={onLoadAutoComplete} onPlaceChanged={onPlaceChanged}>
        <InputSearch type="text" placeholder="Pesquisar" />
      </Autocomplete>
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(Map);
