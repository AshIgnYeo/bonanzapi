const update = (elemId, content) => {
  const el = document.querySelector("#" + elemId);
  if (el) el.innerHTML = content;
};

/**
 * Populate the dashboard with the data it receives.
 * doesnt make the api call itself.
 *
 * @param {*} data The data to populate the dashboard with
 */
export const populateDashboard = (data) => {
  // populate our dashboard here!
};
