import React from 'react';

const UploadComponent = ({ id, label, subLabel, iconUrl, onFileChange, maxFileSize }) => {
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file && file.size <= maxFileSize) {
            onFileChange(file);
        } else {
            alert('File is too large or not selected!');
        }
    };

    return (
        <div className="relative mt-2">
            <label
                title="Click to upload"
                htmlFor={id}
                className="cursor-pointer flex items-center gap-2 px-3  before:border-gray-400/60 hover:before:border-gray-300 group before:bg-gray-100 before:absolute before:inset-0 before:rounded-2xl before:border before:border-dashed before:transition-transform before:duration-100 hover:before:scale-105 active:duration-75 active:before:scale-95"
            >
                <div className="w-max relative">
                    <img className="w-12" src={iconUrl} alt="file upload icon" />
                </div>
                <div className="relative">
                    <span className="block text-base font-semibold relative text-blue-900 group-hover:text-blue-500">
                        {label}
                    </span>
                    <span className="mt-0.5 block text-sm text-gray-500">{subLabel}</span>
                </div>
            </label>
            <input hidden type="file" name={id} id={id} onChange={handleFileChange} />
        </div>
    );
};

export default UploadComponent;
