const messageInfo = require("../Model/messageInfo");

const messageController = {
  createMessage: async (req, res) => {
    const data = req.body;
    const postId = req.user.user_id;
    const message = {
      receive_id: data.received_id,
      id_info: data.id_info,
      type: data.type,
      content: data.content,
    };
    const status = await messageInfo.addMessage(message, postId);
    return res.send(status);
  },
  deleteMessage: async (req, res) => {
    const data = req.body;
    const status = await messageInfo.deleteMessage(data.message_id);
    return res.send(status);
  },
  updateMessageStatus: async (req, res) => {
    const data = req.body;
    const status = await messageInfo.updateMessageStatus(
      data.message_id,
      data.newStatus
    );
    const message = await messageInfo.getMessage(data.message_id);
    const { post_id, receive_id, id_info, type } = message;

    switch (type) {
      case 1: // invite into project
        if (data.newStatus === 1) {
          //agree
          const message = {
            receive_id: post_id,
            id_info: data.id_info,
            type: 11,
            content: "",
          };
          messageInfo.addMessage(message, receive_id);
        } else if (data.newStatus === 2) {
          const message = {
            receive_id: post_id,
            id_info: data.id_info,
            type: 12,
            content: "",
          };
          messageInfo.addMessage(message, receive_id);
        }
        break;
      case 2: // invite into mission
        if (data.newStatus === 1) {
          //agree
          const message = {
            receive_id: post_id,
            id_info: data.id_info,
            type: 21,
            content: "",
          };
          messageInfo.addMessage(message, receive_id);
        } else if (data.newStatus === 2) {
          const message = {
            receive_id: post_id,
            id_info: data.id_info,
            type: 22,
            content: "",
          };
          messageInfo.addMessage(message, receive_id);
        }
        break;
    }
    return res.send(status);
  },
  getListMessage: async (req, res) => {
    const userId = req.user.user_id;
    const listMessage = await messageInfo.getListMessage(userId);
    return res.send(listMessage);
  },
  test: async (req, res) => {
    const list = await messageInfo.test();
    return res.send(list);
  },
};
module.exports = messageController;
