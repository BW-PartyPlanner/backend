const router = require("express").Router();
const Images = require("./imagesModel");
const restricted = require("../../auth/restrictedMiddleware");

// @desc     Get all images
// @route    GET /api/images
// @access   Private
router.get("/", restricted, async (req, res) => {
  try {
    const images = await Images.find();
    res.status(200).json(images);
  } catch (error) {
    res
      .status(500)
      .json({ error, message: "Unable to get images, its not you.. its me" });
  }
});

// @desc     Get a image by ID
// @route    GET /api/images/:id
// @access   Private
router.get("/:id", restricted, async (req, res) => {
  try {
    const image = await Images.findById(req.params.id);
    if (image) {
      res.status(200).json(image);
    } else {
      res.status(404).json({ message: "That image cannot be found" });
    }
  } catch (error) {
    res.status(500).json({
      error,
      message: "Unable to find this image, its not you.. its me"
    });
  }
});

// @desc     Post an image
// @route    POST /api/image
// @access   Private
router.post("/", restricted, async (req, res) => {
  try {
    const image = await Images.insert(req.body);
    if (image) {
      res
        .status(201)
        .json({ image, message: "You have successfully added an image!" });
    } else {
      res.status(400).json({ message: "please include all required content" });
    }
  } catch (error) {
    res.status(500).json({
      error,
      message: "Unable to add this image, its not you.. its me"
    });
  }
});

// @desc     Edit an Image
// @route    PUT /api/images:id
// @access   Private
router.put("/:id", restricted, async (req, res) => {
  try {
    const image = await Images.update(req.params.id, req.body);
    if (image) {
      res.status(200).json({ message: "Info updated!" });
    } else {
      res.status(404).json({ message: "Image could not be found!" });
    }
  } catch (error) {
    res.status(500).json({
      error,
      message: "Unable to edit this image, its not you.. its me"
    });
  }
});

// @desc     Delete an Image
// @route    DELETE /api/images:id
// @access   Private
router.delete("/:id", restricted, async (req, res) => {
  try {
    const count = await Images.remove(req.params.id);
    if (count > 0) {
      res.status(200).json({ message: "Deleted!" });
    } else {
      res.status(404).json({ message: "Image unable to be deleted!" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error while deleting Image, its not you.. its me" });
  }
});

module.exports = router;
