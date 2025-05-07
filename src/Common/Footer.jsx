import React from 'react'

export default function Footer() {
    return (
     
        <div >
            <div className=' max-w-[1560px] grid grid-cols-[20%_auto] '>

                <div className='h-auto'>
                    {/* Fisrt div Blank */}
                </div>

                {/* Second Div Footer Start */}
                <footer class="bg-white  dark:bg-gray-100 ">
                    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-700">© 2023 <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>. All Rights Reserved.
                        </span>
                        <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-700 dark:text-gray-400 sm:mt-0">
                            <li>
                                <a href="#" class="hover:underline">Design By WsCube Tech</a>
                            </li>
                        </ul>
                    </div>
                </footer>

            </div>
        </div>
    )
}
