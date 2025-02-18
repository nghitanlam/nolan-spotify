import { Song } from "../models/song.model.js";
import { User } from "../models/user.model.js";
import { Album } from "../models/album.model.js";

export const getStats = async (req, res, next) => {
  try {
    const [totalSongs, totalAlbums, totalUsers, uniqueArtists] =
      await Promise.all([
        Song.countDocuments(),
        Album.countDocuments(),
        User.countDocuments(),

        Song.aggregate([
          {
            $unionWith: {
              coll: "albums",
              pipeline: [],
            },
          },
          {
            $group: {
              _id: "$artist",
            },
          },
          {
            $count: "count",
          },
        ]),
      ]);
    res.json({
      success: true,
      data: {
        totalUsers,
        totalAlbums,
        totalSongs,
        totalArtists: uniqueArtists[0]?.count || 0,
      },
      message: "Get Stats Successfully",
    });
  } catch (error) {
    console.log(`⛔ Error in getStats controller ::${error}`);
    next(error);
  }
};
