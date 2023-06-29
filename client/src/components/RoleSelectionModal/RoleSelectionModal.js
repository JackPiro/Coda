import React, { useState } from 'react';

const RoleSelectionModal = ({ isOpen, onClose, onRoleSelected }) => {
    return isOpen ? (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-8">
                <h2 className="text-2xl mb-4">Choose your profile type</h2>
                <button 
                    className="px-4 py-2 mr-2 bg-blue-500 text-white rounded" 
                    onClick={() => onRoleSelected('artist')}
                >
                    Artist
                </button>
                <button 
                    className="px-4 py-2 bg-blue-500 text-white rounded" 
                    onClick={() => onRoleSelected('listener')}
                >
                    Listener
                </button>
                <button 
                    className="absolute top-2 right-2"
                    onClick={onClose}
                >
                    X
                </button>
            </div>
        </div>
    ) : null;
};

export default RoleSelectionModal;