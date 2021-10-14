import express from "express";
import mongoose from "mongoose";
import Memory from "../db/memoryModel.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const memories = await Memory.find();
    res.json(memories);
  } catch (e) {
    res.json({ message: "error" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.isValidObjectId(id))
      res.json({ message: "böyle bir id yok" });

    const validId = await Memory.findById(id);

    res.json(validId);
  } catch (error) {
    res.json({ message: "hata" });
  }
});

router.post("/", async (req, res) => {
  try {
    const reqBody = req.body;
    const createPost = await Memory.create(reqBody);
    res.json(createPost);
  } catch (error) {
    res.json({ message: "error not create post" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.isValidObjectId(id)) res.json({ message: "geçersiz id" });
    const { title, content, creator, image } = req.body;
    const updatePost = await Memory.findByIdAndUpdate(
      id,
      { title, content, creator, image, _id: id },
      { new: true }
    );
    res.status(200).json(updatePost);
  } catch (error) {
    res.json({ message: "hata" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.isValidObjectId(id)) res.json({ message: "geçersiz id" });

    const deletePost = await Memory.findByIdAndDelete(id);
    res.status(200).json({ message: "post silindi" });
    console.log("the post has been deleted");
  } catch (error) {
    res.json({ message: "hata" });
  }
});

export default router;
