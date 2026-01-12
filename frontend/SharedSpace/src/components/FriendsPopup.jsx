import React, { useState } from 'react';
import './FriendsPopup.css';
import { BorderedButton } from './BorderedButton';
import SampleImg from '../assets/arts/ukiyo.jpg';

/**
 * FriendsPopup Component
 * 
 * Manages Friend List, Friend Requests, and Adding New Friends.
 */

export function FriendsPopup({ isOpen, onClose }) {
    const [activeTab, setActiveTab] = useState('friends'); // For switch switch text sa search bar beside friends
    const [topSearch, setTopSearch] = useState('');
    const [userSearch, setUserSearch] = useState('');

    const [friends, setFriends] = useState([
        { id: 1, name: "Angus", avatar: SampleImg },
        { id: 2, name: "Francis", avatar: SampleImg },
        { id: 3, name: "James", avatar: SampleImg },
    ]);

    const [requests, setRequests] = useState([
        { id: 4, name: "Nathan", avatar: SampleImg },
        { id: 5, name: "Shamel", avatar: SampleImg },
    ]);

    const [outgoingRequests, setOutgoingRequests] = useState([
        { id: 6, name: "Pending User 1", avatar: SampleImg },
        { id: 7, name: "Pending User 2", avatar: SampleImg }
    ]);

    const [allUsers, setAllUsers] = useState([
        { id: 9, name: "User A", avatar: SampleImg },
        { id: 10, name: "User B", avatar: SampleImg },
    ]);

    // Search bar text based on active tab
    const getPlaceholder = () => {
        switch(activeTab) {
            case 'friends': return "Search list...";
            case 'requests': return "Search requests...";
            case 'add': return "Search outgoing...";
            default: return "Search...";
        }
    };

    const filteredFriends = friends.filter(f => f.name.toLowerCase().includes(topSearch.toLowerCase()));
    const filteredRequests = requests.filter(r => r.name.toLowerCase().includes(topSearch.toLowerCase()));
    const filteredOutgoing = outgoingRequests.filter(o => o.name.toLowerCase().includes(topSearch.toLowerCase()));
    const filteredNewUsers = allUsers.filter(u => u.name.toLowerCase().includes(userSearch.toLowerCase()));

    if (!isOpen) return null;

    return (
        <div className="friends-popup-overlay">
            <div className="friends-popup">
                {/* Header && Search Bar */}
                <div className="friends-popup-header">
                    <h2>Friends</h2>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <input 
                            type="text" 
                            className="header-search" 
                            placeholder={getPlaceholder()}
                            value={topSearch}
                            onChange={(e) => setTopSearch(e.target.value)}
                        />
                        <button className="close-btn" onClick={onClose}>&times;</button>
                    </div>
                </div>

                {/* Tabs */}
                <div className="friends-tabs">
                    <button 
                        className={`tab-btn ${activeTab === 'friends' ? 'active' : ''}`} 
                        onClick={() => { setActiveTab('friends'); setTopSearch(''); }}
                    >
                        Friend List
                    </button>
                    <button 
                        className={`tab-btn ${activeTab === 'requests' ? 'active' : ''}`} 
                        onClick={() => { setActiveTab('requests'); setTopSearch(''); }}
                    >
                        Friend Requests
                    </button>
                    <button 
                        className={`tab-btn ${activeTab === 'add' ? 'active' : ''}`} 
                        onClick={() => { setActiveTab('add'); setTopSearch(''); }}
                    >
                        Add Friend
                    </button>
                </div>

                {/* Content Area */}
                <div className="friends-content">
                    
                    {/* FRIEND LIST TAB */}
                    {activeTab === 'friends' && (
                        <div className="friends-list-container">
                            {filteredFriends.map(friend => (
                                <div key={friend.id} className="friend-row">
                                    <div className="friend-info">
                                        <img src={friend.avatar} alt={friend.name} className="friend-avatar-small" />
                                        <span className="friend-name">{friend.name}</span>
                                    </div>
                                    <div className="friend-actions">
                                        <BorderedButton message="Unfriend" size="pink" />
                                    </div>
                                </div>
                            ))}
                            {filteredFriends.length === 0 && <p style={{textAlign:'center', color:'#888'}}>No friends found.</p>}
                        </div>
                    )}

                    {/* FRIEND REQUESTS TAB */}
                    {activeTab === 'requests' && (
                        <div className="requests-list-container">
                            {filteredRequests.map(req => (
                                <div key={req.id} className="friend-row">
                                    <div className="friend-info">
                                        <img src={req.avatar} alt={req.name} className="friend-avatar-small" />
                                        <span className="friend-name">{req.name}</span>
                                    </div>
                                    <div className="friend-actions">
                                        <BorderedButton message="Add" size="purple" />
                                        <BorderedButton message="Delete" size="pink" />
                                    </div>
                                </div>
                            ))}
                            {filteredRequests.length === 0 && <p style={{textAlign:'center', color:'#888'}}>No pending requests.</p>}
                        </div>
                    )}

                    {/* ADD FRIEND TAB */}
                    {activeTab === 'add' && (
                        <div className="add-friend-container">
                            {/* Outgoing Requests Section */}
                            {topSearch && (
                                <div style={{ marginBottom: '20px' }}>
                                    <h4 style={{ margin: '0 0 10px 0', color: '#5C5A7B' }}>Outgoing Requests</h4>
                                    {filteredOutgoing.map(out => (
                                        <div key={out.id} className="friend-row">
                                            <div className="friend-info">
                                                <img src={out.avatar} alt={out.name} className="friend-avatar-small" />
                                                <span className="friend-name">{out.name}</span>
                                            </div>
                                            <span style={{ fontSize: '0.8rem', color: '#888' }}>Pending</span>
                                        </div>
                                    ))}
                                </div>
                            )}

                            <div className="add-friend-section" style={{ marginTop: '20px' }}>
                                <h3>Add a new friend today!</h3>
                                <input 
                                    type="text" 
                                    className="header-search" 
                                    style={{ width: '100%', boxSizing: 'border-box', padding: '12px' }}
                                    placeholder="Search for users..."
                                    value={userSearch}
                                    onChange={(e) => setUserSearch(e.target.value)}
                                />
                                <div style={{ marginTop: '15px' }}>
                                    {userSearch && filteredNewUsers.map(user => (
                                        <div key={user.id} className="friend-row">
                                            <div className="friend-info">
                                                <img src={user.avatar} alt={user.name} className="friend-avatar-small" />
                                                <span className="friend-name">{user.name}</span>
                                            </div>
                                            <div className="friend-actions">
                                                <BorderedButton message="Add Friend" size="purple" />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}