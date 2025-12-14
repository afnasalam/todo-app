'use client'

import { useEffect } from "react";

export default function TodoClientPage() {
    useEffect(() => {
        const data = async () => {
            const response = await fetch('/api/todo');
            const data = await response.json();
            console.log(data);
        }
        data();
    }, [])
    return (
        <div>TodoClientPage</div>
    );
}