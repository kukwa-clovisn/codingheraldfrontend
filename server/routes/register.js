const express = require("express");

const registerController = require('../controllers/registerController')

const {
     check
} = require("express-validator");

const router = express.Router();



router.post('/',
     [
          check("username")
          .not()
          .isEmpty()
          .withMessage("username can not be empty or only numbers")
          .trim()
          .escape(),
          check("password")
          .isLength({
               min: 5,
          })
          .trim()
          .escape()
          .withMessage("password should contain at least 5 characters"),
          check("email").isEmail() /*.normalizeEmail(),*/
     ],
     registerController.post
);

module.exports = router;