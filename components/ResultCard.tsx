import React from 'react'
import { formatCurrency } from '@/utils/helpers';

interface ResultCardProps {
    label: string;
    value: string | number;
    currency?: string;
}

export default function ResultCard({ label, value }: ResultCardProps) {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
            <p className="text-gray-600 text-sm font-medium mb-2">{label}</p>
            <p className="text-3xl font-bold text-gray-900">
                {typeof value === 'number' ? formatCurrency(value) : value}
            </p>
        </div>
    );
}