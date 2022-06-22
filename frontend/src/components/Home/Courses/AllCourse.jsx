import {  motion } from "framer-motion";

import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
const AllCourse = () => {
    const [allProducts,setAllProducts] = useState([])
    useEffect(() =>{
        const Products = async()=>{

            const {data} = await axios.get('https://jsonplaceholder.typicode.com/albums')
                    console.log(data);
                    setAllProducts(data)
                }
                Products()

    },[])
    return (
       
         <>
         {allProducts.slice(0,9).map(p =>
          <motion.div
          initial={{  opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
          layout
          
          class="card mx-w-xs h-[348px] overflow-hidden bg-base-100 shadow-xl">
          <motion.div 
          whileHover={{y:-80}}
          transition={{ duration: 0.5}}
          >
          <figure
          
          class='overflow-hidden'
          ><motion.img 
          whileHover={{scale:1.4}}
          src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
          <div class="card-body">
            <h2 class="card-title">
              Shoes!
              <div class="badge badge-primary">NEW</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
           
          <div class="card-actions pt-14   justify-between">
          <div class="btn btn-secondary text-white">Fashion</div>
              <div class="btn btn-secondary text-white">Products</div>
            </div>
         
          </div>
          </motion.div>
        </motion.div>
         )}
       
       
  
            
        </>
    );
};

export default AllCourse;