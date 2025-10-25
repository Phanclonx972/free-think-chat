import { Bot, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatMessageProps {
  role: "user" | "assistant";
  content: string;
}

export const ChatMessage = ({ role, content }: ChatMessageProps) => {
  const isUser = role === "user";

  return (
    <div
      className={cn(
        "flex gap-3 p-4 rounded-lg animate-in fade-in slide-in-from-bottom-2 duration-500",
        isUser ? "bg-accent/10" : "bg-muted/50"
      )}
    >
      <div
        className={cn(
          "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg",
          isUser
            ? "bg-gradient-to-br from-primary to-accent"
            : "bg-gradient-to-br from-secondary to-muted"
        )}
      >
        {isUser ? (
          <User className="h-4 w-4 text-primary-foreground" />
        ) : (
          <Bot className="h-4 w-4 text-foreground" />
        )}
      </div>
      <div className="flex-1 space-y-2">
        <p className="text-sm font-medium text-foreground">
          {isUser ? "You" : "AI Assistant"}
        </p>
        <div className="text-sm text-foreground/90 whitespace-pre-wrap">
          {content}
        </div>
      </div>
    </div>
  );
};
