import About from '@/component/About'
import Amenities from '@/component/Amenities'
import Blog from '@/component/Blog'
import Hero from '@/component/Hero.'
import Prices from '@/component/Prices'
import Rooms from '@/component/Rooms'
import Testimonials from '@/component/Testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <Rooms />
      <About/>
      <Amenities />
      <Prices/>
      <Testimonials/> 
      <Blog/>
    </>
  )
}
