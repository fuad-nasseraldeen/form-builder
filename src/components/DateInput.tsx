import React from 'react';
import { Profile } from '../utils/types';

interface DateInputProps {
    value: string;
    entity: string
    label: string
    handleInputChange: (value: string | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, entity: keyof Profile) => void;
}

const DateInput: React.FC<DateInputProps> = ({ value, entity, handleInputChange }) => {
    return (
        <input
            type="date"
            name="label"
            value={value}
            placeholder="dd/mm/yyyy"
            onChange={(e) => handleInputChange(e, entity)}
            onKeyDown={(e) => e.preventDefault()}  // Prevent manual input
            className="input w-full h-8 md:w-64 input-bordered font-hebrow font-normal"
        />
    );
};

export default DateInput;
