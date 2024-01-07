const homeHandler = (req, res) => {
    try {
        res.status(200).send("Welcome baby");
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
};

const regHandler = (req, res) => {
    try {
        res.status(200).send("Welcome register");
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
};
module.exports = { homeHandler, regHandler };
