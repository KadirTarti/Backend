"use strict";
/* -------------------------------------------------------
    AKT - BlogApi
------------------------------------------------------- */

const Like = require('../models/like.model');
const Blog = require('../models/blog.model');

exports.addLike = async (req, res) => {
  const { BlogId } = req.body;
  try {
    const existingLike = await Like.findOne({ userId: req.user.id, BlogId });
    if (existingLike) {
      return res.status(400).json({ message: 'Already liked' });
    }
    const newLike = new Like({ userId: req.user.id, BlogId });
    await newLike.save();
    await Blog.findByIdAndUpdate(BlogId, { $inc: { likesCount: 1 } });
    res.status(201).json(newLike);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.removeLike = async (req, res) => {
  const { BlogId } = req.params;
  try {
    const deletedLike = await Like.deleteOne({ userId: req.user.id, BlogId });
    if (!deletedLike.deletedCount) {
      return res.status(404).json({ message: 'Not found' });
    }
    await Blog.findByIdAndUpdate(BlogId, { $inc: { likesCount: -1 } });
    res.status(200).json({ message: 'Like removed' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};