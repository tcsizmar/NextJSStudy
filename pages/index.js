import { useEffect, useState } from 'react';
import MeetupList from '../components/meetups/MeetupList';

const MEETUP_DUMMY = [
  {
    id: 1,
    title: 'First Title Meetup',
    image:
      'https://cdn.pixabay.com/photo/2021/07/09/11/18/austria-6398889_960_720.jpg',
    address: 'Some address, 01, Some City',
    description: 'The first meetup',
  },
  {
    id: 2,
    title: 'Second Title Meetup',
    image:
      'https://cdn.pixabay.com/photo/2015/03/26/09/48/buildings-690364_960_720.jpg',
    address: 'Other address, 02, Other City',
    description: 'The second meetup',
  },
];

function HomPage(props) {
  return <MeetupList meetups={props.meetups} />
}

// RUN FOR EVERY REQUEST MADE TO THE SERVE (OPEN THE PAGE)
export async function getServerSideProps(context) {
  const req = context.req
  const res = context.res

  return {
    props: {
      meetups: MEETUP_DUMMY
    }
  }
}

// //CALL TO PREPARE PROS TO THIS PAGE, ONLY WORKS ON PAGES NOT COMPONENTS, never execute on clientside, only build process
// export async function getStaticProps() {
//   // fetch data from an API
//   return {
//     props: {
//       meetups: MEETUP_DUMMY
//     },
//     revalidate: 10 //would be revalidated on server side every 10 sec before a request, 3600 to update every hour
//   }
// }

export default HomPage;
