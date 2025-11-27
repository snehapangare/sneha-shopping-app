// import { useState,useEffect } from 'react'
// import './App.css'

// export default function App(){

//   const [data,setData]=useState([]);
// useEffect(()=>{
//   fetch("/users.json")
//   .then((res)=>res.json())
//   .then((data)=>setData(data))
//   .catch((err)=>console.log("failed to fetch",err))
// });

// return (
//   <table border="1">
//     <thead>
//     <tr>
//       <th>title:</th>
//       <th>price</th>
//     </tr>
//     </thead>

//     <tbody>

//       {data.map((item) => (
//         <tr key={item.id}>
//           <td style={{ color: "red" }}>{item.title}</td>
//           <td style={{ color: "blue" }}>{item.price}</td>
//         </tr>
//       ))}
//     </tbody>
//   </table>
// );
// }


import { useState } from 'react'
import { Provider } from 'react-redux';

import './App.css'
import { store } from './redux/store';
import ProductList from './components/ProductList';

function App() {
  return (
   <Provider store={store}>
      <ProductList />
   </Provider>
  )
}

export default App
