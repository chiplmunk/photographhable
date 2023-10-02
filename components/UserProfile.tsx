"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import React from "react";

export default function UserProfile() {
  const { isLoaded, isSignedIn, user } = useUser();

  return (
    <div>
      <div className="font-semibold text-white text-3xl">
        Hello {user?.firstName}! Welcome to your profile
      </div>
      <div className="flex items-center justify-center p-8">
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-br-full group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 ">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Upload
          </span>
        </button>
      </div>
    </div>
  );
}
