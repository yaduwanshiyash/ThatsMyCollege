import Carousel from "../components/Carousel"
import CoursesHome from "@/components/CoursesHome"
import HomeStrip from "@/components/HomeStrip"
import FeaturedCollege from "@/components/TopBTechCollege"
import Topcolleges from "@/components/TopManagementColleges"

const page = () => {
  return (
    <>
      <Carousel />
      <CoursesHome />
      <FeaturedCollege />
      <Topcolleges />
      <HomeStrip />
    </>
  )
}

export default page
