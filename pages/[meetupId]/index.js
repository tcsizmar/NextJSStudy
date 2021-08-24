import { useRouter } from 'next/router';
import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails(props) {
  return <MeetupDetail meetupData={props.meetupData} />;
}

//
export function getStaticPaths() {
  // will be generated dinamicaly later
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: '1',
        },
      },
      {
        params: {
          meetupId: '2',
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  console.log(meetupId);
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
  // fetch the date for a single meetup
  return {
    props: {
      meetupData: MEETUP_DUMMY.filter((x) => x.id == meetupId)[0] || {},
    },
  };
}

export default MeetupDetails;
