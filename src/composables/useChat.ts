import type { ChatNuntius } from "@/interfaces/chat-nuntius.interface";
import { ref } from "vue";

export const useChat = () => {

    const nuntii = ref<ChatNuntius[]>([ ]);
    
    const cumNovumMuntius = (textus: string) => {
        nuntii.value.push({
            id: new Date().getTime(),
            nuntius: textus,
            meusEst: true
        });
    }

    return {
        nuntii,
        cumNovumMuntius
    }
}