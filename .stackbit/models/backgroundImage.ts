import { type ModelExtension } from '@stackbit/types';

export const backgroundImage: ModelExtension = {
    name: 'backgroundImage',
    fields: [
        {
            name: 'imageUrl',
            controlType: 'text', // Cho phép người dùng nhập URL hình ảnh
            label: 'Image URL',
            description: 'Enter the URL of the background image',
            required: true,
            value: 'https://drive.google.com/file/d/1LUy1TLSAFc8Rnq5tr6IL5we230Oh_sKC/view?usp=drive_link' // URL hình ảnh nền được điền sẵn
        },
        {
            name: 'opacity',
            controlType: 'slider',
            min: 0,
            max: 100,
            step: 1,
            unit: '%',
            label: 'Opacity',
            description: 'Adjust the opacity of the background image'
        }
    ]
};
