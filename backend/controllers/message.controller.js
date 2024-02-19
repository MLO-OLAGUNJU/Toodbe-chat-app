import Conversation from "../models/conversation.model.js";

export const messageRoutes = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const { senderId } = req.user._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = new Message({
      senderId: senderId,
      receiverId: receiverId,
      message: message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
      // conversation.save();
    }
    res.status(201).json(newMessage);
    // throw Error("Could not save the message to database");
  } catch (error) {
    console.log("Error in sendMessage contoller: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
