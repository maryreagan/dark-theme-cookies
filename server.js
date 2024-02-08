
const Express = require("express")
const cookieParser = require("cookie-parser")
const cors = require("cors")
const app = Express()

const PORT = 4000
app.use(Express.static(__dirname + "/public"))
app.use(cookieParser())
app.use(cors({credentials: true, origin: "http://localhost:4000/"}))
app.use(Express.json())
app.use(Express.urlencoded())


app.get("/light-mode", (req, res) => {
    try{
        res.cookie("theme", "light-mode", {
            sameSite: 'None', secure: true, path: "/", expires: new Date(Date.now() + 900000)
        })
        res.status(200).json({message: "light-mode cookie saved"})
    } catch(err){
        res.status(500).json({message: `${err}`}) 
    }
})

app.get("/dark-mode", (req, res) => {
    try{
        res.cookie("theme", "dark-mode", {sameSite: 'None', secure: true, path: "/", expires: new Date(Date.now() + 900000)})
        res.status(200).json({message: "dark-mode cookie saved"})
    } catch(err){
        console.log(err)
        res.status(500).json({message: `${err}`})
    }
})


app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
})
