import { Song } from "../models/song.model.js";

export const getAllSongs = async (req, res, next) => {
  try {
    const songs = await Song.find().sort({ createdAt: -1 });
    res.json({
      success: true,
      data: songs,
      message: "Get All Songs Successfully",
    });
  } catch (error) {
    console.log(`⛔ Error in getAllSongs controller ::${error}`);
    next(error);
  }
};

export const getFeaturedSongs = async (req, res, next) => {
  try {
    // [1] Get random 6 songs, the data will include: _id, title, artist, imageUrl, audioUrl (1 is show, 0 is hide for field)
    const songs = await Song.aggregate([
      {
        $sample: { size: 6 },
      },
      {
        $project: {
          _id: 1,
          title: 1,
          artist: 1,
          imageUrl: 1,
          audioUrl: 1,
        },
      },
    ]);

    res.json({
      success: true,
      data: songs,
      message: "Get Featured Songs Successfully",
    });
  } catch (error) {
    console.log(`⛔ Error in getFeaturedSongs controller ::${error}`);
    next(error);
  }
};

export const getMadeForYouSongs = async (req, res, next) => {
  try {
    // [1] Get random 4 songs, the data will include: _id, title, artist, imageUrl, audioUrl (1 is show, 0 is hide for field)
    const songs = await Song.aggregate([
      {
        $sample: { size: 4 },
      },
      {
        $project: {
          _id: 1,
          title: 1,
          artist: 1,
          imageUrl: 1,
          audioUrl: 1,
        },
      },
    ]);

    res.json({
      success: true,
      data: songs,
      message: "Get Made For You Songs Successfully",
    });
  } catch (error) {
    console.log(`⛔ Error in getMadeForYouSongs controller ::${error}`);
    next(error);
  }
};

export const getTrendingSongs = async (req, res, next) => {
  try {
    const songs = await Song.aggregate([
      {
        $sample: { size: 4 },
      },
      {
        $project: {
          _id: 1,
          title: 1,
          artist: 1,
          imageUrl: 1,
          audioUrl: 1,
        },
      },
    ]);

    res.json({
      success: true,
      data: songs,
      message: "Get Trending Songs Successfully",
    });
  } catch (error) {
    console.log(`⛔ Error in getTrendingSongs controller ::${error}`);
    next(error);
  }
};
