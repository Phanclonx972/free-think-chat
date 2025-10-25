import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send, Sparkles } from "lucide-react";

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled: boolean;
}

export const ChatInput = ({ onSend, disabled }: ChatInputProps) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && !disabled) {
      onSend(input.trim());
      setInput("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 items-end">
      <div className="flex-1 relative">
        <Textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask Phanclon anything... (Shift + Enter for new line)"
          disabled={disabled}
          className="min-h-[80px] max-h-[200px] resize-none bg-card/50 backdrop-blur-sm border-accent/30 focus:border-primary/50 pr-12 transition-all"
        />
        <div className="absolute bottom-3 right-3 text-xs text-muted-foreground">
          {input.length > 0 && `${input.length} chars`}
        </div>
      </div>
      <Button
        type="submit"
        disabled={disabled || !input.trim()}
        className="h-[80px] px-8 bg-gradient-to-br from-primary to-accent hover:opacity-90 transition-opacity shadow-lg"
        style={{ boxShadow: "var(--shadow-glow)" }}
      >
        {disabled ? (
          <Sparkles className="h-5 w-5 animate-spin" />
        ) : (
          <Send className="h-5 w-5" />
        )}
      </Button>
    </form>
  );
};
