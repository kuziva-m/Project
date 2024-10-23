"use client"; // Marking this component as a Client Component

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from "@/app/components/Navbar"; // Adjust the import path as necessary

const Users = () => {
  const [userData, setUserData] = useState<any>(null); // State for user data
  const router = useRouter();

  useEffect(() => {
    // Fetch user data from the database when the component mounts
    const fetchUserData = async () => {
      const userId = localStorage.getItem('userId'); // Retrieve user ID from localStorage
      if (!userId) {
        alert('No user ID found. Please log in again.');
        router.push('/login'); // Redirect to login if no user ID is found
        return;
      }

      const response = await fetch(`/api/user/${userId}`); // Adjust API route to include user ID
      const data = await response.json();

      if (data.success) {
        // Capitalize first letter of first and last name, and make email and username lowercase
        const formattedUserData = {
          first_name: capitalizeFirstLetter(data.user.first_name),
          last_name: capitalizeFirstLetter(data.user.last_name),
          username: data.user.username.toLowerCase(),
          email: data.user.email.toLowerCase(),
          bio: data.user.bio,
          profile_picture: data.user.profile_picture,
        };

        setUserData(formattedUserData); // Set formatted user data
      } else {
        alert('Failed to fetch user data');
      }
    };

    fetchUserData();
  }, [router]);

  // Utility function to capitalize the first letter
  const capitalizeFirstLetter = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  const handleLogout = () => {
    alert("Logged out successfully!");
    localStorage.removeItem('userId'); // Clear user ID from localStorage
    router.push('/login'); // Redirect to login page
  };

  const handleEditDetail = (detail: string) => {
    // Logic to handle editing the specific detail
    alert(`Editing ${detail}...`);
  };

  const handleAddBio = () => {
    // Logic to handle adding bio
    alert("Adding bio...");
  };

  const handleUploadPicture = () => {
    // Logic to handle picture upload
    alert("Uploading picture...");
  };

  const handleChangePassword = () => {
    router.push('/change-password'); // Redirect to change password page
  };

  return (
    <div>
      <Navbar /> {/* Include the Navbar here */}
      <div className="container mt-5">
        <h1 className="mb-4">User Profile Overview</h1>

        <div className="card mb-4">
          <div className="card-body">
            <h5 className="card-title">Profile Information</h5>
            <p className="card-text">
              <strong>First Name:</strong> {userData?.first_name || 'N/A'}
              <button className="btn btn-warning btn-sm ms-2" onClick={() => handleEditDetail('first_name')}>Edit</button>
            </p>
            <p className="card-text">
              <strong>Last Name:</strong> {userData?.last_name || 'N/A'}
              <button className="btn btn-warning btn-sm ms-2" onClick={() => handleEditDetail('last_name')}>Edit</button>
            </p>
            <p className="card-text">
              <strong>Username:</strong> {userData?.username || 'N/A'}
              <button className="btn btn-warning btn-sm ms-2" onClick={() => handleEditDetail('username')}>Edit</button>
            </p>
            <p className="card-text">
              <strong>Email:</strong> {userData?.email || 'N/A'}
              <button className="btn btn-warning btn-sm ms-2" onClick={() => handleEditDetail('email')}>Edit</button>
            </p>
            <p className="card-text">
              <strong>Bio:</strong> {userData?.bio || 'No bio available.'}
              {!userData?.bio ? (
                <button className="btn btn-success btn-sm ms-2" onClick={handleAddBio}>Add</button>
              ) : (
                <button className="btn btn-warning btn-sm ms-2" onClick={() => handleEditDetail('bio')}>Edit</button>
              )}
            </p>
            <img
              src={userData?.profile_picture || '/default-profile.png'} // Default picture if none exists
              alt="Profile"
              className="img-fluid rounded-circle mb-3"
            />
            {(!userData?.profile_picture) ? (
              <button className="btn btn-primary" onClick={handleUploadPicture}>Upload</button>
            ) : (
              <button className="btn btn-secondary" onClick={handleUploadPicture}>Change</button>
            )}
          </div>
        </div>

        <h2 className="mb-3">Actions</h2>
        <div className="d-flex flex-column">
          <button className="btn btn-secondary mb-2" onClick={handleChangePassword}>
            Change Password
          </button>
          <button className="btn btn-danger" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Users;
