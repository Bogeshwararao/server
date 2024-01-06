const home = (req, res) => {
    try {
        res.status(200).send("Welcome baby");
    } catch (error) {
        // Handle the error
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
};

const reg = (req, res) => {
    try {
        res.status(200).send("Welcome register");
    } catch (error) {
        // Handle the error
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
};

module.exports = { home, reg };
