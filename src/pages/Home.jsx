import React from 'react'
import { BlogCard } from '../components/BlogCard'
import { ListCard } from '../components/ListCard'
import { TrendingListCard } from '../components/TrendingListCard'
import { RecentCard } from '../components/RecentCard'
import { FooterTop } from '../components/FooterTop'
import { FooterBody } from '../components/FooterBody'
import { FooterBottom } from '../components/FooterBottom'
import img1 from '../assets/images/1.jpg'
import { HorizontalCard } from '../components/HorizontalCard'
import { TrandingPost } from '../components/TrandingPost'
import { FeatureCard } from '../components/FeatureCard'
import { SectionNav } from '../components/SectionNav'
import { Postcard } from '../components/PostCard'
import { SearchCard } from '../components/SearchCard'
import Slider from 'react-slick'


export const Home = () => {

  let settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    swipeToSlide:true,
    focusOnSelect:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
  return (
    <>
      {/* hero section */}
      <div className="container py-5 px-4">
        <div className="row g-4">

          <div className="col-lg-3">
            <BlogCard />

            <ListCard />
            <ListCard />
            <ListCard />
          </div>

          <div className="col-lg-6">
            <div className="featured-card feature-card-hero">
              <div className="featured-content">
                <p className="category">LIFESTYLE</p>
                <h1 className="headline-lg">Flood Warnings Remain in Place for Coast as Torrential Rain Is Expected</h1>
                <p className="meta-info">MAY 24, 2019 · NO COMMENTS · 1.8K VIEWS</p>
                <a href="#" className="btn btn-outline-light rounded-pill px-4 py-2 mt-3">VIEW POST</a>
              </div>
            </div>
          </div>

          <div className="col-lg-3">
            <BlogCard />

            <ListCard />
            <ListCard />
            <ListCard />
          </div>

        </div>
      </div>

      {/* tranding news  */}
      <section id="news-section" className='dark-section py-5'>
        <div className="container d-flex pb-4">
          <TrandingPost />
          <div className="other_news w-50">
            <HorizontalCard />
            <HorizontalCard />
            <HorizontalCard />
            <HorizontalCard />
            <HorizontalCard />
            <HorizontalCard />
          </div>
        </div>
      </section>

      {/* feature news section start */}
      <section >
        <div className="container">
          <div className="heading-div">
            <h2 className="primary-heading">
              feature news
            </h2>
            <h3 className="secondary-heading">
              top of the week news
            </h3>
          </div>
          <div className="pb-5 slider-container">
            <Slider {...settings}>
              <FeatureCard count='1' title='The Season Courses And Salads Wow!' />
              <FeatureCard count='2' title='The Season Courses And Salads Wow!' />
              <FeatureCard count='3' title='The Season Courses And Salads Wow!' />
              <FeatureCard count='4' title='The Season Courses And Salads Wow!' />
              <FeatureCard count='5' title='The Season Courses And Salads Wow!' />
              <FeatureCard count='6' title='The Season Courses And Salads Wow!' />
              <FeatureCard count='7' title='The Season Courses And Salads Wow!' />
              <FeatureCard count='8' title='The Season Courses And Salads Wow!' />
              <FeatureCard count='9' title='The Season Courses And Salads Wow!' />
              <FeatureCard count='10' title='The Season Courses And Salads Wow!' />
              <FeatureCard count='11' title='The Season Courses And Salads Wow!' />
              <FeatureCard count='12' title='The Season Courses And Salads Wow!' />
              <FeatureCard count='13' title='The Season Courses And Salads Wow!' />
              <FeatureCard count='14' title='The Season Courses And Salads Wow!' />
            </Slider>
          </div>
        </div>
      </section>

      {/* trending section */}
      <section className='dark-section'>
        <div className="container  py-5 px-4">
          <h2 className="border-bottom border-secondary border-3 my-4"><span className='trending-header'>TRENDING NOW</span></h2>

          <div className="row">
            <TrendingListCard count={1} />
            <TrendingListCard count={2} />
            <TrendingListCard count={3} />
            <TrendingListCard count={4} />
            <TrendingListCard count={5} />
            <TrendingListCard count={6} />
          </div>
        </div>
      </section>

      {/* tranding section starts */}
      <section className='bg-light pt-1 pb-5 '>
        <div className='container tranding-section'>
          <SectionNav title='Tranding' />
          <div className='row p-0'>
            <div className='col-lg-8 col-md-6'>
              <div className='row p-0'>
                <div className='mt-4 pt-2 col-lg-6'>
                  <Postcard />
                </div>
                <div className='mt-4 pt-2 col-lg-6'>
                  <Postcard />
                </div>
                <div className='mt-4 pt-2 col-lg-6'>
                  <Postcard />
                </div>
                <div className='mt-4 pt-2 col-lg-6'>
                  <Postcard />
                </div>
                <div className='mt-4 pt-2 col-lg-6'>
                  <Postcard />
                </div>
                <div className='mt-4 pt-2 col-lg-6'>
                  <Postcard />
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 mt-4 pt-2'>
              <SearchCard />
            </div>
          </div>
        </div>
      </section>

      {/* food and drink */}
      <div className='container py-5 px-4'>
        <h2 className="border-bottom border-secondary border-3 my-4"><span className='trending-header'>FOOD AND DRINK</span></h2>

        <div className='row'>
          <div className="col-lg-6">
            <div className="featured-card feature-card-hero">
              <div className="featured-content">
                <p className="category">LIFESTYLE</p>
                <h1 className="headline-lg">Flood Warnings Remain in Place for Coast as Torrential Rain Is Expected</h1>
                <p className="meta-info">MAY 24, 2019 · NO COMMENTS · 1.8K VIEWS</p>
                <a href="#" className="btn btn-outline-light rounded-pill px-4 py-2 mt-3">VIEW POST</a>
              </div>
            </div>
          </div>
          <div className='col-lg-3'>
            <BlogCard />
            <BlogCard />
          </div>
          <div className='col-lg-3'>
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </div>

      {/* intertainment */}
      <section className='dark-section' >
        <div className='container py-5 px-4'>
          <h2 className="border-bottom border-secondary border-3 my-4"><span className='trending-header'>intertainment</span></h2>

          <div className='row'>
            <div className='col-lg-4'>
              <BlogCard />
            </div>
            <div className='col-lg-4'>
              <BlogCard />
            </div>
            <div className='col-lg-4'>
              <BlogCard />
            </div>
            <div className='col-lg-4'>
              <BlogCard />
            </div>
            <div className='col-lg-4'>
              <BlogCard />
            </div>
            <div className='col-lg-4'>
              <BlogCard />
            </div>
          </div>
        </div>
      </section>

      {/* politics */}
      <div className='container py-5 px-4'>
        <h2 className="border-bottom border-secondary border-3 my-4"><span className='trending-header'>POLITICS</span></h2>
        <div className='row'>
          <div className='col-lg-4'>
            <BlogCard />
          </div>
          <div className='col-lg-4'>
            <BlogCard />
          </div>
          <div className='col-lg-4'>
            <BlogCard />
          </div>
        </div>
        <div className='d-flex flex-wrap justify-content-evenly col-lg-10 mx-auto'>
          <ListCard />
          <ListCard />
          <ListCard />
          <ListCard />
          <ListCard />
          <ListCard />
        </div>
      </div>

      {/* latest news */}
      <section className='dark-section' >
        <div className='container py-5 px-4 col-8'>
          <h2 className="border-bottom border-secondary border-3 my-4"><span className='trending-header'>latest news</span></h2>

          <div className='row'>
            <RecentCard />
            <RecentCard />
            <RecentCard />
            <RecentCard />
          </div>
        </div>
      </section>

    </>
  )
}
