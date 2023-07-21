import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadAuthorAdmin, changeAuthorRole } from '../redux/actions/adminActions';


const AdminPanel = () => {
  const dispatch = useDispatch();
  const { activeAuthors, inactiveAuthors } = useSelector((state) => state.admin);
  const [activeTab, setActiveTab] = useState('authors'); // Estado para controlar la pestaÃ±a activa

  const handleSwitchChange = (user_id, entity) => {
    console.log(`${entity} ID:`, user_id);
    if (entity === 'author') {
      dispatch(changeAuthorRole(user_id))
        .then(() => {
          dispatch(loadAuthorAdmin());
          
        })
        .catch((error) => {
          console.log('Error cambiando el rol del autor:', error);
          
        });
    }
  };

  useEffect(() => {
    dispatch(loadAuthorAdmin());
  }, [dispatch]);

  return (
    <div className='flex w-screen h-full flex-col justify-center items-center'>
      <div className="flex w-screen h-[60vh] flex-col justify-center items-center bg-[url('/admin.png')] bg-no-repeat bg-cover">
        <h1 className='flex font-semibold text-[80px] text-white'>Panel</h1>
      </div>
      <h2 className='flex font-bold text-[40px] text-pink-500 my-[5rem]'>Entities</h2>

      <div className='flex flex-col justify-center items-center'>
        <div className='flex justify-center items-center'>
          <button
            className={`p-[20px_150px] ${
              activeTab === 'authors' ? 'bg-pink-500 rounded-full text-white' : 'rounded-full bg-gray-100'
            }`}
          >
            Authors
          </button>
        </div>

        {activeTab === 'authors' && (
          <div>
            <h3 className='text-center text-[20px] mt-6'>Inactives</h3>
            <table className='text-center rounded-md min-w-[40rem] min-h-[20rem] mt-6 bg-gray-100'>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Date</th>
                  <th>City</th>
                  <th>Estate</th>
                </tr>
              </thead>
              <tbody>
                {inactiveAuthors.map((author) => (
                  <tr key={author?.user_id}>
                    <td>{author?.name} {author?.last_name}</td>
                    <td>--/--/----{author?.date}</td>
                    <td>{author?.city}</td>
                    <td>
                      <button
                        className={`${
                          author?.active ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                        }`}
                        onClick={() => handleSwitchChange(author.user_id, 'author')}
                      >
                        {author?.active ? 'Active' : 'Inactive'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h3 className='text-center text-[20px] mt-6'>Actives</h3>
            <table className='text-center rounded-md min-w-[40rem] min-h-[20rem] mt-6 bg-gray-100'>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Date</th>
                  <th>City</th>
                  <th>Estate</th>
                </tr>
              </thead>
              <tbody>
                {activeAuthors.map((author) => (
                  <tr key={author?.user_id}>
                    <td>{author?.name} {author?.last_name}</td>
                    <td>--/--/----{author?.date}</td>
                    <td>{author?.city}</td>
                    <td>
                      <button
                        className={`${
                          author?.active ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                        }`}
                        onClick={() => handleSwitchChange(author.user_id, 'author')}
                      >
                        {author?.active ? 'Active' : 'Inactive'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;