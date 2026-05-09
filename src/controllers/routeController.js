const axios = require("axios");
const turf = require("@turf/turf");
const Kitchen = require("../models/Kitchen");

exports.searchRoute = async (req, res) => {
  try {
    const {
      startLat,
      startLng,
      endLat,
      endLng
    } = req.body;

    const routeResponse = await axios.post(
      "https://api.openrouteservice.org/v2/directions/driving-car/geojson",
      {
        coordinates: [
          [startLng, startLat],
          [endLng, endLat]
        ]
      },
      {
        headers: {
          Authorization:
            process.env.ORS_API_KEY,
          "Content-Type":
            "application/json"
        }
      }
    );

    const routeCoordinates =
      routeResponse.data.features[0].geometry.coordinates;

    const routeLine =
      turf.lineString(routeCoordinates);

    const routeBuffer =
      turf.buffer(routeLine, 0.5, {
        units: "kilometers"
      });

    const kitchens =
  await Kitchen.find({
    location: {
      $geoWithin: {
        $geometry:
          routeBuffer.geometry
      }
    },
    isAvailable: true
  }).populate(
    "ownerId",
    "name phone"
  );

    res.json({
      routeCoordinates,
      kitchens
    });

  } catch (error) {
    console.log(error.response?.data || error.message);

    res.status(500).json({
      message: "Route search failed"
    });
  }
};