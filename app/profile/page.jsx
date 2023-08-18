"use client";
import React from 'react';
import { useState,useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Profile from '@components/Profile';   

const MyProfile = () => {
    const handleEdit = () => {}
    const handleDelete  = async () =>{}
    const { data: session } = useSession();
    useEffect(()=>{
        const fetchPosts = async ()=>{
          const response = await fetch(`/api/users/${session?.user.id}/posts/`);
          const data = await response.json();
          setPosts(data);
        }
        fetchPosts();
      },[])
  return (
   <Profile
   name="My"
   desc="Welcome to your personalization profile page."
   data={[]}
   handleEdit={handleEdit}
   handleDelete={handleDelete}
   />
  )
}

export default MyProfile