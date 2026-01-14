import Artwork from "../models/artworkModel.js";
import User from "../models/userModel.js";

// top artworks
const getTopArtworks = async (req, res, next) => {
    try {
        const topArtworks = await Artwork.find({ privacy: "public", totalScore: { $gt: 0 } })
            .sort({ totalScore: -1 }) // Rank by points instead of just count
            .limit(3)
            .populate("ownerID", "username profilePicture");

        const formattedArt = topArtworks.map(art => ({
            img: art.imageURL,
            totalScore: art.totalScore, // Showing points on the leaderboard
            author: art.ownerID?.username || "Anonymous"
        }));

        res.status(200).json(formattedArt);
    } catch (err) {
        res.status(500).json({ message: "Error fetching leaderboard" });
    }
};

//get users with most streaks
const getStreakLeaders =  async (req, res, next) =>{
    try {
        const topUsers = await User.find({ streakCount: { $gt: 0 } })
            .sort({ streakCount: -1 })
            .limit(5) 
            .select("username streakCount profilePicture")

        const formattedUsers = topUsers.map(user => ({
            name: user.username,
            score: user.streakCount,
            img: user.profilePicture,
        }));

        res.status(200).json(formattedUsers);
    } catch (error) {
        res.status(500).json({ message: "Error fetching streak leaderboard", error: error.message });
    }
};

export {
    getTopArtworks,
    getStreakLeaders
};
