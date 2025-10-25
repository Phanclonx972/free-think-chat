import { User, Sparkles } from "lucide-react";

interface ChatMessageProps {
  role: "user" | "assistant";
  content: string;
}

export const ChatMessage = ({ role, content }: ChatMessageProps) => {
  return (
    <div className={`flex gap-4 ${role === "user" ? "justify-end" : "justify-start"} animate-in fade-in slide-in-from-bottom-2 duration-500`}>
      {role === "assistant" && (
        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg" style={{ boxShadow: "var(--shadow-glow)" }}>
          <Sparkles className="h-5 w-5 text-primary-foreground" />
        </div>
      )}
      
      <div
        className={`max-w-[75%] rounded-2xl px-5 py-3 ${
          role === "user"
            ? "bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-lg"
            : "bg-card/50 backdrop-blur-sm border border-accent/30"
        }`}
      >
        <p className="whitespace-pre-wrap text-sm leading-relaxed">{content}</p>
      </div>

      {role === "user" && (
        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-secondary/80 flex items-center justify-center border border-accent/20">
          <User className="h-5 w-5 text-foreground" />
        </div>
      )}
    </div>
  );
};
