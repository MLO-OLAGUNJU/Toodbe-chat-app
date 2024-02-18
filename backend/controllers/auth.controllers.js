import User from "../models/user.model.js";

export const signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({
        error: "Passwords do not match",
      });
    }

    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({
        error: "Username already exists",
      });
    }

    //HASH PASSWORD HERE
    //https://avatar-placeholder.iran.liara.run/

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = new User({
      fullName,
      username,
      password,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });

    await newUser.save();
  } catch (error) {}
};
export const login = (req, res) => {
  console.log("loginUser");
};
export const logout = (req, res) => {
  console.log("logoutUser");
};
