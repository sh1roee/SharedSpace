// For the sign-out popup.
import './FriendsPopup.css';                             // Import CSS.
import React, { useState } from 'react';
import SampleImg from '../assets/arts/ukiyo.jpg';
import SampleImg2 from '../assets/arts/almondtree.jpg';

// ____________________________________________________________________________________________________

export function FriendsPopup({ isOpen, onClose }) {

    // State for tab and search query.
    const [activeTab, setActiveTab] = useState('Friend List');
    const [searchQuery, setSearchQuery] = useState('');

    // State for friends.
    const [friendsList, setFriendsList] = useState([
        { id: 1, username: 'Username1', avatar: SampleImg },
        { id: 2, username: 'Username2', avatar: SampleImg2 },
        { id: 3, username: 'Username3', avatar: SampleImg },
        { id: 4, username: 'Username4', avatar: SampleImg2 },
        { id: 5, username: 'Username5', avatar: SampleImg },
        { id: 6, username: 'Username6', avatar: SampleImg2 },
        { id: 7, username: 'Username7', avatar: SampleImg },
    ])

    // State for friend requests.
    const [friendRequests, setFriendRequests] = useState([
        { id: 1, username: 'Username1', avatar: SampleImg },
        { id: 2, username: 'Username2', avatar: SampleImg2 },
        { id: 3, username: 'Username3', avatar: SampleImg },
    ])

    // State for outgoing friend requests.
    const [outgoingRequests, setOutgoingRequests] = useState([
        { id: 1, username: 'Username1', avatar: SampleImg },
        { id: 2, username: 'Username2', avatar: SampleImg2 },
        { id: 3, username: 'Username3', avatar: SampleImg },
    ])

    // Function handling accepted friend requests.
    const handleAcceptRequest = (id) => {
        const acceptedRequest = friendRequests.find(req => req.id === id)          // Find request to accept.
        const newRequests = friendRequests.filter(req => req.id !== id)            // Filter out accepted request.
        const newFriends = [...friendsList, acceptedRequest]                       // Create new friends list and add newly-accepted.

        setFriendRequests(newRequests)
        setFriendsList(newFriends)
    }

    // Function handling declined friend requests.
    const handleDeclineRequest = (id) => {
        const newRequests = friendRequests.filter(req => req.id !== id)            // Filter out declined request.
        
        setFriendRequests(newRequests)
    }

    // Function handling removed friends.
    const handleRemoveFriend = (id) => {
        const newFriends = friendsList.filter(friend => friend.id !== id)          // Filter out removed friend.
        
        setFriendsList(newFriends)
    }

    // Function handling removed outgoing friend requests.
    const handleRemoveOutgoingRequest = (id) => {
        const newOutgoingRequests = outgoingRequests.filter(req => req.id !== id)  // Filter out removed outgoing request.
        
        setOutgoingRequests(newOutgoingRequests)
    }

    // Function to reset search query every tab change.
    const handleTabChange = (tab) => {
        setActiveTab(tab);
        setSearchQuery('');
    };

    // Render popup if open.
    if (!isOpen) return null;

    // Function for header.
    const renderHeader = () => {

        // Placeholders for search bar.
        let placeholder = "Search List";
        if (activeTab === "Friend Requests") placeholder = "Search Requests";
        if (activeTab === "Add Friend") placeholder = "Search Outgoing";

        return (
            <div className="friends-header">

                {/* Header text and search bar. */}
                <div className="title-search">
                    <h1>Friends</h1> 
                    <div className="search-bar">
                        <span className="search-icon">🔍</span>
                        <input
                            type="text"
                            placeholder={placeholder}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}  
                        />
                    </div>
                </div>

                {/* Tab buttons. */}
                <div className="tabs">
                    <button
                        className={activeTab === 'Friend List' ? 'active' : ''}
                        onClick={() => setActiveTab('Friend List')}
                    >
                        Friend List
                    </button>
                    <button
                        className={activeTab === 'Friend Requests' ? 'active' : ''}
                        onClick={() => setActiveTab('Friend Requests')}
                    >
                        Friend Requests
                    </button>
                    <button
                        className={activeTab === 'Add Friend' ? 'active' : ''}
                        onClick={() => setActiveTab('Add Friend')}
                    >
                        Add Friend
                    </button>
                </div>
            </div>
        );
    };

    // Function for body.
    const renderContent = () => {
        if (activeTab === 'Friend List') {

            // Show friends' usernames containing search query.
            const filteredFriends = friendsList.filter(friend => 
                friend.username.toLowerCase().includes(searchQuery.toLowerCase())
            );

            return (
                <div className="friends-content-list">
                    {filteredFriends.map((friend, index) => (
                        <div key={friend.id} className={`friend-row ${index % 2 === 0 ? 'even' : 'odd'}`}>                       {/* Class name for styling. */}
                            <div className="friend-info">
                                <img src={friend.avatar} alt={friend.username} className="row-avatar" />
                                <span className="row-username">{friend.username}</span>
                            </div>
                            <button className="action-btn remove-btn" onClick={() => handleRemoveFriend(friend.id)}>✖</button>  {/* Button to remove friend. */}
                        </div>
                    ))}
                </div>
            );
        } else if (activeTab === 'Friend Requests') {

            // Show friend requests' usernames containing search query.
            const filteredRequests = friendRequests.filter(friend => 
                friend.username.toLowerCase().includes(searchQuery.toLowerCase())
            );

            return (
                <div className="friends-content-list">
                    {filteredRequests.map((request, index) => (
                        <div key={request.id} className={`friend-row ${index % 2 === 0 ? 'even' : 'odd'}`}>                             {/* Class name for styling. */}
                            <div className="friend-info">
                                <img src={request.avatar} alt={request.username} className="row-avatar" />
                                <span className="row-username">{request.username}</span>
                            </div>
                            <div className="action-group">
                                <button className="action-btn accept-btn" onClick={() => handleAcceptRequest(request.id)}>✔</button>    {/* Button to accept request. */}
                                <button className="action-btn decline-btn" onClick={() => handleDeclineRequest(request.id)}>✖</button>  {/* Button to decline request. */}
                            </div>
                        </div>
                    ))}
                </div>
            );
        } else if (activeTab === 'Add Friend') {

            // Show outgoing friend requests' usernames containing search query.
            const filteredOutgoingRequests = outgoingRequests.filter(friend => 
                friend.username.toLowerCase().includes(searchQuery.toLowerCase())
            );

            return (
                <div className="add-friend-container">
                    <div className="add-friend-top">
                        <h2>Add a new friend today!</h2>
                        <div className="users-search">
                            <span className="search-icon">🔍</span>
                            <input type="text" placeholder="Search Users" />
                        </div>
                    </div>
                    <div className="friends-content-list">
                        {filteredOutgoingRequests.map((request, index) => (
                            <div key={request.id} className={`friend-row ${index % 2 === 0 ? 'even' : 'odd'}`}>                                    {/* Class name for styling. */}
                                <div className="friend-info">
                                    <img src={request.avatar} alt={request.username} className="row-avatar" />
                                    <span className="row-username">{request.username}</span>
                                </div>
                                <button className="action-btn cancel-btn" onClick={() => handleRemoveOutgoingRequest(request.id)}>Cancel</button>  {/* Button to cancel outgoing request. */}
                            </div>
                        ))}
                    </div>
                </div>
            );
        }
    };

    // To be rendered.
    return (
        <div className="friends-popup-overlay" onClick={onClose}>
            <div className="friends-popup-container" onClick={(e) => e.stopPropagation()}>
                {renderHeader()}                {/* Popup header. */}
                <div className="friends-body">
                    {renderContent()}           {/* Popup body. */}
                </div> 
            </div>
        </div>
    );
}