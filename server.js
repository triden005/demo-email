const express = require("express"),
    morgan = require("morgan");

const { PORT, MODE } = require("./config");
const { transporter } = require("./transporter");

const app = express();
app.use(morgan("dev"));
app.use(express.json());

// routes
app.post("/", async (req, res) => {
    const { to, subject, email_body } = req.body;
    try {
        await transporter.sendMail({
            from: "gujgamini gupta",
            to,
            subject: subject || "Testing mail",
            text: email_body,
        });
        return res
            .status(200)
            .json({
                success: true,
                message: "Email sent successfully",
            })
            .end();
    } catch (e) {
        console.log(e.message, "at route POST /");
        return res
            .status(500)
            .json({ success: false, message: e.message })
            .end();
    }
});

// dead end
app.use((req, res) => {
    res.status(404).json({ message: "verb not supported" }).end();
});

app.listen(PORT, () => {
    console.log(`Server is running in ${MODE} at port ${PORT}`);
});
