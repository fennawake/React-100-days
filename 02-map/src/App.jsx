import './App.css'

const users = [
  {
    id: 1,
    name: 'Carlos',
    address: 'Rua x',
    age: 28,
    isAdmin: false,
  },
  {
    id: 2,
    name: 'Maria',
    address: 'Rua Y',
    age: 31,
    isAdmin: true,
  },
  {
    id: 3,
    name: 'Matheus',
    address: 'Rua Z',
    age: 42,
    isAdmin: false,
  },
];

function App() {
  return (
    <div className="App">
      <div>
        {users.map((user) => (
          <div key={user.id}>{user.name}, {user.age}</div>
        ))}
      </div>
    </div>
  )
}

export default App