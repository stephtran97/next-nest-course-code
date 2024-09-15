import React from 'react';
import { InformationCircleIcon as Icon } from '@heroicons/react/20/solid';
import './style.css';

// Use curly braces to display banner data
export default function Banner() {
  const bannerData = {
    icon: (
      <Icon
        className='banner-icon'
        aria-hidden='true'
      />
    ),
    version: 5,
    href: '/details'
  };

  return (
    <div className='banner-wrapper'>
      <div className='flex'>
        <div className='flex-shrink-0'>{bannerData.icon}</div>
        <div className='banner-content'>
          <p className='banner-text'>
            A new software update is available. See what’s new in version{' '}
            {bannerData.version}
          </p>
          <p className='banner-details'>
            <a
              className='banner-details-link'
              href={bannerData.href}
            >
              Details
              <span aria-hidden='true'> &rarr;</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
