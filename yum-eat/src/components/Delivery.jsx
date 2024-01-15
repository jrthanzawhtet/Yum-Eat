import React from 'react'

const Delivery = () => {
  return (
    <div className='w-[1300px] bg-white py-16 px-4'>
        <h3 className='text-orange-500 font-bold text-2xl text-center'>
            Quick Delivery App
        </h3>
        <div className='w-full mx-auto grid md:grid-cols-2'>
            <img src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp" alt=""
            className='w-[550px] mx-auto my-4'
             />
             <div className='flex flex-col  justify-center'>
                <p className='text-[#00df9a] font-bold'>Get The App</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
                    Limitless Convenience on-demand
                </h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                     Omnis ducimus aliquam incidunt illo dolorem. Vel fuga
                      voluptatibusnobis assumenda maiores nisi. Alias deserunt 
                    explicabo molestiae rerum nam, corrupti dolores enim.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus illum a dolore, dolorum ipsum nemo debitis mollitia vitae placeat ad, tempora omnis accusantium in dignissimos, quo voluptatem repellendus tenetur. Eaque.
                    Magnam ab enim officia voluptatem rem sint architecto distinctio, consequuntur voluptate consectetur inventore obcaecati est dolores exercitationem eius reprehenderit cum, laudantium ut quis soluta, dolore dolorum vero ex! Id, beatae!
                </p>
             </div>
        </div>
    </div>
  )
}

export default Delivery