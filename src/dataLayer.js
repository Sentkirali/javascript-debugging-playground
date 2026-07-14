export const dataLayer = [];

export function pushToDataLayer(eventPayload) {
  dataLayer.push(eventPayload);

  return dataLayer;
}

export function getDataLayer() {
  return dataLayer;
}

export function clearDataLayer() {
  dataLayer.length = 0;

  return dataLayer;
}