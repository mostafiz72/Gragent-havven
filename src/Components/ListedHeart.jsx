import React, { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { addToStoredReadList } from './Utilitis/Utilitis.js';

export default function ListedHeart() {

  // const allBookHeart = () =>{
  // }
  const allHearts = useLoaderData();
  console.log(allHearts);
  
  

  useEffect( () => {
    const storeAllHearts = addToStoredReadList();
    const IntStoreHeart = storeAllHearts.map(id => console.log(id));
    console.log(IntStoreHeart, allHearts, storeAllHearts);
    
  }, [])


  return (
    <>
          <Tabs>
            <TabList>
              <Tab>Title 1</Tab>
              <Tab>Title 2</Tab>
            </TabList>

            <TabPanel>
              <h2>Any content 1</h2>
            </TabPanel>
            <TabPanel>
              <h2>Any content 2</h2>
            </TabPanel>
        </Tabs>
          <div className="love-bookmark bg-gray-100 gap-5 container mx-auto rounded-lg p-6 justify-between flex items-center my-5">
            <div className='flex items-start gap-5'>
                <div className=' w-32 h-[100px]'><img className=' rounded-md w-full h-full object-cover' src="" alt="" /></div>
              <div>
                <h3 className=' text-xl font-bold'>Product name</h3>
                <p className=' tex-lg font-semibold my-2'>Product title</p>
                <p className=' tex-lg font-semibold'>Price: $500</p>
              </div>
            </div>
         </div>
    </>
  )
}
