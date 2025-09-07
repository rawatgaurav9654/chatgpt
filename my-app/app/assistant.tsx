"use client";

import { AssistantRuntimeProvider } from "@assistant-ui/react";
import { useChatRuntime } from "@assistant-ui/react-ai-sdk";
import { Thread } from "@/components/assistant-ui/thread";
// import { ThreadList } from "@/components/assistant-ui/thread-list";

export const Assistant = () => {
  const runtime = useChatRuntime({
    api: "/api/chat",
  });

  return (
    <AssistantRuntimeProvider runtime={runtime}>
      <div className="grid h-dvh gap-x-2 px-4 py-4 bg-pink-50">
      

{/*         <ThreadList /> */}
        <Thread />
      </div>
    </AssistantRuntimeProvider>
  );
};
