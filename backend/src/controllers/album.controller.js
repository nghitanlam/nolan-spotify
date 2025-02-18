import { Album } from "../models/album.model.js";

export const getAllAlbums = async (req, res, next) => {
  try {
    const albums = await Album.find();
    res.status(200).json({
      success: true,
      data: albums,
      message: "Get All Albums Successfully",
    });
  } catch (error) {
    console.log(`⛔ Error in getAllAlbums controller ::${error}`);
    next(error);
  }
};

export const getAlbumById = async (req, res, next) => {
  try {
    const { albumId } = req.params;

    const album = await Album.findById(albumId).populate("songs");

    if (!album) {
      return res
        .status(404)
        .json({ success: false, message: "Album not found" });
    }

    res.json({ success: true, data: album, message: "Get Album Successfully" });
  } catch (error) {
    console.log(`⛔ Error in getAlbumById controller ::${error}`);
    next(error);
  }
};
