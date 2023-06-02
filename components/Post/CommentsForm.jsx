/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { submitComment } from '../../services';
import { sendMessageToTelegram } from '../../utils/sendMessageToTelegram'

const CommentsForm = ({ slug }) => {
    const [error, setError] = useState(false);
    const [localStorage, setLocalStorage] = useState(null);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', comment: '', storeData: false });

    useEffect(() => {
        setLocalStorage(window.localStorage);
        const initalFormData = {
            name: window.localStorage.getItem('name'),
            email: window.localStorage.getItem('email'),
            comment: '',
            storeData: window.localStorage.getItem('name') || window.localStorage.getItem('email'),
        };
        setFormData(initalFormData);
    }, []);

    const onInputChange = (e) => {
        const { target } = e;
        if (target.type === 'checkbox') {
            setFormData((prevState) => ({
                ...prevState,
                [target.name]: target.checked,
            }));
        } else {
            setFormData((prevState) => ({
                ...prevState,
                [target.name]: target.value,
            }));
        }
    };

    const handlePostSubmission = () => {
        setError(false);
        const { name, email, comment, storeData } = formData;
        if (!name || !email || !comment) {
            setError(true);
            return;
        }
        const commentObj = {
            name,
            email,
            comment,
            slug,
        };

        if (storeData) {
            localStorage.setItem('name', name);
            localStorage.setItem('email', email);
        } else {
            localStorage.removeItem('name');
            localStorage.removeItem('email');
        }

        submitComment(commentObj)
            .then((res) => {
                if (res.createComment) {
                    if (!storeData) {
                        formData.name = '';
                        formData.email = '';
                    }
                    formData.comment = '';
                    setFormData((prevState) => ({
                        ...prevState,
                        ...formData,
                    }));
										sendMessageToTelegram(
                      `Stupid Blog \n\nЮзер ${commentObj.name}, email ${commentObj.email} пишет: \n\n'${commentObj.comment}'`
                    )
                    setShowSuccessMessage(true);
                    setTimeout(() => {
                        setShowSuccessMessage(false);
                    }, 3000);
                }
            });
    };

    return (
      <div className='bg supports-backdrop-blur:bg-white/95 dark:bg-zinc-900/75 border border-sky-900 rounded-lg p-8 pb-12 mb-8'>
        <h3 className='text-xl mb-8 font-semibold border-b border-sky-900 pb-4'>
          Leave your comment
        </h3>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4'>
          <input
            type='text'
            value={formData.name}
            onChange={onInputChange}
            className='py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-sky-900 bg border border-sky-900'
            name='name'
            placeholder='Name'
          />
          <input
            type='email'
            value={formData.email}
            onChange={onInputChange}
            className='py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-sky-900 bg border border-sky-900'
            name='email'
            placeholder='Email'
          />
        </div>
        <div className='grid grid-cols-1 gap-4 mb-4'>
          <textarea
            value={formData.comment}
            onChange={onInputChange}
            className='p-4 outline-none w-full rounded-lg h-40 focus:ring-2 focus:ring-sky-900 bg border border-sky-900 transition-all'
            name='comment'
            placeholder='Comment'
          />
        </div>
        <div className='grid grid-cols-1 gap-4 mb-4'>
          <div>
            <input
              checked={formData.storeData}
              onChange={onInputChange}
              type='checkbox'
              id='storeData'
              name='storeData'
              value='true'
              className='accent-blue-700'
            />
            <label className='cursor-pointer select-none' htmlFor='storeData'>
              {' '}
              Save your name and email for the next comment.
            </label>
          </div>
        </div>
        {error && <p className='text-red-500'>Please enter full information!</p>}
        <div className='mt-8'>
          <button
            type='button'
            onClick={handlePostSubmission}
            className='bg-slate-700 inline-block rounded-xl font-bold px-8 py-3 transition-all hover:bg-slate-800'
          >
            Comment
          </button>
          {showSuccessMessage && (
            <span className='float-right font-semibold mt-3 text-green-500'>Thank you! _)</span>
          )}
        </div>
      </div>
    )
};

export default CommentsForm;