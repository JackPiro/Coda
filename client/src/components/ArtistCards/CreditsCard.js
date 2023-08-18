import React from 'react'

export default function CreditsCard() {
    return (
        <div>
            <div className='flex items-center p-2 px-4 bg-gray-800 h-14 w-60 hover:bg-[#2b394c] transition rounded-md'>
                <img className="w-10 h-10 rounded-md mr-2" src='https://images.unsplash.com/photo-1500099817043-86d46000d58f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&h=250&q=80'/>
                <div className='flex flex-col'>
                    <h2 className='text-left'>Role</h2>
                    <p className='text-left'>Username</p>
                </div>
            </div>
        </div>
    )
}





