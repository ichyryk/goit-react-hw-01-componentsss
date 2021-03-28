import React from 'react'
import friends from './components/FriendList/friends.json'
import user from './components/Profile/user.json'
import statisticalData from './components/Statistics/statistical-data.json'
import transaction from './components/TransactionHistory/transaction.json'
import Profile from './components/Profile/Profile'
import FriendList from './components/FriendList/FriendList'
import Statistics from './components/Statistics/Statistics'
import TransactionHistory from './components/TransactionHistory/TransactionHistory'

function App() { 
  return (
    <div className="App">
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transaction} />
    </div>
  )
}

export default App;