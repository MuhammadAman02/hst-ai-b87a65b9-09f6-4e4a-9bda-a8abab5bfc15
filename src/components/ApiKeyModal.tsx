import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Key, ExternalLink } from 'lucide-react';

interface ApiKeyModalProps {
  isOpen: boolean;
  onSave: (apiKey: string) => void;
  currentApiKey?: string;
}

const ApiKeyModal = ({ isOpen, onSave, currentApiKey }: ApiKeyModalProps) => {
  const [apiKey, setApiKey] = useState(currentApiKey || '');

  const handleSave = () => {
    if (apiKey.trim()) {
      console.log('Saving API key...');
      onSave(apiKey.trim());
    }
  };

  return (
    <Dialog open={isOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Key className="w-5 h-5" />
            OpenAI API Key Required
          </DialogTitle>
          <DialogDescription>
            Please enter your OpenAI API key to start chatting with the AI assistant.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="apiKey">API Key</Label>
            <Input
              id="apiKey"
              type="password"
              placeholder="sk-..."
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSave()}
            />
          </div>
          <div className="text-sm text-gray-600">
            <p>You can get your API key from the OpenAI dashboard.</p>
            <a
              href="https://platform.openai.com/api-keys"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 underline"
            >
              Get API Key <ExternalLink className="w-3 h-3" />
            </a>
          </div>
          <Button
            onClick={handleSave}
            disabled={!apiKey.trim()}
            className="w-full"
          >
            Save API Key
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ApiKeyModal;