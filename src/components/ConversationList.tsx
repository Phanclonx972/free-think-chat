import { MessageSquare, Plus, LogOut, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

interface Conversation {
  id: string;
  title: string;
  updated_at: string;
}

interface ConversationListProps {
  conversations: Conversation[];
  activeId: string | null;
  onSelect: (id: string) => void;
  onNew: () => void;
  onLogout: () => void;
}

export const ConversationList = ({
  conversations,
  activeId,
  onSelect,
  onNew,
  onLogout,
}: ConversationListProps) => {
  return (
    <div className="flex flex-col h-full bg-card/50 backdrop-blur-sm border-r border-accent/30">
      <div className="p-4 border-b border-accent/30">
        <div className="flex items-center gap-2 mb-4">
          <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-accent">
            <Sparkles className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="font-bold text-sm bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Phanclon.ai
          </span>
        </div>
        <Button
          onClick={onNew}
          className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
          size="sm"
        >
          <Plus className="h-4 w-4 mr-2" />
          New Chat
        </Button>
      </div>

      <ScrollArea className="flex-1">
        <div className="p-2 space-y-1">
          {conversations.map((conversation) => (
            <button
              key={conversation.id}
              onClick={() => onSelect(conversation.id)}
              className={cn(
                "w-full text-left p-3 rounded-xl mb-1 transition-all",
                activeId === conversation.id
                  ? "bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/50 shadow-md"
                  : "hover:bg-accent/10 border border-transparent"
              )}
            >
              <div className="flex items-start gap-2">
                <MessageSquare className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm truncate font-medium">{conversation.title || "New conversation"}</p>
                  <p className="text-xs text-muted-foreground">
                    {new Date(conversation.updated_at).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </ScrollArea>

      <div className="p-4 border-t border-accent/30">
        <Button
          variant="ghost"
          onClick={onLogout}
          className="w-full hover:bg-destructive/20"
          size="sm"
        >
          <LogOut className="h-4 w-4 mr-2" />
          Logout
        </Button>
      </div>
    </div>
  );
};
