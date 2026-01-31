import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot } from "lucide-react";

// ၁။ Bot Data Configuration
const botData = [
  {
    keywords: ["hello", "hi", "hey", "မင်္ဂလာပါ"],
    reply: "Hello 👋 How can I help you?",
  },
  {
    keywords: ["service", "services", "ဘာတွေလုပ်လဲ"],
    reply:
      "We provide Web Development, UI/UX Design, POS System, and Custom Software in a systematic manner.💻",
  },
  {
    keywords: [
      "price",
      "cost",
      "ဈေး",
      "ဘယ်လောက်လဲ",
      "စျေး",
      "စျေးနှုန်း",
      "ဈေးနှုန်း",
    ],
    reply:
      "Prices may vary depending on the project 🙌 Please provide details via the contact form and we will provide a quotation.",
  },
  {
    keywords: ["contact", "email", "ဖုန်း", "address"],
    reply:
      "Please fill out the form in the Contact section, or send an email to team@onetechmm.com and we will get back to you within 24 hours.📩",
  },
  {
    keywords: ["thank", "thanks", "ကျေးဇူး"],
    reply:
      "That's right! Thank you for your interest in One Tech MM. If you have any other questions, please feel free to ask. ❤️",
  },
];

// ၂။ Logic Function
const getBotResponse = (userInput) => {
  const input = userInput.toLowerCase();
  const match = botData.find((item) =>
    item.keywords.some((keyword) => input.includes(keyword)),
  );

  return match
    ? match.reply
    : "Don't worry, I don't understand that. You can ask directly for details on the Contact Page. 🙏";
};

const SupportBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Welcome to One Tech MM! How can we assist you today?",
      sender: "bot",
    },
  ]);

  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { id: Date.now(), text: input, sender: "user" };
    setMessages((prev) => [...prev, userMsg]);
    const currentInput = input;
    setInput("");

    setIsTyping(true);

    setTimeout(() => {
      const replyText = getBotResponse(currentInput);
      const botMsg = { id: Date.now() + 1, text: replyText, sender: "bot" };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
              scale: 0.9,
              transformOrigin: "bottom right",
            }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="mb-4 w-87.5 sm:w-95 h-125 bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden backdrop-blur-lg bg-opacity-95"
          >
            {/* Header */}
            <div className="p-4 bg-brand-navy dark:bg-brand-gold flex justify-between items-center text-white dark:text-brand-navy shadow-md">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-sm">One Tech MM Assistant</h3>
                  <p className="text-[10px] opacity-80 text-green-300">
                    Online
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:rotate-90 transition-transform cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50 dark:bg-transparent"
            >
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl text-[13px] shadow-sm leading-relaxed ${
                      msg.sender === "user"
                        ? "bg-brand-navy dark:bg-brand-gold text-white dark:text-brand-navy rounded-tr-none"
                        : "bg-white dark:bg-gray-800 text-gray-800 dark:text-white border border-gray-100 dark:border-gray-700 rounded-tl-none"
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white dark:bg-gray-800 p-3 rounded-2xl rounded-tl-none flex gap-1 shadow-sm border border-gray-100 dark:border-gray-700">
                    <span className="w-1.5 h-1.5 bg-brand-gold rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-brand-gold rounded-full animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-1.5 h-1.5 bg-brand-gold rounded-full animate-bounce [animation-delay:0.4s]"></span>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 bg-white dark:bg-slate-900 border-t dark:border-gray-700 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask me something..."
                className="flex-1 bg-gray-100 dark:bg-gray-800 border-none rounded-full px-4 py-2 text-sm focus:ring-2 focus:ring-brand-gold outline-none dark:text-white"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className="p-2 bg-brand-navy dark:bg-brand-gold text-white dark:text-brand-navy rounded-full hover:scale-110 active:scale-95 transition-all cursor-pointer disabled:opacity-50 flex items-center justify-center"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-brand-navy dark:bg-brand-gold text-white dark:text-brand-navy rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.2)] cursor-pointer relative overflow-hidden"
      >
        <AnimatePresence initial={false} mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <X className="w-8 h-8" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <MessageSquare className="w-8 h-8" />
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </div>
  );
};

export default SupportBot;
