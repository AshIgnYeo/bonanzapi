// Import functions from modules
import { fetchBonanzApi } from "./modules/api";
import { populateDashboard } from "./modules/dashboard";

/**
 * -----------------------------------------------------------------
 * Single API call
 * -----------------------------------------------------------------
 * 1. Do not change anything in this file!
 *
 * 2. Your fetchBonanzApi call should be able to pass data to the
 *    callback function populateDashboard.
 *
 * 3. populateDashboard should then be able to handle updating the
 *    dashboard with the information it receives.
 *
 * -----------------------------------------------------------------
 */
fetchBonanzApi().then(populateDashboard);
