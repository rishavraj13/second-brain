"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = require("./db");
const zod = __importStar(require("zod"));
const bcrypt = __importStar(require("bcrypt"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.post("/api/v1/signup", async (req, res) => {
    const requireBody = zod.object({
        username: zod.string().min(6).max(15),
        password: zod.string().min(7).max(20),
        email: zod.string().min(7).email(),
    });
    const parseDatawithSuccess = requireBody.safeParse(req.body);
    if (!parseDatawithSuccess.success) {
        return res.status(403).json({
            message: "Incorrect data format",
            error: parseDatawithSuccess.error,
        });
    }
    try {
        const { username, password, email, } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        await db_1.UserModel.create({
            username: username,
            password: String,
            email: String,
        });
        return res.status(200).json({
            message: "you have Signed Up Successfully"
        });
    }
    catch (error) {
        return res.status(200).json({
            message: "Error while Signing up!"
        });
    }
});
app.post("/api/v1/signin", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
});
app.post("/api/v1/content", (req, res) => {
});
app.get("/api/v1/signup", (req, res) => {
});
app.delete("/api/v1/signup", (req, res) => {
});
app.post("/api/v1/brain/share", (req, res) => {
});
app.get("/api/v1/brain/:shareLink", (req, res) => {
});
//# sourceMappingURL=index.js.map