import property from "../models/property.models.js";
// import upload from "../middlewares/upload.js";

const getProperties = async (req, res) => {
  try {
    const properties = await property.find();
    res.send(properties);
  } catch (error) {
    console.error("Error while fetching Properties:", error);
    res.status(500).send({ error: "Internal Server Error" });
  }
};

const getPropertyById = async (req, res) => {
  try {
    const { id } = req.params;

    const foundProperty = await property.findById(id);

    if (!foundProperty) {
      return res.status(404).send({ error: "Property not found" });
    }

    res.send(foundProperty);
  } catch (error) {
    console.error("Error while fetching Property:", error);
    res.status(500).send({ error: "Internal Server Error" });
  }
};

const createProperties = async (req, res) => {
  try {
    const { name, email, address, phone } = req.body;
    const { photos, videos } = req.files;

    const photoPaths = photos?.map((photo) => photo.path);
    const video = videos[0].path;

    const newProperty = await property.create({
      name,
      email,
      address,
      phone,
      images: photoPaths,
      videos: video,
    });

    res.status(201).send(newProperty);
  } catch (error) {
    console.error("Error while adding Property:", error);
    res.status(500).send({ error: "Internal Server Error" });
  }
};

const deleteProperties = async (req, res) => {
  try {
    const { id } = req.params;

    const deleteProp = await property.findOneAndDelete({ _id: id });

    if (!deleteTask) {
      return res.status(404).send({ error: "Property not found" });
    }

    res.send(deleteProp);
  } catch (error) {
    console.error("Error while deleting Property:", error);
    res.status(500).send({ error: "Internal Server Error" });
  }
};

export { getProperties, getPropertyById, createProperties, deleteProperties };
