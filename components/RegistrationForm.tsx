import React from 'react';
import { Button } from './ui/button';

// GOOGLE_FORM_ID == D do formulário Google Forms
// entry.123456789 e entry.987654321 == IDs dos campos do formulário podem ser encontrados inspecionando o código fonte do formulário.

const RegistrationForm = () => {
return (
<div className="container mx-auto py-16">
    <div className="max-w-md mx-auto shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <h2 className="text-3xl font-bold mb-6 text-accent">Formulário de Inscrição</h2>
    <form 
        action="https://docs.google.com/forms/d/e/GOOGLE_FORM_ID/formResponse" 
        method="POST"
        target="_blank"
    >
        <div className="mb-4">
        <label htmlFor="entry.123456789" className="block text-white/80 text-sm font-bold mb-2">Nome:</label>
        <input 
            type="text" 
            name="entry.123456789" 
            id="entry.123456789" 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-white/80 leading-tight focus:outline-none focus:shadow-outline" 
            required 
        />
        </div>
        <div className="mb-6">
        <label htmlFor="entry.987654321" className="block text-white/80 text-sm font-bold mb-2">Email:</label>
        <input 
            type="email" 
            name="entry.987654321" 
            id="entry.987654321" 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-white/80 leading-tight focus:outline-none focus:shadow-outline" 
            required 
        />
        </div>
        <div className="flex items-center justify-center">
        <Button
            variant={"default_personalizado"} className="text-white/85"
            type="submit" 
        >
            Enviar
        </Button>
        </div>
    </form>
    </div>
</div>
);
};

export default RegistrationForm;