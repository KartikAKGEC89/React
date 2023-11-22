import React from 'react'
import './App.css'
import Adduser from './components/Adduser';

const App = () => {
	const [user, setUser] = React.useState([]);


	// const addPosts = async (title, body) => {
   // await fetch('https://jsonplaceholder.typicode.com/posts', {
   //    method: 'POST',
	//    body: JSON.stringify({
   //       title: title,
   //       body: body,
   //    }),
   //    headers: {
   //       'Content-type': 'application/json; charset=UTF-8',
   //    },
   // })
   //    .then((response) => response.json())
   //    .then((data) => {
   //       setUser((users) => [data, ...users]);
   //       setTitle('');
   //       setBody('');
   //    })
   //    .catch((err) => {
   //       console.log(err.message);
   //    });
   // };
   
    const addposts = async(title, body) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
          title: title,
          body: body,
      }),
       headers: {
          'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const data = await response.json();
    setUser((prevUsers) => [data, ...prevUsers])
  };
	

	// React.useEffect(() => {
	// 	fetch("https://jsonplaceholder.typicode.com/posts", {
	// 		method: "GET"
	// 	}).then((response) => response.json())
	// 		.then((data) => {
	// 			console.log(data);
	// 			setUser(data)
	// 		})
	// 		.catch((err) => {
	// 			console.log(err.message);
	// 		});
   // }, []);
   

const fetchPosts = async() => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=4");
    const data = await response.json();
    setUser(data);
  }
 
 React.useEffect(() => {
      fetchPosts()
   }, []);


//   const deletePost = (id) => {
//     fetch(`https://jsonplaceholder.typicode.com/posts/` + id, {
//       method: 'DELETE',
//     })
//     .then((response) => {
//       if(response.status === 200) {
//         setUser(
//           user.filter((users) => {
//             return users.id !== id;
//           })
//         )
//       }
//     })
//      };
   
   const deletePost = async (id) => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/` + id, {
         method: 'DELETE'
      })
      if (response.status === 200) {
         setUser(
            user.filter((users) => {
               return users.id !== id;
            })
         )
      }
   };

	return (
		<>
			
         <div className="container">
            <h1> Data from API </h1>
            <Adduser addposts={addposts} />
      {user.map((users) => {
         return (
			 <div className="card" key={users.id}>
				 <h2 className='userid'>ID :- {users.id}</h2>
               <h1 className="title">TITLE :- {users.title}</h1>
               <p className="body">BODY :- {users.body}</p>
                <button 
                className="btn-delete" 
                onClick={() => deletePost(users.id)}
            >Delete</button>
            </div>
         );
      })}
			</div>
			</>
  )
}

export default App
