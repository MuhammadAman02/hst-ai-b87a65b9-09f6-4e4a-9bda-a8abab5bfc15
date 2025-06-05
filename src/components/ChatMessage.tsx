import { ChatMessage as ChatMessageType } from '@/types/chat';
import { User, Bot } from 'lucide-react';

interface ChatMessageProps {
  message: ChatMessageType;
}

const ChatMessage = ({ message }: ChatMessageProps) => {
  const isUser = message.role === 'user';
  
  console.log('Rendering message:', message.content.substring(0, 50) + '...');

  return (
    <div className={`flex gap-3 p-4 ${isUser ? 'bg-blue-50' : 'bg-gray-50'} rounded-lg`}>
      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
        isUser ? 'bg-blue-500 text-white' : 'bg-gray-500 text-white'
      }`}>
        {isUser ? <User size={16} /> : <Bot size={16} />}
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-sm font-medium text-gray-900 mb-1">
          {isUser ? 'You' : 'AI Assistant'}
        </div>
        <div className="text-gray-700 whitespace-pre-wrap break-words">
          {message.content}
        </div>
        <div className="text-xs text-gray-500 mt-2">
          {message.timestamp.toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;