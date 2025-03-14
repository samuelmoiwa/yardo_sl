import React from 'react'
import Sub from '../components/Sub'
import NoticesHeader from '../components/notices/NoticesHeader'
import NoticeList from '../components/notices/NoticeList'
import Subscribe from '../components/notices/Subscribe'
import FilterBar from '../components/notices/FilterBar'
import SocialShare from '../components/notices/SocialShare'

const PublicNotices = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center bg-white dark:bg-slate-900'>
      <div className="w-full flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 to-indigo-50
        dark:from-gray-900 dark:to-indigo-950 bg-center bg-cover bg-no-repeat lg:pb-0 pb-10 overflow-hidden
        max-w-[110rem]"
      >
        <NoticesHeader />
        <NoticeList />
        <Subscribe />
        <SocialShare />
        {/* <FilterBar onFilterChange={function (filter: string): void {
          throw new Error('Function not implemented.')
        } } /> */}
      </div>
    </div>
  )
}

export default PublicNotices
