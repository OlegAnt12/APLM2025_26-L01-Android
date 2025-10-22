// packages/api/src/index.js
import { Quote } from '@rn/common';

// A API define um contrato que usa a lógica comum
export const QuoteService = {
    getNewQuote: () => {
        const q = new Quote(Date.now(), "API Author", "Esta é uma mensagem via API.");
        // O método getDisplayText vem do módulo comum
        console.log("API usando lógica comum:", q.getDisplayText()); 
        return q;
    }
}