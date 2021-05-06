import Profile from './components/Profile/Profile'
import FriendList from './components/FriendList/FriendList'
import Statistics from './components/Statistics/Statistics'
import TransactionHistory from './components/TransactionHistory/TransactionHistory'
import Container from './components/Container/Container'
import friends from './components/json/friends.json';
import user from './components/json/user.json';
import statisticalData from './components/json/statistical-data.json';
import transactions from './components/json/transactions.json';

function App() { 
  return (
    <Container>
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
      <TransactionHistory items={transactions} />
    </Container>
  )
}

export default App;