const db = require("./connectDB");

// CREATE TABLE IF NOT EXISTS public.message(
// 	message_id SERIAL PRIMARY KEY,
// 	receive_id int,
// 	post_id int,
// 	id_info int,
// 	type int,
// 	content varchar(100),
// 	message_status int,
// 	FOREIGN KEY (receive_id) REFERENCES public.user(user_id) ON DELETE CASCADE ON UPDATE CASCADE,
// 	FOREIGN KEY (post_id) REFERENCES public.user(user_id) ON DELETE CASCADE ON UPDATE CASCADE
// )

const messageInfo = {
  addMessage: async (message, post_id) => {
    const status = await db.none(
      "INSERT INTO public.message(receive_id, post_id, id_info, type, content, message_status) VALUES(${receive_id}, ${post_id}, ${id_info}, ${type}, ${content}, ${message_status})",
      {
        ...message,
        post_id,
        message_status: 1,
      }
    );
    return !status;
  },
  deleteMessage: async (messageId) => {
    const status = await db.none(
      "DELETE FROM public.message WHERE message_id = ${messageId}",
      {
        messageId,
      }
    );
    return !status;
  },
  updateMessageStatus: async (messageId, newStatus) => {
    const status = await db.none(
      "UPDATE public.message SET message_status = ${newStatus} WHERE message_id = ${messageId}",
      {
        messageId,
        newStatus,
      }
    );
    return !status;
  },
  getListMessage: async (userId) => {
    const listmessage = await db.manyOrNone(
      "SELECT * FROM public.message WHERE receive_id = ${userId}",
      {
        userId,
      }
    );
    return listmessage;
  },
  getMessage: async (message_id) => {
    const message = await db.oneOrNone(
      "SELECT * FROM public.message WHERE message_id = ${message_id}",
      {
        message_id,
      }
    );
    return message;
  },
  test: async () => {
    const listMessage = await db.query("SELECT * FROM public.message");
    return listMessage;
  },
};

module.exports = messageInfo;
