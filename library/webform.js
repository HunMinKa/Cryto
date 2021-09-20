const model = require("./model").model;

webformController = (req, res) => {
	res.render("webform", model);
};

module.exports = webformController;
