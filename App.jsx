import React from 'react';

// Komponen fungsional MyComponent
function MyComponent(props) {
  return <h2>Halo, {props.name}!</h2>;
}

// Komponen utama App yang menggunakan MyComponent
function App() {
  return (
    <div>
      <h1>Selamat Datang ke Aplikasi React!</h1>
      <MyComponent name="Nazwa" />
    </div>
  );
}

export default App;
