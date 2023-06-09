"use client"
import { ProductComp } from '../../../components/ProductComp';
import "flowbite"
import { Spinner, Button } from 'flowbite-react';
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
function Products() {
  const router = useRouter();
    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
fetch(`${process.env.NEXT_PUBLIC_URL}/api/product/allProducts`)
.then(response => response.json())
.then(data => setAllProducts(data.products))
    }, [])
  return (
    <>
    <Button onClick={()=> {
router.push("/admin/products/add-product")
    }}>Add New Product</Button>
{
    
       allProducts.length == 0?  <Spinner className='flex justify-center w-full'/>:
       
        allProducts.map((product) => {
          return <ProductComp title={product.title} slug={product.slug} price={product.price} description={product.description} />
      })
       
    }





    </>
  )
}

export default Products;
