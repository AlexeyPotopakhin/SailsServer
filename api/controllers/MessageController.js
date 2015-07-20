/**
 * MessageController
 *
 * @description :: Server-side logic for managing Messages
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  badRequest: badRequest,
  notFound: notFound,
  error: error
};

function badRequest(req, res) {
  return res.send(400, "Bad Request");
}

function notFound(req, res) {
  return res.send(404, "Not Found");
}

function error(req, res) {
  return res.view("error", { message: "Error custom view" });
}

