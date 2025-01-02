"use strict";
// File: index.tsx
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
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const framer_motion_1 = require("framer-motion");
const button_1 = require("@/components/ui/button");
const lucide_react_1 = require("lucide-react");
const messages_1 = require("./messages");
const App = () => {
    const [currentMessage, setCurrentMessage] = (0, react_1.useState)(messages_1.messages[0]);
    const generateNewMessage = () => {
        const newMessage = messages_1.messages[Math.floor(Math.random() * messages_1.messages.length)];
        setCurrentMessage(newMessage);
    };
    return (react_1.default.createElement("div", { className: "min-h-screen bg-gradient-to-b from-blue-500 to-purple-600 flex flex-col items-center justify-center p-4" },
        react_1.default.createElement(framer_motion_1.motion.div, { initial: { opacity: 0, y: -50 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 }, className: "bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full text-center" },
            react_1.default.createElement("h1", { className: "text-3xl font-bold mb-4 text-blue-600" }, "Happy New Year from CloudFix!"),
            react_1.default.createElement(framer_motion_1.motion.p, { key: currentMessage, initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.3 }, className: "text-xl mb-6 text-gray-700" }, currentMessage),
            react_1.default.createElement(button_1.Button, { onClick: generateNewMessage, className: "bg-blue-500 hover:bg-blue-600" },
                react_1.default.createElement(lucide_react_1.Sparkles, { className: "mr-2 h-4 w-4" }),
                " Generate New Message"))));
};
exports.default = App;
