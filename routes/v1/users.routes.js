const express = require('express');
const usersController = require('../../controller/users.controller');


const router = express.Router();

router
    .route("/")
    /**
     * @api {get} /users all users
     * @apiDescription get all the users
     * @apiPermission admin
     * 
     * @apiHeader {string} Authorisation users access token
     * 
     * @apiParam {Number{-1}}    {page-1}   List page
     * @apiParam {Number{1-100}}}    {limit=10}   Users per page
     *
     * @apiSources {object[]}  all the users
     * 
     * @apiError (unauthorised 401)    Unauthorised     only authorised useres can access the data
     * @apiError (Forbidden 403)    Forbidden           only admin can access the data
     */

    .get(usersController.getAllUsers)
    /**
     * @api {get} /users all users
     * @apiDescription get all the users
     * @apiPermission admin
     * 
     * @apiHeader {string} Authorisation users access token
     * 
     * @apiParam {Number{-1}}    {page-1}   List page
     * @apiParam {Number{1-100}}}    {limit=10}   Users per page
     *
     * @apiSources {object[]}  all the tools
     * 
     * @apiError (unauthorised 401)    Unauthorised     only authorised useres can access the data
     * @apiError (Forbidden 403)    Forbidden           only admin can access the data
     */
    .post(usersController.saveAUser);

router.route("/:id").get(usersController.getUserDetail)

module.exports = router;