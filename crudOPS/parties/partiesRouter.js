const router = require("express").Router();

const Parties = require("./partiesModel");
const restricted = require("../../auth/restrictedMiddleware");

// @desc     Get all Parties
// @route    GET /api/parties
// @access   Private
router.get("/", restricted, (req, res) => {
  Parties.find()
    .then(parties => {
      res.status(200).json(parties);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json(error);
    });
});

// @desc     Get single Party
// @route    GET /api/parties:id
// @access   Private
router.get("/:id", restricted, (req, res) => {
  Parties.findById(req.params.id)
    .then(party => {
      if (party) {
        res.status(200).json(party);
      } else {
        res.status(404).json({ message: "Party cannot be found" });
      }
    })
    .catch(error => {
      console.log(error);
      res.status(500).json(error);
    });
});

// @desc     Post a Party
// @route    POST /api/parties
// @access   Private
router.post("/", restricted, (req, res) => {
  Parties.add(req.body, "id")
    .then(party => {
      if (party) {
        res.status(201).json(party);
      } else {
        res.status(422).json({ message: "Incomplete information" });
      }
    })
    .catch(error => {
      console.log(error);
      res.status(500).json(error);
    });
});

// @desc     Edit a  Party
// @route    PUT /api/parties:id
// @access   Private
router.put("/:id", restricted, async (req, res) => {
  try {
    const party = await Parties.update(req.params.id, req.body);
    if (party) {
      res.status(200).json({ message: "Info updated!" });
    } else {
      res.status(404).json({ message: "Party could not be found!" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

// @desc     Delete a Party
// @route    DELETE /api/parties:id
// @access   Private
router.delete("/:id", restricted, async (req, res) => {
  try {
    const count = await Parties.remove(req.params.id);
    if (count > 0) {
      res.status(200).json({ message: "Deleted!" });
    } else {
      res.status(404).json({ message: "Party unable to be deleted!" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error while deleting party!" });
  }
});

module.exports = router;
