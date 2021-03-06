const connection = require("../db/connection");

exports.updateCommentById = (id, updatedInfo) => {
  return connection("comments")
    .returning("*")
    .where("comment_id", id)
    .update(updatedInfo)
    .then((updated) => {
      return updated;
    });
};

exports.updateCommentVotesById = (id, updatedInfo) => {
  const { inc_votes } = updatedInfo;

  return connection("comments")
    .returning("*")
    .where("comment_id", id)

    .increment("votes", inc_votes)

    .then((updated) => {
      return updated;
    });
};
exports.removeCommentById = (id) => {
  return connection("comments")
    .where("comment_id", id)
    .delete()
    .then((delItem) => {
      if (delItem === 0)
        return Promise.reject({ status: 404, msg: "no content" });
    });
};
