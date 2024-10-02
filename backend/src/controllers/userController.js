// src/controllers/userController.js
const userService = require('../services/userService');

const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await userService.createUser({ name, email, password });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const authenticateUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const { token, user } = await userService.authenticateUser(email, password);
    res.status(200).json({ token, user });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await userService.getUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await userService.deleteUser(id);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createUser,
  authenticateUser,
  getUsers,
  deleteUser,
};
