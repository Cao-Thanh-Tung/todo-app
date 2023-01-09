const db = require("./connectDB");
const userInfo = {
  addAvatarDefault: (user) => {
    if (user) {
      if (!user.avatar) {
        user.avatar = "abcdef";
      }
    }
  },
  insertUser: async (user) => {
    await db.none(
      "INSERT INTO public.user(fullname, email, password) VALUES(${user.fullname}, ${user.email}, ${user.password})",
      {
        user: user,
      }
    );
  },
  updateUserInfo: async (userInfo) => {
    await db.none(
      "UPDATE  public.user SET fullname=${fullname}, email=${email}, password=${password}, avatar=${avatar} WHERE user_id = ${user_id}",
      {
        ...userInfo,
        avatar: userInfo?.avatar || null,
      }
    );
  },
  deleteUser: async (email) => {
    await db.none("DELETE FROM public.user WHERE email = ${email}", {
      email: email,
    });
  },

  findUserFromId: async (userId) => {
    const user = await db.oneOrNone(
      "SELECT * FROM public.user WHERE user_id = ${user_id}",
      {
        user_id: userId,
      }
    );
    return user;
  },

  findUserFromEmail: async (email) => {
    const user = await db.oneOrNone(
      "SELECT * FROM public.user WHERE email = ${email}",
      {
        email: email,
      }
    );
    return user;
  },

  getAllUser: async () => {
    const userList = await db.query("SELECT * FROM public.user");
    console.log(userList);
    return userList;
  },
};

module.exports = userInfo;
