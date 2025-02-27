import React, { useState } from 'react'
import chair1 from '../assets/dylan-shoemaker.jpg'
import chair2 from '../assets/jejo-jose.jpg'
import chair3 from '../assets/gustavoraton.jpg'
import chair4 from '../assets/jose-losada.jpg'
import chair5 from '../assets/Background.jpg'
import chair6 from '../assets/wesley-shen.jpg'

const products = [

    { id: 1, name:"Dylan", price:80, image: chair1, quantity: 1 },
    { id: 2, name:" Gustavoraton", price:100, image: chair2, quantity: 1 },
    { id: 3, name:" Jejo-jose", price:250, image: chair3, quantity: 1 },
    { id: 4, name:" Jose-losada", price:100, image: chair4, quantity: 1 },
    { id: 5, name:" Pesce-huang", price:145, image: chair5, quantity: 1 },
    { id: 6, name:" Wesley", price:120, image: chair6, quantity: 1 },
]


function cart() {

    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        const existingItem = cartItems.find((item) => item.id === product.id);
        if (existingItem) 
        {
            setCartItems(cartItems.map((item) =>item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
        } 
        else {
            setCartItems([...cartItems, { ...product }]);
          }
        };
        
        const removeFromCart = (productId) => {
            setCartItems(cartItems.filter((item) => item.id !== productId));
        };

        const increaseQuantity = (productId) => {
            setCartItems( cartItems.map((item) => item.id === productId ? { ...item, quantity: item.quantity + 1 } : item));
        };

        const decreaseQuantity = (productId) => {
            setCartItems( cartItems.map((item) => item.id === productId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 }
            : item));
        };

        const calculateTotal = () => {
            return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
        };

  return (
    <div>
        <div className='  p-[2rem]  px-[2rem]  text-center '>
            <div className=' flex justify-between font-mono text-[#3c4e50] '>
                <h3>Our Bestseller </h3>
                <p> more</p>
            </div>
            <div className='w-full bg-[#404b4d] mt-[1rem] h-[1px]'></div>

            <div className='container mt-[2rem]  mx-auto'>
                <h1 className="text-2xl font-mono text-[#3c4e50] font-bold mb-4">Products Cart</h1>
                <div className=" flex-wrap flex  -mx-4">
                    <div className="w-full md:w-2/3 px-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {products.map((product) => ( 
                                <div key={product.id} className='border-[#7a756f]  border p-4 rounded-[10px] shadow'>
                                    <img src={product.image} alt={product.name} className=" w-full  h-[30vh] rounded-[10px]  "/>
                                    <div className=' '>
                                        <div className='text-center py-2'>
                                            <h3 className=" font-mono font-semibold">{product.name}</h3>
                                            <p className="text-sm font-mono">Price: ${product.price}</p>
                                        </div>
                                        <button onClick={() => addToCart(product)}className={`mt-2 bg-[#3c4e50]  hover:bg-[#7a756f] text-white font-[14px] py-1 px-4 rounded`}>Add to Cart</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className=' w-full md:w-1/3 justify-items-center rounded-[10px] px-4'>
                        <h2 className="text-lg font-semibold font-mono text-[#3c4e50] mb-2">Cart</h2>
                        <div>
                            {cartItems.length === 0 ? (
                              <p className='font-mono text-[#3c4e50]'> Your cart is empty</p>
                        ) : (
                            <div>
                                {cartItems.map ((item) => (
                                    <div key={item.id} className=" items-center   justify-between mb-2">
                                        <div className=''>
                                            <img src={item.image} alt={item.name} className="w-[230px] rounded-[10px] h-32 object-cover mr-2"/>
                                            <div className=' flex justify-between py-2'>
                                                <div className='font-mono text-[#3c4e50]'>
                                                    <h3 className="text-sm   font-semibold">{item.name}</h3>
                                                    <p className="text-xs">Price: ${item.price}</p>
                                                </div>
                                                
                                                <div>
                                                    <button onClick={() => decreaseQuantity(item.id)} className="bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded">-</button>
                                                    <span className="mx-2">{item.quantity}</span>
                                                    <button onClick={() => increaseQuantity(item.id)} className="bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded">+</button>
                                                </div>
                                            </div>
                                        </div>
                                        <button onClick={() => removeFromCart(item.id)} className='mt-2 bg-[#3c4e50]  hover:bg-[#7a756f] text-white font-[14px] py-1 px-4 rounded'>
                                            Remove
                                        </button>
                                    </div>
                                ))}
                                <div className="mt-4 border-[#3c4e50] border-t pt-2">
                                    <p className="font-semibold">Total: ${calculateTotal()}</p>
                                </div>
                            </div>
                        )}
                    </div>


                </div>

            </div>
        </div>
    </div>
    </div>
  )
    }
                {/* <div className="w-full bg-red-700  md:w-1/3 px-4">
                <h2 className="text-lg font-semibold mb-2">Cart</h2>
                <div className=''> {cartItems.length === 0 ? (
                    <p>Your cart is empty.</p>
                ): (
                    <div>
                        {cartItems.map((item) => (
                            <div key={item.id} className="flex items-center justify-between mb-2">
                                <div className='flex items-center'>
                                    <img src={item.image} alt={item.name} className='w-[4rem] h-[4rem] object-cover mr-2'/>
                                    <div>
                                        <h3 className="text-sm font-semibold">{item.name}</h3>
                                        <p className="text-[12px] leading-[1rem]">Price: ${item.price}</p>
                                        <div>
                                            <button onClick={() => decreaseQuantity(item.id)} className="bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded">-</button>
                                            <span className="mx-2">{item.quantity}</span>
                                            <button onClick={() => increaseQuantity(item.id)} className="bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded">+</button>
                                        </div>
                                    </div>
                                </div>
                                <button  onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700">Remove </button>
                            </div>
                        ))}
                        <div className="mt-4 border-t pt-2">
                            <p className="font-semibold">Total: ${calculateTotal()}</p>
                        </div>  
                    </div>
                )}
            </div>
            </div>
            
        </div>
        */}

export default cart;