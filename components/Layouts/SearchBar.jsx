/* eslint-disable react/prop-types */
import React from 'react'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getPosts } from '../../services';

const SearchBar = ({ mobileSearch, setSearchActive }) => {

    const [searchValue, setSearchValue] = useState('');
    const handleSearchInputChanges = (e) => {
        setSearchValue(e.target.value);
    }

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        getPosts()
            .then((result) => setPosts(result))
    }, [])

    const [searchPost, setSearchPost] = useState([]);
    useEffect(() => {
        const results = posts.filter(post => {
            post = post.node;
            return post.title.toLowerCase().includes(searchValue.toLowerCase());
        });
        setSearchPost(results);
    }, [searchValue]);

    const searchRef = useRef(null);
    const [searchFocus, setSearchFocus] = useState(false);
    useEffect(() => {

        const checkIfClickedOutside = (e) => {
            if (searchRef.current && !searchRef.current.contains(e.target)) {
                setSearchFocus(false);
            } else {
                setSearchFocus(true);
            }
        }

        document.addEventListener("mousedown", checkIfClickedOutside);

        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside);
        };
    }, []);

    const handlePostSelect = () => {
        setSearchValue('');
        mobileSearch && setSearchActive(false);
    }

    return (
      <div className='relative w-full' ref={searchRef}>
        <input
          type='text'
          placeholder='You will be lucky...'
          value={searchValue}
          onChange={handleSearchInputChanges}
          className='border border-sky-900 w-full h-10 px-5 pr-10 text-sm placeholder-gray-400 bg rounded-full outline-none focus:ring-2 focus:ring-sky-900 transition-all'
        />
        {searchValue.length > 1 && searchFocus && (
          <div
            className={`${
              mobileSearch
                ? 'mt-4'
                : 'absolute left-0 top-12 bg-neutral-800 border border-sky-900 rounded-md'
            } w-full overflow-hidden`}
          >
            {(searchPost.length !== 0 &&
              searchPost.map((post) => {
                post = post.node
                return (
                  <div
                    key={post.slug}
                    className='flex items-center w-full group hover:bg-neutral-900'
                  >
                    <Link
                      href={`/post/${post.slug}`}
                      key={post.slug}
                      className={`${mobileSearch ? 'px-2' : 'px-5'} flex items-center w-full py-4`}
                      onClick={handlePostSelect}
                    >
                      {mobileSearch ? (
                        ''
                      ) : (
                        <Image
                          src={post.featuredImage.url}
                          alt={post.title}
                          height={60}
                          width={60}
                          className='align-middle rounded-md object-contain inline-block mr-4'
                        />
                      )}
                      <span className='inline-block text-sm'>{post.title}</span>
                    </Link>
                  </div>
                )
              })) || (
              <div className='text-sm px-5 py-2 select-none cursor-not-allowed'>{`No results for '${searchValue}'`}</div>
            )}
          </div>
        )}
      </div>
    )
}

export default SearchBar