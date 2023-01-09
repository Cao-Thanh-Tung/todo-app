const messageInfo = require("../Model/messageInfo");
const userAndMissionInfo = require("../Model/userAndMissionInfo");
const userAndProjectInfo = require("../Model/userAndProjectInfo");
const messageHandle = {
  insertUserIntoProject: async (post_id, receive_id, project_id) => {
    const isUserInProject = userAndMissionInfo.checkUserInMission(
      user_id,
      project_id
    );
    let success = false;
    if (isUserInProject) {
      success = userAndProjectInfo.addUserToProject(user_id, project_id);
    }
    // const message = {
    //   id_info: "",
    //   type: ,
    //   content: "",
    // };
    messageInfo.addMessage(message, user_id);
    return success;
  },
};

module.exports = messageHandle;
