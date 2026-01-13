import React, { useState } from 'react';
import './FriendsPopup.css';
import SampleImg from '../assets/arts/ukiyo.jpg';
import SampleImg2 from '../assets/arts/almondtree.jpg';

export function FriendsPopup({ isOpen, onClose }) {
    const [activeTab, setActiveTab] = useState('Friend List');
    const [searchQuery, setSearchQuery] = useState('');

    const [friendsList, setFriendsList] = useState([
        { id: 1, username: 'Username1', avatar: SampleImg },
        { id: 2, username: 'Username2', avatar: SampleImg2 },
        { id: 3, username: 'Username3', avatar: SampleImg },
        { id: 4, username: 'Username4', avatar: SampleImg2 },
        { id: 5, username: 'Username5', avatar: SampleImg },
        { id: 6, username: 'Username6', avatar: SampleImg2 },
        { id: 7, username: 'Username7', avatar: SampleImg },
    ])

    const [friendRequests, setFriendRequests] = useState([
        { id: 1, username: 'Username1', avatar: SampleImg },
        { id: 2, username: 'Username2', avatar: SampleImg2 },
        { id: 3, username: 'Username3', avatar: SampleImg },
    ])

    const [outgoingRequests, setOutgoingRequests] = useState([
        { id: 1, username: 'Username1', avatar: SampleImg },
        { id: 2, username: 'Username2', avatar: SampleImg2 },
        { id: 3, username: 'Username3', avatar: SampleImg },
    ])

    const handleAcceptRequest = (id) => {
        const acceptedRequest = friendRequests.find(req => req.id === id)
        const newRequests = friendRequests.filter(req => req.id !== id)
        const newFriends = [...friendsList, acceptedRequest]

        setFriendRequests(newRequests)
        setFriendsList(newFriends)
    }

    const handleDeclineRequest = (id) => {
        const newRequests = friendRequests.filter(req => req.id !== id)
        
        setFriendRequests(newRequests)
    }

    const handleRemoveFriend = (id) => {
        const newFriends = friendsList.filter(friend => friend.id !== id)
        
        setFriendsList(newFriends)
    }

    const handleRemoveOutgoingRequest = (id) => {
        const newOutgoingRequests = outgoingRequests.filter(req => req.id !== id)
        
        setOutgoingRequests(newOutgoingRequests)
    }

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        setSearchQuery('');
    };

    if (!isOpen) return null;

    const renderHeader = () => {
        let placeholder = "Search List";
        if (activeTab === "Friend Requests") placeholder = "Search Requests";
        if (activeTab === "Add Friend") placeholder = "Search Outgoing";

        return (
            <div className="friends-header">
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

    const renderContent = () => {
        if (activeTab === 'Friend List') {
            const filteredFriends = friendsList.filter(friend => 
                friend.username.toLowerCase().includes(searchQuery.toLowerCase())
            );

            return (
                <div className="friends-content-list">
                    {filteredFriends.map((friend, index) => (
                        <div key={friend.id} className={`friend-row ${index % 2 === 0 ? 'even' : 'odd'}`}>
                            <div className="friend-info">
                                <img src={friend.avatar} alt={friend.username} className="row-avatar" />
                                <span className="row-username">{friend.username}</span>
                            </div>
                            <button className="action-btn remove-btn" onClick={() => handleRemoveFriend(friend.id)}>✖</button>
                        </div>
                    ))}
                </div>
            );
        } else if (activeTab === 'Friend Requests') {
            const filteredRequests = friendRequests.filter(friend => 
                friend.username.toLowerCase().includes(searchQuery.toLowerCase())
            );

            return (
                <div className="friends-content-list">
                    {filteredRequests.map((request, index) => (
                        <div key={request.id} className={`friend-row ${index % 2 === 0 ? 'even' : 'odd'}`}>
                            <div className="friend-info">
                                <img src={request.avatar} alt={request.username} className="row-avatar" />
                                <span className="row-username">{request.username}</span>
                            </div>
                            <div className="action-group">
                                <button className="action-btn accept-btn" onClick={() => handleAcceptRequest(request.id)}>✔</button>
                                <button className="action-btn decline-btn" onClick={() => handleDeclineRequest(request.id)}>✖</button>
                            </div>
                        </div>
                    ))}
                    {/* Filling the rest with empty rows to match UI if needed, but flex/min-height is better */}
                </div>
            );
        } else if (activeTab === 'Add Friend') {
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
                            <div key={request.id} className={`friend-row ${index % 2 === 0 ? 'even' : 'odd'}`}>
                                <div className="friend-info">
                                    <img src={request.avatar} alt={request.username} className="row-avatar" />
                                    <span className="row-username">{request.username}</span>
                                </div>
                                <button className="action-btn cancel-btn" onClick={() => handleRemoveOutgoingRequest(request.id)}>Cancel</button>
                            </div>
                        ))}
                    </div>
                </div>
            );
        }
    };

    return (
        <div className="friends-popup-overlay" onClick={onClose}>
            <div className="friends-popup-container" onClick={(e) => e.stopPropagation()}>
                {renderHeader()}
                <div className="friends-body">
                    {renderContent()}
                </div>
            </div>
        </div>
    );
}