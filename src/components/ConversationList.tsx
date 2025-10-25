import { MessageSquare, Plus, LogOut } from "lucide-react";
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
    <div className="flex flex-col h-full bg-card border-r border-accent/20">
      <div className="p-4 border-b border-accent/20">
        <Button
          onClick={onNew}
          className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90"
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
                "w-full text-left p-3 rounded-lg transition-colors flex items-center gap-2",
                activeId === conversation.id
                  ? "bg-accent/20 text-foreground"
                  : "hover:bg-accent/10 text-muted-foreground"
              )}
            >
              <MessageSquare className="h-4 w-4 shrink-0" />
              <span className="truncate text-sm">{conversation.title}</span>
            </button>
          ))}
        </div>
      </ScrollArea>

      <div className="p-4 border-t border-accent/20">
        <Button
          variant="outline"
          onClick={onLogout}
          className="w-full border-accent/20"
        >
          <LogOut className="h-4 w-4 mr-2" />
          Logout
        </Button>
      </div>
    </div>
  );
};
