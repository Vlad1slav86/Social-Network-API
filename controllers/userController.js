const User = require('../models/User');
const Thought = require('../models/Thought');

const userController = {
  getAllUsers: async (req, res) => {
    try {
      const users = await User.find().populate('thoughts').populate('friends');
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  getUserById: async (req, res) => {
    try {
      const user = await User.findById(req.params.id).populate('thoughts').populate('friends');
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  createUser: async (req, res) => {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  updateUser: async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  deleteUser: async (req, res) => {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      if (user) {
        await Thought.deleteMany({ username: user.username });
        await User.updateMany({ friends: req.params.id }, { $pull: { friends: req.params.id } });
        res.json({ message: 'User and associated thoughts deleted successfully!' });
      } else {
        res.status(404).json({ message: 'User not found!' });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },

  addFriend: async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(
        req.params.userId,
        { $addToSet: { friends: req.params.friendId } },
        { new: true }
      );
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ message: 'User not found!' });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },

  removeFriend: async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(
        req.params.userId,
        { $pull: { friends: req.params.friendId } },
        { new: true }
      );
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ message: 'User not found!' });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = userController;
