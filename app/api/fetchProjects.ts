import type { NextApiRequest, NextApiResponse } from 'next';

async function fetchGoogleFormData() {
    const response = await fetch('URL_DO_FORMULARIO_GOOGLE', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        throw new Error('Falha ao buscar dados');
    }

    const data = await response.json();
    return data;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const data = await fetchGoogleFormData();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Falha ao buscar dados' });
    }
}
