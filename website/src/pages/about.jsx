import React from 'react'
import Layout from '../components/layout'
import image from "../assets/restaurant.jpg"

export default function About() {
  return (
    <div>
        <Layout>
            <div className='flex justify-center mt-9'>
                <img src={image} alt="" className='w-1/2' />
            </div>
            <div className='mt-10 mb-10 ps-24 pe-24'>
                <p className='font-bold text-5xl text-center'>About Us!</p>
                <p className='mt-5 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt molestiae sequi ipsam error libero soluta amet. Quia unde tenetur nesciunt id veritatis facere similique laudantium alias odio, numquam corporis officiis asperiores vitae delectus dicta nobis excepturi fuga dignissimos officia cupiditate aut provident quos illum. Hic voluptate sapiente nobis! Aliquam, sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum non omnis consectetur, officia voluptate ullam aspernatur. Quisquam aspernatur, reprehenderit, ea ipsam, voluptates excepturi laudantium debitis non asperiores ipsum nobis. Exercitationem tenetur perspiciatis facere voluptatibus assumenda, esse, iusto numquam laudantium dolorem asperiores magni illum. Dolores quod itaque, cum amet eum ducimus veniam quia. Soluta aspernatur libero laudantium esse obcaecati quaerat unde velit nam laborum similique minus assumenda reiciendis cumque, natus autem recusandae? Beatae et odio veritatis pariatur magni omnis ab, dolorum voluptatum ea cupiditate quo aut officiis iusto nisi mollitia, porro, voluptates at. Facilis ex fuga tenetur, at nobis iusto laudantium?</p>
            </div>
        </Layout>
    </div>
  )
}
