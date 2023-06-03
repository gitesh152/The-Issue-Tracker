const mongoose = require("mongoose");

const issueSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    projectID: {
      type: String,
    },
    description: {
      type: String,
    },
    author: {
      type: String,
      required: true,
    },
    labels: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

const Issue = mongoose.model("Issue", issueSchema);

module.exports = Issue;
