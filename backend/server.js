import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Conectar a MongoDB
mongoose.connect("mongodb://localhost:27017/registrosDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("Conectado a MongoDB"))
.catch(err => console.log(err));

// Modelo de usuario
const UserSchema = new mongoose.Schema({
    nombreyapellido: String,
    usuario: String,
    correo: String,
    contraseña: String
});

const User = mongoose.model("User", UserSchema);

// Ruta para registrar usuario
app.post("/registro", async (req, res) => {
    try {
        const { nombreyapellido, usuario, correo, contraseña } = req.body;
        const hashedPassword = bcrypt.hashSync(contraseña, 10);
        const newUser = new User({ nombreyapellido, usuario, correo, contraseña: hashedPassword });
        await newUser.save();
        res.status(201).json({ message: "Usuario registrado con éxito" });
    } catch (error) {
        res.status(500).json({ message: "Error al registrar usuario" });
    }
});

// Ruta para iniciar sesión
app.post("/login", async (req, res) => {
    const { usuario, contraseña } = req.body;
    const user = await User.findOne({ usuario });
    if (user) {
        const isMatch = bcrypt.compareSync(contraseña, user.contraseña);
        if (isMatch) {
            const token = jwt.sign({ id: user._id }, "secret_key", { expiresIn: "1h" });
            res.json({ message: "Autenticación exitosa", token });
            
        } else {
            res.status(401).json({ message: "Contraseña incorrecta" });
        }
    } else {
        res.status(401).json({ message: "Usuario no encontrado" });
    }
});

// Iniciar servidor
app.listen(5000, () => {
    console.log("Servidor corriendo en http://localhost:5000");
});


