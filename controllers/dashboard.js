"use strict";

const logger = require("../utils/logger");

const accounts = require("accounts.js")
const stationStore = require("../models/station-store.js");

const dashboard = {
  index(request, response) {
    const loggedInUser = accounts.getCurrentUser(request);
    const viewData = {
      title: "Dashboard",
      stations: stationStore.getUserStations(loggedInUser.id)
    };
    logger.info("dashboard rendering",stationStore.getAllStations());
    response.render("dashboard", viewData);
  },
};


module.exports = dashboard;
