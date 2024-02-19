import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessages = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    //SOCKET.IO FUNCTIONALITY WILL GO HERE

    // await conversation.save();
    // await newMessage.save();

    //or
    //this will run in parallel

    await Promise.all([conversation.save(), conversation.save()]);

    res.status(201).json(newMessage);
  } catch (error) {
    console.log("Error in sendMessage contoller: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getMessages = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const senderId = req.user._id;
    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] },
    }).populate("messages"); //NOT REFERENCE BUT ACTUAL MESSAGES

    res.status(200).json(conversation.messages);
  } catch (error) {
    console.log("Error in getMessages contoller: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
