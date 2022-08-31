const { model, Schema } = require("mongoose");

const videoSchema = new Schema({
  title: String,
  src: String,
});

module.exports = model("Video", videoSchema);
