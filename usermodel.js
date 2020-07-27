
// usermodel.js

var mongoose = require("mongoose");

var userSchema = mongoose.Schema(
  {
    // กำหนด ชื่อและชนิดของ document เรา
    name: {
      type: String
    },
    username: {
      type: String
    }
  },
  {
    // กำหนด collection ของ MongoDB หรือจะไม่กำหนดก็ได้
    collection: "USERs"
  }
);

// ถ้าไม่ได้กำหนด collection ข้างบน default จะเป็น "foods"
var User = mongoose.model("users", userSchema);
module.exports = User;