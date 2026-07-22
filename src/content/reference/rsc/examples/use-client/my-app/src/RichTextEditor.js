'use client';

import { formatDate } from './formatters';
import Button from './button';

export default function RichTextEditor({ timestamp, text }) {
    const date = formatDate(timestamp);
    // ...
    const editButton = <Button />;
    // ...
}