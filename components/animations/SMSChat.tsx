'use client'

interface Message {
  text: string
  isBot: boolean
}

const messages: Message[] = [
  { text: "Hey John, saw your CDL application!", isBot: true },
  { text: "Yes, I'm interested in the position", isBot: false },
  { text: "Great! Do you have 2+ years experience?", isBot: true },
]

export default function SMSChat() {
  return (
    <div className="space-y-3 px-2">
      {messages.map((msg, i) => (
        <div
          key={i}
          className={`flex ${msg.isBot ? 'justify-end' : 'justify-start'}`}
        >
          <div
            className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm ${
              msg.isBot
                ? 'bg-accent text-void rounded-br-sm'
                : 'bg-white/10 text-white rounded-bl-sm'
            }`}
          >
            {msg.text}
          </div>
        </div>
      ))}

      {/* Typing indicator */}
      <div className="flex justify-start">
        <div className="flex gap-1 px-4 py-3">
          <span className="w-2 h-2 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: '0s' }} />
          <span className="w-2 h-2 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: '0.1s' }} />
          <span className="w-2 h-2 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: '0.2s' }} />
        </div>
      </div>
    </div>
  )
}
