import { useEffect, useState } from "react";

export default function useGeoLocation(options?: PositionOptions) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<GeolocationPositionError | undefined>(undefined);
  const [data, setData] = useState<Partial<GeolocationCoordinates>>({});

  useEffect(() => {
    const successHandler = (e: GeolocationPosition) => {
      setLoading(false);
      setError(undefined);
      setData(e.coords);
    };

    const errorHandler = (e: GeolocationPositionError) => {
      setLoading(false);
      setError(e);
    };

    navigator.geolocation.getCurrentPosition(successHandler, errorHandler, options);

    const id = navigator.geolocation.watchPosition(successHandler, errorHandler, options);

    return () => navigator.geolocation.clearWatch(id);
  }, [options]);

  return { loading, error, data };
}
