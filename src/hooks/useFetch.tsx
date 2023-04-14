import { useEffect, useState } from 'react';

export enum RequestStatus {
  LOADING,
  SUCCESS,
  IDLE,
  ERROR,
}

export const useMock = true;
const url = process.env.NEXT_PUBLIC_API;

export const useFetch = (instanceName: string) => {
  const [requestStatus, setRequestStatus] = useState<RequestStatus>(
    RequestStatus.IDLE,
  );
  const [instance] = useState(instanceName);
  const [result, setResult] = useState(null);
  const [endPoint, setEndPoint] = useState<string>('');

  useEffect(() => {
    if (endPoint) {
      console.log(
        `useFetch${instance} > request useEffect > requesting to endPoint`,
        endPoint,
      );
      let wait = false;
      const controller = new AbortController();
      const signal = controller.signal;

      const fetchData = async () => {
        try {
          const requestUrl = `${url}${endPoint}`;
          console.log(
            `useFetch${instance} > request useEffect > url `,
            requestUrl,
          );
          const response = await fetch(requestUrl, {
            signal,
          });

          const jsonResult = await response.json();
          console.log(
            `useFetch${instance} > request useEffect > jsonResult`,
            jsonResult,
          );
          if (!wait) {
            setResult(jsonResult);
            console.log(
              `useFetch${instance} > request useEffect > request finished, result set!`,
            );
          }
        } catch (error) {
          if (!wait) {
            setRequestStatus(RequestStatus.ERROR);
          }
          console.log('MY ERROR:', error.message);
        }
      };
      if (!useMock) {
        fetchData();
      } else {
        setResult(endPoint);
        console.log(
          `useFetch${instance} > request useEffect > mocking request!`,
        );
      }
      return () => {
        wait = true;
        controller.abort();
      };
    }
  }, [endPoint, setEndPoint, instance]);

  return { result, setEndPoint, requestStatus, setRequestStatus };
};
